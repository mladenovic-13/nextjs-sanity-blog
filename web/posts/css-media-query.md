---
title: "Media Query"
author: "Nikola Mladenovic"
category: "CSS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - CSS
  - Animations
  - Design
---

# Media Query

Medijski upiti nam omogucavaju da primenjujemo CSS u zavisnosti od uslova koje postavimo, na primer "sirina ekrana je veca od 480px". Oni su kljucni deo responsivnog dizajna veb stranica jer nam omogucavaju da prilagodjavamo raspored sadrzaja u zavisnosti od uredjaja na kome se prikazuje.

Sintaksa najjednostavnijeg medijskog upita izgleda ovako:

```other
@media media-type and (media-feature-rule) {
  /* CSS rules go here */
}
```

Moguce media tipovi:

- `all`
- `screen`
- `print`

### Moguci uslovi

#### Sirina i visina

Jedan od najcescih parametara koji se koristi je sirina viewport-a. Ulove koje mozemo postaviti su:

- `max-width`
- `min-width`
- `width`

```other
@media screen and (max-width: 600px) {
    body {
        color: blue;
    }
}
```

U ovom slucaju se menja boja teksa u plavo ako je sirina manja od 600px.

#### Orijentacija ekrana

Ovo nam omugacava da testiramo da li je ekran u portrait ili landscape modu i u zavisnosti od toga primenimo odredjeni CSS.

```other
@media (orientation: landscape) {
    body {
        color: rebeccapurple;
    }
}
```

#### Koriscenje misa

Omogucava da testiramo da li korisnik moze da predje misem preko odredjenog sadrzaja.

```other
@media (hover: hover) {
    body {
        color: rebeccapurple;
    }
}
```

Ako znamo da korisnik ne moze da predje misem, mozemo neki interaktivni sadrzaj prikazati bez prelaska misem preko njega.

### Kompleksniji medijski upiti

Postoji mogucnost da kombinujemo vise medijskih upita kako bi dobili zeljeni efekat.

#### Operator "and"

Kada zelimo da upit ispunjava vise od jednog zahteva vezujemo vise njih operatorom "and", kao sto je bio slucaj u nekom od prikazanih primera.

```other
@media screen and (min-width: 600px) and (orientation: landscape) {
    body {
        color: blue;
    }
}
```

#### Operator "or"

Koristimo kada zelimo da upit ispunjava jedno od zadatih svojstva.

```other
@media screen and (min-width: 600px), screen and (orientation: landscape) {
    body {
        color: blue;
    }
}
```

#### Operator "not"

Negiranje upita, odnosno sve suprotno u odnosu na to sto je zahtevano u upitu.

```other
@media not all and (orientation: landscape) {
    body {
        color: blue;
    }
}
```

### Kako biramo prelomne tacke?

U pocetku dizajneri su gadjali konkretne uredjaje za koje je unapred bila poznata velicina ekrana. Danas to nije moguce jer imamo veliki broj razlicitih uredjaja pa samim tim i velicina ekrana. Bolje resenje je da se sadrzaj prelama na odredjenom mestu. Ta mesta zovemo **breakpoints**.

### Mobile first nacin dizajniranja

Stranicu mozemo dizajnirati prvo npr. za racunare, zatim odrediti prelomne tacke kako bi je prilagodili manjem uredjaju. Mozemo pristupiti i kontra. Prvo kreiramo stranicu za telefone, pa kako ekran raste dodajemo nov raspored.

Kod mobilnih telefona najcesce sadrzaj stavljamo u jednu kolonu.
