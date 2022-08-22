---
title: "Sass Preprocessor"
author: "Nikola Mladenovic"
category: "CSS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - CSS
  - Animations
  - Design
---

# Sass Preprocessor

CSS sam po sebi je mocan alat, ali fajlovi vremenom postaju sve veci, kompleksniji i teski za odrzavanje. U tom slucaju nam moze pomoci **preprocesor** kao sto je **Sass.**

Funkcionalnosti koje Sass nudi su: promenljive, ugnjezdavanje, miksins i druge.

Najjednostavniji nacin za prevodjenje Sass-a u CSS fajl je u terminalu. Odredimo koji fajl zelimo da prevedemo i gde da smestimo novonastali CSS fajl. Pokretanje `sass input.scss output.css` uzima jedan Sass fajl i prevodi ga u `output.css`.

Takodje mozemo nadgledati odredjenje fajlove uz pomoc opcije `--watch`. Ova opcija kaze Sass prevodiocu da prati promene u navedenom fajlu i automatski generise CSS fajl. To bi izgledalo ovako u terminalu:

```other
sass --watch input.scss output.css
```

Mozemo pratiti i promene u celom folderu.

```other
sass --watch app/sass:public/stylesheets
```

## Funkcionalnosti Sass-a

### Variables (promenljive)

Gledajte na promenljive kao nacin da sacuvamo vrednosti koje zelimo da koristimo vise puta. Mozemo cuvati boje, fontove, velicine itd. Sass koristi `$` za definisanje promenljive.

Sass

```other
$font-stack: Helvetica, sans-serif
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color
```

CSS

```other
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

Kada Sass preprocesor obradi fajl, kao izlaz dobijemo klasican CSS fajl.

### Nesting (ugnjezdavanje)

Za razliku od HTML-a, CSS nema jasnu hijerarhiju i ugnjezdavanje. Sass nam omogucava hijerarhiju kao u HTML fajlu.

Sass

```other
nav
  ul
    margin: 0
    padding: 0
    list-style: none

  li
    display: inline-block

  a
    display: block
    padding: 6px 12px
    text-decoration: none
```

CSS

```other
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

### Partials

Mozemo kreirati male Sass fajlove koji sadrze skracenice koje kasnije mozemo ukljuciti u Sass fajl. Ovo je odlican nacin da se stilizovanje stranice podeli na manje delove, modularnost.

Parcijal definisemo tako sto ime fajla zapocnemo sa `_` , npr. `_partial.scss`. Donja crta Sassu stavlja do znanja da je to parcijal i da se moze ukljuciti u drugi Sass fajl.

### Modules (moduli)

Sass ne mora da se pise u jednom fajlu, moze se podeliti na module. Jednostavno ukljucimo drugi fajl komandom `@use` i mozemo koristiti njegove promenljive, funkcije itd.

```other
// _base.sass
$font-stack: Helvetica, sans-serif
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color
```

```other
// styles.sass
@use 'base'

.inverse
  background-color: base.$primary-color
  color: white
```

Sass prevodi oba fajla u naredni CSS.

```other
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}

.inverse {
  background-color: #333;
  color: white;
}
```

### Mixins

Mixin nam dozvoljava da grupisemo CSS pravila u "grupu", nesto slicno kao funkcija u modernim jezicima. Jos jedna slicnost sa modernom funkcijom je ta sto mozemo da prosledimo promenljivu koju cemo koristiti unutar Mixin-a.

```other
@mixin theme($theme: DarkGray)
  background: $theme
  box-shadow: 0 0 1px rgba($theme, .25)
  color: #fff


.info
  @include theme

.alert
  @include theme($theme: DarkRed)

.success
  @include theme($theme: DarkGreen)
```

```other
.info {
  background: DarkGray;
  box-shadow: 0 0 1px rgba(169, 169, 169, 0.25);
  color: #fff;
}

.alert {
  background: DarkRed;
  box-shadow: 0 0 1px rgba(139, 0, 0, 0.25);
  color: #fff;
}

.success {
  background: DarkGreen;
  box-shadow: 0 0 1px rgba(0, 100, 0, 0.25);
  color: #fff;
}
```

### Prosirivanje

```other
/* This CSS will print because %message-shared is extended. */
%message-shared
  border: 1px solid #ccc
  padding: 10px
  color: #333


// This CSS won't print because %equal-heights is never extended.
%equal-heights
  display: flex
  flex-wrap: wrap


.message
  @extend %message-shared


.success
  @extend %message-shared
  border-color: green


.error
  @extend %message-shared
  border-color: red


.warning
  @extend %message-shared
  border-color: yellow
```

### Operatori

Dozvoljavaju izvrsavanje matematickih operacija u izrazima.

```other
@use "sass:math"

.container
  display: flex

article[role="main"]
  width: math.div(600px, 960px) * 100%

aside[role="complementary"]
  width: math.div(300px, 960px) * 100%
  margin-left: auto
```

```other
.container {
  display: flex;
}

article[role="main"] {
  width: 62.5%;
}

aside[role="complementary"] {
  width: 31.25%;
  margin-left: auto;
}
```
