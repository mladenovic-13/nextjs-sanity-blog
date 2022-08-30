---
title: "CSS Animacije"
author: "Nikola Mladenovic"
category: "CSS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - CSS
  - Animations
  - Design
---

# CSS Animacije

Animacije omogucavaju prelazak sa jednog CSS stila na drugi. Sastoje se od dve stvari, CSS opisa i **keyframes** (frejmova) koji odredjuju pocetni i krajlji izgleg animacije, kao i momente izmedju.

Imamo tri kljucne prednosti CSS animacija u odnosu na tradicionalne skript animacije:

- Lako se koriste jednostavne animacije, nije potrebno paznavanje JavaScripta.
- Animacije se bolje izvrsavaju i pri sporom ucitavanju.
- Dozvoljavanjem pretrazivacu da kontrolise animacije dozvoljavamo mu da ih optimizuje

Element animiramo uz pomoc svojstva `animate` i podsvojstva. Ovo svojstvo ne konfigurise direktno izgled animacije vec to radi `@keyframes`.

Podsvojstva su:

`animation-name`

Definise ima `@keyframe` koji se koristi za animaciju

`animation-duration`

Trajanje jednog ciklusa animacije

`animation-timing-function`

Kako animacija prolazi krzo keyframove

`animation-deley`

Zastoj izmedju ucitavanja stranice i izvrsavanja animacije

`animation-iteration-count`

Koliko puta zelimo da se ponavlja animacija, moze se postaviti na `infinite` da se ponavlja konstantno

`animation-direction`

Odredjuje putanju animacije

`animation-fill-mode`

Definise vrednosti koje se koriste pre i posle animacije

`animation-play-state`

Pauziranje animacije

### Definisanje sekvence animacije uz pomoc _keyframes_

Svaki keyframe odredjuje kako ce se animacija ponasati u odredjenom vremenu za vreme izvrsavanja animacije.

Keyframes koriste procente kako bi odredili kada odredjeni stupa na snagu. 0% oznacava pocetak animacije, dok 100% kraj animacije. Posto su ova dva stanja najbitnija imamo konkretne nazive za njih: `from` i `to`.

### Pravljenje tekst slajda u prozoru

Ovaj primer stilizuje `<p>`element, tako da tekst ulazi u ekran sa desne strane.

Obratimo paznju da ovakve animacije mogu povecati velicinu trenutnog prozora, zato element koji animiramo stavljamo u kontejner kome postavljamo svojstvo `overflow:hidden`.

```other
p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```
