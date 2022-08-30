---
title: "CSS Grid Layout"
author: "Nikola Mladenovic"
category: "CSS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - CSS
  - Animations
  - Design
---

# CSS Grid Layout

CSS Grid Layout omogucava da grupisemo elemente u redove i kolone. Radi se o dvodimenzionalnom pozicioniranju. Mrezu (grid) formiraju horizontalne i vertikalne linije.

Mrezu mozemo formirati kao **fiksiranu** i kao **fleksibilnu**. Za odredjivanje velicine kod fiksirane koristimo **piksele**, dok kod fleksibilne koristimo **frakcije** (fr).

Elemente mozemo pozicionirati tako sto eksplicitno zadamo broj linije u mrezi, ime ili odredjeno podrucje u mrezi. Ako nismo zadali odredjenu poziciju koristi se algoritam koji sam odredjuje poziciju elementa.

Mozemo poravnavati elemente, kao i samu mrezu.

Takodje, u jednju celiju mreze mozemo staviti vise od jednog elementa. Kako ce elementi biti rasporedjeni unutar jedne celije mozemo kontrolisati svojstvom `z-index`.

**Grid cells (celija)** - Najmanja jedinica grida, mozemo napraviti analogiju sa celijom tabele.

**Grid areas (podrucja)** - Elementi se mogu semstiti u jednu ili vise celija. Podrucje koje zauzima taj element nazivamo Grid Area.

**Gutters (gap)** - pazmak izmedju pojedinacnih celija grida.

### Grid Kontejner

Grid kontejner kreiramo tako sto vrednost svojstva `display` postavimo na `grid` ili `inline-grid`. Nakon toga svi direktni potomci kontejnera ce postati elementi mreze.

```other
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

Nakon toga u CSS fajlu implementiramo klasu.

```other
.wrapper {
  display: grid;
}
```

![grid.png](/images/posts/css/grid.png)

### Definisanje mreze

Redove i kolone odredjujemo svojstvima `grid-template-colum` i `grid-template-row`. Prikazacemo dva prosta primera definisanja mreze u px i fr.

#### U pikselima

```other
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```other
.wrapper {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

![grid1.png](/images/posts/css/grid1.png)

#### U frakcijama

```other
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```other
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

![grid2.png](/images/posts/css/grid2.png)

### "Funkcija" repeat()

Kako bi formirali velike mreze bez previse kucanja koristimo `repeat()` u definiciji mreze.

```other
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

```other
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

Mozemo koristiti eksplicitno definisanje redova i kolona **zajedno** sa `repeat().`

```other
.wrapper {
  display: grid;
  grid-template-columns: 20px repeat(6, 1fr) 20px;
}
```

### Implicitno formiranje mreze

Ako dodajemo elemente izvan eksplicitno definisane mreze, redovi se formiraju sami, a njihova velicina zavisi od sadrzaja elemenata. Takodje mozemo odrediti velicinu redova i kolona koji su se sami formirali svojstvima `grid-auto-rows` i `grid-auto-columns`.

Jos jedna mogucnost je da definisemo minimalnu i maksimalnu velicinu novoformiranih elemenata.

```other
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
```

## Linije mreze

Jedana od metoda koja se najcesce koristi za pozicioniranje elemenata u mrezi je ta da zadamo pocetak i kraj reda ili kolone u koju zelimo da smestimo element.

![grid3.png](/images/posts/css/grid3.png)

U narednom primeru cemo definisati mrezu i za pozicioniranje elemenata koristiti brojeve linija na mrezi.

```other
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
  <div class="box5">Five</div>
</div>
```

```other
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 3;
  grid-row-end: 5;
}
```

![grid4.png](/images/posts/css/grid4.png)
