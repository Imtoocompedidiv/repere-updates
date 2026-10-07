const { createCipheriv, createDecipheriv, randomBytes } = require('node:crypto');
const fs = require('node:fs');
const { spawnSync } = require('node:child_process');
const path = require('node:path');
const key = Buffer.from(process.env.DRIP_PRIVATE_BUILD_KEY, 'hex');
if (key.length !== 32) throw new Error('Invalid build key');
if (process.argv[2] === 'open') {
  const bytes = fs.readFileSync('source.dripenc');
  const cipher = createDecipheriv('aes-256-gcm', key, bytes.subarray(0,12));
  cipher.setAuthTag(bytes.subarray(12,28));
  fs.writeFileSync('source.zip', Buffer.concat([cipher.update(bytes.subarray(28)), cipher.final()]));
} else if (process.argv[2] === 'build') {
  const access = JSON.parse(fs.readFileSync('private-build-access.json'));
  const result = spawnSync(process.execPath, ['node_modules/electron-builder/cli.js', '--mac', 'dmg', 'zip', `--${process.argv[3]}`, '--publish', 'never'], { stdio:'inherit', env:{...process.env,DRIP_MANAGED_API_KEY:access.apiKey,CSC_IDENTITY_AUTO_DISCOVERY:'false'} });
  process.exit(result.status ?? 1);
} else {
  fs.mkdirSync('private-logs', {recursive:true});
  const paths = ['private-logs', 'source/qa-release', 'source/dist/distribution'].filter(p=>fs.existsSync(p));
  const result = spawnSync('tar',['-czf','output.tar.gz',...paths],{stdio:'inherit'});
  if (result.status !== 0) throw new Error('Archive failed');
  const iv = randomBytes(12), cipher = createCipheriv('aes-256-gcm',key,iv);
  const encrypted = Buffer.concat([cipher.update(fs.readFileSync('output.tar.gz')),cipher.final()]);
  fs.mkdirSync('sealed-output',{recursive:true});
  fs.writeFileSync(path.join('sealed-output',`Drip-0.6.0-${process.argv[3]}.dripenc`),Buffer.concat([iv,cipher.getAuthTag(),encrypted]));
}
