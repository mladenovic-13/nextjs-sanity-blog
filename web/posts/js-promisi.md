---
title: "JavaScript promisi"
author: "Nikola Mladenovic"
category: "JS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - javascript
  - promisi
  - asinhrono programiranje
---

# Promises (Promisi) - uvod

Promisi kao sto sama rec kaze obecavaju da ce neki rezultat biti vracan nekada u buducnosti. Oni nam ne garantuju kada ce se operacija tacno zavrsiti. Garantuju nam da ce kod koji napisemo biti izvrsen kada rezultat operacije bude dostupan.

Najcesci slucajevi kada se susrecemo sa promisima su onda kada API vrati vrednost u obliku promisa.

Pomisi su uvedeni kako bi resili problem funkcija povratnog poziva, koje se nisu pokazale kao najprakticnije resenje (Jos uvek se koriste npr. u Node.js-u).

Ovako izgleda malo slozenija callback funkcija:

```other
chooseToppings(function(toppings) {
  placeOrder(toppings, function(order) {
    collectOrder(order, function(pizza) {
      eatPizza(pizza);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

Kada za resenje istog problema iskoristimo promise to izgleda ovako:

```other
chooseToppings()
.then(function(toppings) {
  return placeOrder(toppings);
})
.then(function(order) {
  return collectOrder(order);
})
.then(function(pizza) {
  eatPizza(pizza);
})
.catch(failureCallback);
```

Sa promisima kod je mnogo laksi za razumevanje, pregledniji, dok za hendlovanje gresaka koristimo jednostavnu metodu `cathc()`. Takodje, mozemo da koristimo i ulancavanje uz pomoc funkcije `then()` koja vraca takodje promis i garantuje nam da ce prvo sacekati rezultat pa preci na izvrsavanje naredne funkcije u lancu.

Ovo mozemo jos jednostavnije i elegantnije da implementiramo uz pomoc "arrow" funkcija na sledeci nacin:

```other
chooseToppings()
.then(toppings => placeOrder(toppings))
.then(order => collectOrder(order))
.then(pizza => eatPizza(pizza))
.catch(failureCallback);
```

Jos bolje resenje je koriscenje async/await funkcionalnosti, al o tome nekom drugom prilikom.
