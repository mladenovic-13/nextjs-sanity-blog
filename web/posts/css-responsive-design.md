---
title: "CSS Responsive Design"
author: "Nikola Mladenovic"
category: "CSS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - CSS
  - Animations
  - Design
---

# Responsive Design

U ranijim danima web programiranja, stranice se u pravljene za uredjaje sa tacno odredjenom velicinom ekrana. Sa pojavljivanjem uredjaja sa velikim brojme razlicitih vrsta i velicina ekrana pojavio se i koncept **responsivnog dizajniranja** stranica (RWD). To je omogucilo se stranice prilagodjavaju uredjaju na koji se prikazuje.

Kod responsivnog dizajna koristi kombinacija tri tehnika:

- Fluid Grids
- Fluid Images
- Media Query

Moramo naglasiti da responzivno dizajniranje nije zasebna tehnologija, vec predstavlja jedan pristup veb programiranju, niz pravila koja se koriste kako bi stranica adekvatno bila prikazana na odredjenom uredjaju.

Razmotricemo nekoliko svojstva CSS-a koja mogu pomoci kod respoznivnog dizajniranja stranica.

### Media Queries

Ovo nam omogucava da postavljamo uslove na osnovu kojih cemo odlucivati da li se neki deo stranice prikazuje i kako.

Na primer naredni Media Query proverava da li se stranica prikazuje na ekranu i da li je ekran sirine barem 800px. Klasa `.container` ce biti primenjena samo ako je postavljeni uslov tacan.

```other
@media screen and (min-width: 800px) {
  .container {
    margin: 1em 2em;
  }
}
```

U jednom dokumentu mozemo smestiti vise Media Query-ja. Mesta na kojima se stranica prelama nazivamo **breakpoints.**

Cesta praksa je da se koristi jednostavan prikaz u jednom redom za telefone, zatim postavljamo uslov za vece ekrane i implementiramo prikaz u vise od jednog reda. Ovaj pristup naziva se **mobile-first design**.

### Moderne tehnologije pozicioniranja

Naredne tehnologije su respozivne same po sebi.

#### Multicol

Dodeljivanjem vrednosti svojstvu `column-count` odredjujemo u koliko kolona zelimo da rasporedimo sadrzaj. Zatim pretrazivac u zavisnosti sa kog uredjaja se pristupa stranici odredjuje broj kolona.

```other
.container {
  column-count: 3;
}
```

Ako u suprotnom definisemo `column-width` odredjujemo minimalnu sirinu kolone. Zatim ce pretrazivac formirati najvise sto moze kolona te velicine, a da mogu da stanu u kontejner.

```other
.container {
  column-width: 10em;
}
```

#### Flexbox

Definisanjem svojstva `flex-grow` i `flex-shrink` odredjujemo ponasanje elemenata kada se prostor izmedju njih povecava ili smanjuje.

#### Grid

Kod mreza respozivnost postizemo koriscenjem merne jedinice `fr` za odredjivanje velicine kolona.

```other
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Ovo ce formirati mrezu sa tri kolone proporcijalne velicine.

### Responsive Images

Jedan od najstarijih nacina manipulisanja slikama, koji se i danas koristi u veklikoj meri jer postavljanje svojstva `max-width`.

```other
img {
  max-width: 100%;
}
```

Ovaj pristup ima mnogo nedostataka. Mobili uredjaj ce skidati sliku u punoj velicini iako se prikazuje kao manja, sto dovodi do sporijeg ucitavanja stranice i trosenja vece kolicine podataka. Takodje ako zelimo na mobilom uredjaju prikazemo uspravnu sliku, a na racunaru polozenu to ne mozemo izvesti pomocu ove metode.

Ovaj problem se resava koriscejem `<picture>` elementa ili `<img>` sa postavljenim atributima `srcset` i `size`.

### Responsive Typography

Respozinzivna tipografija je sastavni deo responzivnog dizajna. Postoje dva nacina definisanja velicine teksta: apsolutna (px, mm...) i relativna (em, rem, vw, vh). Naravno u slucaju respozivnog dizajniranja koristimo **realtivne.**

- em - definise velicinu u odnosu na roditelja
- rem - definise velicinu u odnosu na koren stranice ( r - root)

U narednom primeru velicina fonta ce se menjati oko prelomne tacke od 1200px. Na vecim ekranima naslov ce biti 4rem ( 4 \* velicina fonta u korenu), dok ce na manjim biti 2rem.

```other
html {
  font-size: 1em;
}

h1 {
  font-size: 2rem;
}

@media (min-width: 1200px) {
  h1 {
    font-size: 4rem;
  }
}
```

#### Koriscenje viewport jedinica za font

- 1vw - jedan procenat sirine trenutnog ekrana

```other
h1 {
  font-size: 6vw;
}
```

Definisanjem na ovaj nacin dolazimo do problema. Korisnik ne moze da zumira tekst jer uvek zavisi od velicine ekrana. **Zato nikada ne koristimo vw samostalno.**

Resenje ovog problema je koriscenje "funkcije " `calc()`.

```other
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

Ovim postizemo da se velicina fonta menja srazmerno velicini ekrana, tako da nemamo potrebe ni za koriscenje Media Query-a.

### Viewport metatag

Kada pogledate HTML fajl resposivnih stranica, verovatno cete naci naredni metatag.

```other
<meta name="viewport" content="width=device-width,initial-scale=1">
```

Ovaj metatag govoti pretrazivacu na mobilnom telefonu da postavi viewport na velicinu ekrana uredjaja. U suprotnom za velicinu uzima 960px sto je podrazumevana vrednost, sto nam onemogucava koriscenje Media Query-ja.

**Uvek moramo da napisemo tu linuju koda u dokumentu.**
