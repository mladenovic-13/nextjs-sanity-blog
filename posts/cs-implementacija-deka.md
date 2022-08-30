---
title: "Implementacija deka"
author: "Nikola Mladenovic"
category: "CS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - Computer sscience
  - Data Structures
---

# Implementacija deka

Dek mozemo da zamislimo kao niz segmenata iste, fiksne velicine. Svaki segment je struktura koja sadrzi niz elemenata.

Dek cuva niz pokazivaca na pojedinacne segmente. Dva segmenta su karakteristicna: levi segment u kome se nalazi pocetak reda i desni u kome se nalazi kraj reda. Oba mogu biti samo delimicno popunjena. U svakom segmentu se cuva prva slobodna pozicija na koju se moze dodati naredni element. U praznom deku levi i desni segment su susedni i prazni.

## Izvorni kod:

```other
#include <iostream>

using namespace std;

// jedan segment
class Segment {
public:
	// niz podataka
	int* podaci;
	// broj popunjenih elemenata niza
	int popunjeno;
	// pozicija u nizu na koju moze da se ubaci element levo
	int levi;
	// pozicija na koju moze da se ubaci desno
	int desni;
};

// alokacija segmenta
Segment* alocirajSegment(int velicina){
	// alociraj novi segment
	Segment* novi = new Segment();
	// alociramo njegove podatke
	novi->podaci = new int[velicina];
	// nijedan podatak jos nije popunjen
	novi->popunjeno = 0;
	// trenutno nepopunjeni deo
	novi->desni = 0;
	novi->levi = velicina - 1;
}

// brisanje segmenta
void obrisiSegment(Segment* s){
	// brisemo podatke u segmentu
	delete[] s->podaci;
	// brisemo segment
	delete s;
}

// dek klasa
class Dek {
public:
	// niz pokazivaca na segmente
	Segment* segmenti;
	// broj segmenata u nizu
	int brojSegmenata;
	// velicina svakog segmenta
	int velicinaSegmenta;
	// pozicije na kojima se nalaze pokazivaci na krajnji levi
	// i krajnji desni segment
	int levo, desno;
	int brojElemenata;
};

// realokacija deka tako da ima dati broj segmenta
void realocirajDek(Dek& d, int brojSegmenata){
	// pravimo novi niz pokazivaca na segmente
	Segment** noviSegmenti = new Segment*[brojSegmenata];
	// postojece pokazivace cemo smestiti negde oko
	// sredine novog niza
	int uvecanje = (brojSegmenata - d.brojSegmenata) / 2;
	// ako je postojao stari niz pokazivaca na segmente
	if(d.segmenti != nullptr)
		// kopiramo te pokazivace u novi niz, krenuvsi od pozicije uvecanje
		for(int i = 0; i < d.brojSegmenata; i++)
			noviSegmenti[uvecanje + i] = d.segmenti[i];
	// alociramo nove segmente na pocetku i na kraju novog niza
	for(int i = 0; i < uvecanje; i++)
		noviSegmenti[i] = nullptr;

	// brisemo stari niz pokazivaca na segmente
	delete[] d.segmenti;
	// preusmeravamo pokazivac na niz pokazivaca
	d.segmenti = noviSegmenti;
	// azuriramo broj segmenata
	d.brojSegmenata = brojSegmenata;
	// azuriramo granice popunjenog dela niza
	d.levo += uvecanje;
	d.desno += uvecanje;
}

// vraca referencu na i-ti element u deku
int& iti(const Dek& d, int i){
	// trenutni broj elemenata u krejnjem levom segmentu
	int uLevom = d.segmenti[d.levo]->popunjeno;
	// pomeramo indeks tako da je pozicija 0 na pocetku krajnjeg levog
	// segmenta
	i += d.velicinaSegmenta -uLevom;
	// odredjujemo segment u kom se nalazi trazeni element
	Segment* s = d.segmenti[d.levo + i / d.velicinaSegmenta];
	// citamo element iz tog segmenta
	return s->podaci[i % d.velicinaSegmenta];
}

// dodajemo element na pocetak deka
void dodajNaPocetak(Dek& d, int x){
	// ako je levi segment jos nealociran alociramo ga
	if(d.segmenti[d.levo] == nullptr)
		d.segmenti[d.levo] = alocirajSegment(d.velicinaSegmenta);

	// ako je levi segment potpuno popunjen sa leve strane
	if(d.segmenti[d.levo]->levi < 0){
		// ako levo od njega nema vise alociranih segmenata
		if(d.levo == 0)
			// realociramo dek i time alociramo nove segmente
			realocirajDek(d, d.brojSegmenata * 2);
		// prelazimo u prethodni segment
		d.levo--;
	}
	// segment u koji se moze upisati element
	Segment* s = d.segmenti[d.levo];

	// upisujemo element na tekucu slobodnu poziciju
	// i pomeramo se nalevo
	s->podaci[s->levi--] = x;
	//uvecavamo broj popunjenih elemeanta
	s->popunjeno++;
	d.brojElemenata++;
}

// dodajemo element na kraj deka
void dodajNaKraj(Dek& d, intx){
	// ako je desni segment jos nealociran, alociramo ga
	if(d.segmenti[d.desno] == nullptr)
		d.segmenti[d.desno] = alocirajSegment(d.velicinaSegmenta);

	// ako je desni potpuno popunjen
	if(d.segmenti[d.desno]->desno >= d.velicinaSegmenta){
		// ako desno od njega nema vise alociranih segmenata
		if(d.desno == d.brojSegmenata - 1)
			// realociramo dek i time alociramo nove segmente
			realocirajDek(d, d.brojSegmenata * 2);
		// prelazimo na naredni segment
		d.desno++;
	}
	// segment u koji se moze upisati element
	Segment* s = d.segmenti[d.desno];

	//upisujemo element na tekucu slobodnu poziciju i pomeramo se nalevo
	s->podaci[s->desni++] = x;
	// uvecavamo broj popunjenih segmenata
	s->popunjeno++;
	d.brojElemenata++;
}

// uklanjamo element sa pocetka deka
int ukloniSaPocetka(Dek& d){
	if(d.segmenti[d.levo]->levi >= d.velicina){
		d.levo++;
		d.segmenti[d.levo]->levo = 0;
	}
	Segment* s = d.segmenti[d.levo];
	s->popunjeno--;
	d.brojElemenata--;
	return s->podaci[++s->levi];
}
// uklanjamo element sa kraja deka
int ukloniSaKraja(Dek& d){
	if(d.segmenti[d.desno]->desni < 0){
		d.desno--;
		d.segmenti[d.desno]->desni = d.velicinaSegmenta;
	}
	Segment* s = d.segmenti[d.desno];
	s->popunjeno--;
	d.brojElemenata--;
	return s->podaci[--s->desni];
}

void ispisi(Dek& d){
	for(int i = 0; i < d.brojElemenata; i++)
		cout << iti(d, i) << " ";
	cout << endl;
}

// brisanje deka
void obrisiDek(Dek& d){
	// brisemo sve segmente
	for(int i = 0; i < d.brojSegmenata; i++)
		obrisiSegment(d.segmenti[i]);
	// brisemo niz pokazivaca na segmente
	delete[] d.segmenti;
}

void inicijalizujDek(Dek& d, int brojElemenata, int velicinaSegmenta = 3){
	d.velicinaSegmenta = velicinaSegmenta;
	d.segmenti = nullptr;
	d.brojElemenata = 0;
	d.levo = -1;
	d.desno = 0;

	realocirajDek(d, brojElemenata);
}
```
