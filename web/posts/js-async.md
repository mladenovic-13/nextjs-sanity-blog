---
title: "JavaScript async/await"
author: "Nikola Mladenovic"
category: "JS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - javascript
  - promisi
  - asinhrono programiranje
  - async
  - await
---

# Async / await

**Async** funkcije, kao i kljucna red **await**, dodate su u JavaScript kao "sintaksicki secer". To znaci da su samo jednostavnija i razumljivija na prvi pogled interpretacija **promisa**. Sa ovim funkcijama asinhroni kod izgleda poprilicno slicno starom sinhronom kodu.

## Kljucna res _async_

Ova kljucna rec koristi se ispred deklaracije funkcije kako bi joj stavila do znanja da ne treba direktno da vrati vrednost, vec da treba da vrati **promis**.

Naredne tri funkcije su prakticno iste, samo implementirane drugacijom tehnikom:

```other
async function hello() { return "Hello" };
hello();
```

Asinhrona funkcija sacuvana u promenljivu:

```other
let hello = async function() { return "Hello" };
hello();
```

Takodje mzoemo koristiti i strelicaste funkcije:

```other
let hello = async () => "Hello";
```

Ako zelimo da koristimo vrednost koju praca promis, kada je izvrsen, to radimo na sledeci nacin:

```other
hello().then((value) => console.log(value))
```

```other
hello().then(console.log)
```

## Kljucna rec _await_

Pun potencijal async funkcija dobijamo samo uz kombinaciju **async** i **await**. Await radi samo u ovkiru async funkcije. Moze se koristiti ispred bilo koje funkcije koja vraca promis, ukljucujuci i funkcije Web Api-ja.

```other
async function hello() {
  return await Promise.resolve("Hello");
};

hello().then(alert);
```

Uporedimo jednostavnu implementaciju dohvatanja podataka sa servera. Prvo cemo pogledati implementaciju koriscenjem promisa.

```other
fetch('coffee.jpg')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.blob();
  })
  .then(myBlob => {
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
  })
  .catch(e => {
    console.log('There has been a problem with your fetch operation: ' + e.message);
  });
```

A ovako izgleda implementacija koriscenjem async funkcija:

```other
async function myFetch() {
  let response = await fetch('coffee.jpg');

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  let myBlob = await response.blob();

  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}

myFetch()
  .catch(e => {
    console.log('There has been a problem with your fetch operation: ' + e.message);
  });
```

Ovaj kod izgleda mnogo jednostavnije i laksi je za razumevanje, jer izgleda kao obican sinhroni JavaScript kod sa malim dodacima.

Kada znacmo da **async** pretvara povratnu vrednost funkcije u promis, mozemo dalje pojednostaviti ovu implementaciju dohvatanja tako sto cemo je podeliti na dva dela.

```other
async function myFetch() {
  let response = await fetch('coffee.jpg');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.blob();
}

myFetch()
  .then(blob => {
    let objectURL = URL.createObjectURL(blob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
  })
  .catch(e => console.log(e));
```

## Upravljanje greskama

Jedna od opcija je da koristimo standardu `try...cathc` strukturu:

```other
async function myFetch() {
  try {
    let response = await fetch('coffee.jpg');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let myBlob = await response.blob();
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
  } catch(e) {
    console.log(e);
  }
}

myFetch();
```

`catch` bloku prosledjujemo objekat `e` koji predstavlja objekat greske. Takodje mozemo `try...cacthe` rasporediti i na sledeci nacin:

```other
async function myFetch() {
  let response = await fetch('coffee.jpg');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.blob();
}

myFetch()
  .then(blob => {
    let objectURL = URL.createObjectURL(blob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
  })
  .catch(e => console.log(e));
```

## Await i Promise.all()

Posto su async funkcije napravljene za rukovodjenje promisima, moraju da podrzavaju sve funkcionalnosti promisa. jedna od njih je i `Promise.all()`. Ovoj funkciji prosledjujemo niz promisa, a kako povretnu vrednost dobijamo takodje niz, ali popunjen vrednostima razresenih promisa.

```other
async function fetchAndDecode(url, type) {
  let response = await fetch(url);

  let content;

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    if(type === 'blob') {
      content = await response.blob();
    } else if(type === 'text') {
      content = await response.text();
    }
  }
  return content;
}

async function displayContent() {
  let coffee = fetchAndDecode('coffee.jpg', 'blob');
  let tea = fetchAndDecode('tea.jpg', 'blob');
  let description = fetchAndDecode('description.txt', 'text');

  let values = await Promise.all([coffee, tea, description]);

  let objectURL1 = URL.createObjectURL(values[0]);
  let objectURL2 = URL.createObjectURL(values[1]);
  let descText = values[2];

  let image1 = document.createElement('img');
  let image2 = document.createElement('img');
  image1.src = objectURL1;
  image2.src = objectURL2;
  document.body.appendChild(image1);
  document.body.appendChild(image2);

  let para = document.createElement('p');
  para.textContent = descText;
  document.body.appendChild(para);
}

displayContent()
  .catch(e => console.log(e));
```
