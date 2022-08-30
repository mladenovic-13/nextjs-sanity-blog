---
title: "Hip
"
author: "Nikola Mladenovic"
category: "CS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - Computer sscience
  - Data Structures
---

# Hip

Hip je struktura podataka organizovana u binarno stablo.Uslov je da je svaki nivo osim eventualno poslednjeg potpuno popunjen. U zavisnosti od toga koju vrednost stavljamo u koren stabla imamo dve vrste hipa:

- **Maks-hip** - vrednost svakog cvora veca ili jednaka od vrednosti u njegovim potomcima.
- **Min-hip** - vrednost svakog cvora manja ili jednaka od vrednosti u njegovim potomcima

Ove dve strukture omogucavaju efikasnu implementaciju **reda sa prioritetom** ( bibliotecka implementacija: `priority_queue<T>`), jer mozemo jednostavno ocitati maksimum ili minimum koji je uvek u korenu stabla. Takodje efikasno mozemo dadati novi element u hip.
