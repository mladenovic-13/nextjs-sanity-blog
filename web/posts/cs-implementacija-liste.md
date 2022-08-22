---
title: "Implementacija liste"
author: "Nikola Mladenovic"
category: "CS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - Computer sscience
  - Data Structures
---

# Implementacija liste

Liste podrazumevaju da se podaci cuvaju u memoriji u cvorovima u kojima se podred podataka cuvaju i pokazivaci. U zavisnosti da li cuvamo samo pokazivac na cledeci ili i na prethodni element razlikuju se:

- jednostruko povezane list
- dvostruko povezane liste

Jednostruko povezane liste dopustaju dodavanje na pocetak i na kraj, kao i brisanje sa pocetka u vremenu _O_(1), dok brisanje sa kraja zahteva _O_(_n_).

Dvostruko povezane liste dopustaju i dodavanje i brisanje i sa pocetka i sa kraja u vremenu _O_(1). Mane takve liste su to sto zahtevaju vise memorije zbog cuvanja dva pokazivaca, takodje zahtevaju vise vremena kod izvrsavanja pojedinacnih operacije zbog azuriranje dva pokazivaca

Implementacija se moze uciniti jednostavnijom uvodjenjem **sentinele** - vestacki cvor kojim se obezbedjuje da je lista uvek neprazna.

Upotreba lista je sve redja u savremenim sistemima. Osnovni problem je sto su cvorovi cesto rastrkani po memoriji, pa su promasaji kes memorije mnogo cesci nego kod struktura koje se cuvaju povezane

_Implementacija liste:_

```other
#include <iostream>
#include <string>

using namespace std;

// struktura cvora
struct cvor
{
	char c;
	cvor *prethodni, *sledeci;
};

cvor* napravi_cvor(char c, cvor* p = nullptr, cvor* s = nullptr){
	cvor* novic = new cvor();
	novi->c = c;
	novi->prethodni = p;
	novi->sledeci = s;
	return novi;
}

// brise cvor na koji ukazuje pokazivac cv
void obrisi(cvor* cv){
	cv->prethodni->sledeci = cv->sledeci;
	cv->sledeci->prethodni = cv->prethodni;
	delete cv;
}

// ubacuje novi cvor sa karakterom c ispred cvora na koji ukazuje
// pokazivac cv
void ubaci_ispred(cvor* cv, char c){
	cvor* novi = napravi_cvor(c, cv->prethodni, cv);
	novi->prethodni->sledeci = novi;
	novi->sledeci->prethodni = novi;
}

// ispisuje celu listu
void ispisi(cvor* sentinela){
	for(cvor* cv = sentinela->sledeci; cv != sentinela; cv = sv->sledeci)
		cout << cv->c;
	cout << endl;
}
```
