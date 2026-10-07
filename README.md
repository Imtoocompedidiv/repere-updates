# Drip

Drip t’aide à préparer une conversation et à suivre les échanges dans une fenêtre près de ta caméra. La préparation, le guide de démarrage, la démonstration et l’assistance en direct sont réunis dans la même application.

## Télécharger Drip 0.5.0

Les fichiers sont accessibles sans compte GitHub. Cette version est proposée pour essai.

| Ordinateur | Installateur |
| --- | --- |
| Windows 10 ou 11, processeur x64 | [Drip pour Windows](https://github.com/Imtoocompedidiv/repere-updates/releases/download/v0.5.0/Drip-0.5.0-Windows-x64.exe) |
| Mac avec puce Apple, macOS 14.2 ou plus récent | [Drip pour Mac Apple Silicon](https://github.com/Imtoocompedidiv/repere-updates/releases/download/v0.5.0/Drip-0.5.0-Mac-arm64.dmg) |
| Mac Intel, macOS 14.2 ou plus récent | [Drip pour Mac Intel](https://github.com/Imtoocompedidiv/repere-updates/releases/download/v0.5.0/Drip-0.5.0-Mac-x64.dmg) |

[Guide d’installation](https://github.com/Imtoocompedidiv/repere-updates/releases/download/v0.5.0/LIRE-AVANT-INSTALLATION.txt) · [Empreintes SHA-256](https://github.com/Imtoocompedidiv/repere-updates/releases/download/v0.5.0/SHA256SUMS.txt) · [Détails de la version](https://github.com/Imtoocompedidiv/repere-updates/releases/tag/v0.5.0)

## Installer et démarrer

Sur Windows, ouvre l’installateur. Il installe Drip pour ton compte et crée les raccourcis sur le Bureau et dans le menu Démarrer. Aucun Node.js, terminal ou pilote audio virtuel n’est à installer.

Sur Mac, ouvre le DMG et déplace Drip dans Applications. Le menu Apple > À propos de ce Mac indique si ton ordinateur possède une puce Apple ou un processeur Intel. Si une ancienne application Repere est ouverte, quitte-la avant de démarrer Drip.

Au premier lancement, le guide **Premiers pas** permet d’essayer une démonstration par texte sans clé Gemini ni autorisation audio. Ses réponses sont simulées. Pour l’assistance en direct, renseigne ta propre clé Gemini, ton objectif et tes consignes, puis utilise **Commencer**. Drip demande les autorisations audio nécessaires ; ton microphone reste facultatif.

L’assistance Gemini demande une connexion, un accès aux modèles et du quota sur ton compte Google. L’audio et les textes utiles sont transmis à Google. La clé reste chiffrée sur ton ordinateur. Les documents et la transcription de cette version restent en mémoire pendant la session.

## Passage de Repère à Drip

Drip reprend les objectifs, les consignes, les réglages et la clé Gemini des versions Electron de Repère. Sur Windows, l’installateur remplace également les anciens raccourcis. Une seule application peut ouvrir ce profil à la fois.

L’ancien candidat Mac écrit en Swift utilise un autre stockage. Il faut y réenregistrer la préparation et la clé dans Drip. Après avoir vérifié Drip, tu peux retirer cette ancienne application.

## État de cette version

Les installateurs ne disposent pas encore d’une signature de confiance Windows ni d’une signature Apple Developer ID avec notarisation. Le système peut demander une autorisation d’ouverture, et un ordinateur administré par une organisation peut refuser l’application. Vérifie la provenance et les empreintes des fichiers avant de les autoriser.

L’installation et le remplacement de Repère ont été vérifiés sur Windows. Les deux DMG ont été montés, copiés puis lancés sur Mac Apple Silicon et Intel. Les autorisations et l’écoute prolongée sur chaque configuration audio restent à qualifier.

Pour cette version, les nouvelles versions s’installent avec leur installateur et conservent le profil Electron. Le canal de correctifs automatiques dans l’application reste inactif.

Ce dépôt contient les fichiers de distribution de Drip. Le dépôt de développement reste privé. Pour signaler un problème, ouvre un [ticket](https://github.com/Imtoocompedidiv/repere-updates/issues) en indiquant ton système et les étapes qui le reproduisent. Retire les clés, les conversations et les données personnelles des captures ou des journaux joints.
