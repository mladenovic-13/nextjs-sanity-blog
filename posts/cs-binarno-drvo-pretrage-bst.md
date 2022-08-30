---
title: "Binarno drvo pretrage (BST)"
author: "Nikola Mladenovic"
category: "CS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - Computer sscience
  - Data Structures
---

# Binarno drvo pretrage ( BST )

Drveta su strukture podataka koje se koriste za predstavljanje hijerarhijskih odnosa izmedju delova kao npr kod:

- izraza
- sistema direktorijuma i datoteka
- organizacije elemenata unutar HTML stranica
- sintakse programa unutar prevodioca i sl.

Binarno drvo je rekurzivno definisani tip podataka.

Uobicajeni nacin za predstavljanje drveta u jeziku C++ je uz pomoc cvorova uvezanih pokazivacima. U slucaju skupova i multiskupova u cvoru se cuva samo jedan podatak.

```other
struct cvor {
    int x;
    cvor *levo,  *desno;
};
```

U slucaju da se koriste za implementaciju mapa i multimapa u cvoru se cuvaju kljuc i vrednost kao podaci.

```other
struct cvor {
    int k, v;
    cvor *levo, *desno;
};
```

Posto je binarno drvo rekurzivnog tipa, funkcije se najlakse implementiraju rekurzivno.

## Uredjeno binarno drvo

Drvo je uredjeno binarno drvo ( binarno drvo pretrage ), ako je prazno ili ako je njegovo levo i desno poddrvo uredjeno i ako je cvor u korenu veci od svih cvorova levo, a manjih od svih cvorova desno.

Ovakva definicija bez duplikata koristi se za skupove i mape, dok za multiskupove i multimape koristimo definiciju u kojoj je cvor veci ili jednak od svih cvorova u desnom poddrvetu.

![Dek, visualized](/home/mladenovic13/Downloads/binarytree.png =800x600)

## Balansirano binarno drvo

Mana klasicnih binarnih drveta je to sto ako nisu balansirana operacije pretrage, umetanja i brisanja mogu zahtevati linearno vreme u odnosu na broj cvorova u drvetu. Balansirana drveta garantuju da je vremenska slozenost u najgorem slucaju _O_(*log*k), gde je k broj cvorova.

Dve najcesce koriscene vrste balansiranog binarnog drveta su:

- **AVL**
- **RBT**
