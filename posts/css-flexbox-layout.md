---
title: "CSS Flexbox Layout"
author: "Nikola Mladenovic"
category: "CSS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - CSS
  - Animations
  - Design
---

# CSS Flexbox Layout

Flexible Box Model (Flexbox) je jednodimenzijalni (red ili kolona) model rasporedjivanja elemenata na HTML stranici, suprotno od CSS Grid-a koji je dvodimenzionalni model.

Kada radimo sa flexbox-om moramo da razumemo njegove ose (Axes).

- Main Axis - definise se sa `flex-direction` i moze da ima sledece vrednosti
  - `row`
  - `row-reverse`
  - `column`
  - `column-reverse`
- Cross Axis - suprotno glavnoj osi, ako je `flex-direction` postavljen na `row` cross axis ce biti `column` i suprotno

![flexbox-terminology.png](/images/posts/css/flexbox-terminology.png)

### Flex Container

Element na kome primenjujemo Flex Box model nazivamo **flex continer**. Element "pretvaramo" u Flex Box container tako sto vrednost svojstva `display` postavimo na `flex`. Kada to uradimo direktni potomci tog elementa postaju **flex children**.

Podrazumevane vrednosti svojstva unutar flex box container-a su:

- Elementi se prikazuju redu
- Elementi krecu od pocetka glavne ose
- Elementi se ne sire na celu glavnu osu, ali se mogu smanjiti
- Elementi se sire na celu cross osu
- `flex-basis` svojstvo je `auto`
- `flex-wrap` je `nowrap`

Sta ovo znaci? Elementi su svi u jednom redu i zauzimaju onoliko prostora koliko je potrebno da se prikazen njihov sadrzaj.

Ako svojstvo `flex-wrap` postavimo na `wrap` elementi za koje nema mesto u jednom redu ce preci u sledeci. Da bi `flex-wrap` mogao "da radi svoj posao" koristimo `max-width` i `max-hight` za definisanje sirine i visine.

### Svojstva koja se primenjuju na flex elemente

Flex elemente kontrolisemo najcesce postavljanjem vrednosti narednim svojstvima:

- `flex-grow`
- `flex-shrink`
- `flex-basis`

Pre nego sto krenemo u razmatranje ovih svojstva moramo da razumemo termin **slobodno mesto**. Menjanjem vrednosti ovih svojstva menjamo nacin na koji ce se rasporedjivati slobodno mesto izmedju elemenat.

Ako imamo tri elementa siroka 100px a kontejner velici 500px, minimalan prostor koji zauzimaju elementi je 300px sto nam ostavlja 200px slobodnog mesta.

![free-space.png](/images/posts/css/free-space.png)

Ova tri navedena svojstva ce kontorlisati razmak izmedju tih elemenata.

### Flex-basis svojstvo

Ovo svojstvo definise koja ce biti velicina elementa u zavisnosti od toga koliko slobodnom prostora ostavlja. Podrazumevana vrednost je `auto` - u ovom slucaju pretrazivac proverava da li element ima odredjenu velicinu. U prikazanom primeru svi elementi imaju sirinu 100px pa se to koristi kao vrednost `flex-basis`.

Ako element nema eksplicitno odredjenu velicinu, uzima se velicina koja je potrebna za njegov sadrzaj.

### Flex-grow svojstvo

Ako postavimo `flex-grow` vrednost na pozitivni intidzer, elementi mogu da se sire po glavnoj osi. Ako svim elementima u kontejneru postavimo vrednost na 1, rasporedice se po glavnoj osi tako da zauzmu sav slobodan prostor, podjednako.

Takodje mozemo slobodan prostor mozemo rasporedjivati i proporcijalno. Ako jednom elementu damo vrednost 2, a svim ostima 1, dva dela slobodnog prostora ce biti dodeljena prvom elementu, dok ce ostali ravnomerno rasporediti ostatak slobodnog prostora.

### Flex-shrink svojstvo

Dok svojstvo `flex-grow` odredjuje koliko prostora ce zauzeti element, svojstvo `flex-shrink` odredjuje koliko prostora ce mu biti oduzeto. Ako nemamo dovoljno mesta da prikazemo sve elemente u kontejneru i `flex-shrink` je postavljen na pozitivan intidzer, element moze postati manji u odnosu na `flex-basis`.

Kao i kod `flex-grow` mozemo dodeliti razlicite vrednosti. Element sa vecom vrednoscu ce se brze smanjivati od onih sa manjom.

## Poravnanje elemenata

Jedna od glavnih funkcionalnosti Flex Box-a je poravnanje elemenata i odredjivanje razmaka izmedju elemenata po horizontali i vertikali. Ova svojstva se desfinisu u **kontejneru**.

### align-items

Ovo svojstvo poravnava elemente po cross-osi.

Podrazumevana vrednost je `stretch` i zato se flex elementi sire na visinu flex kontejnera. Ovo moze biti odredjeno visinom najviseg elementa ili eksplicitnim odredjivanjem visine kontejnera. Moguce opcije:

- `stretch`
- `flex-start`
- `flex-end`
- `center`

### justify-content

Ovo svojsvo odredjuje poravnanje elementa na glavnoj (main) osi, odnosno u zavisnosti od toga kako je `flex-direction` postavlje. Podrazumevana vrednost je `flex-start` i svi elementi su postavljeni na pocetak kontejnera. Moguce vrednosti:

- `center`
- `flex-start`
- `flex-end`
- `space-around`
- `space-between`
- `space-evenly`
