---
title: "Implementacija vektora"
author: "Nikola Mladenovic"
category: "CS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - Computer sscience
  - Data Structures
---

# Implementacija vektora

Vektori se implementiraju u obliku dinamickog niza, kojem se dimenzija menja i koji se realocira.

### Zadatak: Vektor

Program izvrsava tri vrste naredbi nad nizom celih brojeva:

- w p x - write - u niz se na poziciju p upisuje vrednost x
- r p - read - na standardni izlaz ispisuje se vrednost procitana sa pozicije p
- p x - push - na kraj niza upisuje se vrednost x

Napisati program koji ucitava i izvrsava ove naredbe.

```other
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

// adresa pocetka niza
int* a = nullptr;
// broj alociranih i broj popunjenih
int alocirano = 0, n = 0;

// citanje vrednosti elementa na datoj poziciji
int procitajElement(int i){
	return a[i];
}

// upis elementa na datu poziciju
void postaviElement(int i, int x){
	a[i] = x;
}

// pomocna funkcija koja vrsi realokaciju niza
void realociraj(int m){
	int* novo_a = new int[m];
	alocirano = m;
	// ako postoji stari niz, kopiramo i brisemo
	if( a != nullptr){
		copy_n(a, min(m, n), novo_a);
		delete[] a;
	}
	// pokazivac usmeravamo ka novom nizu
	a = novo_a;
}

void postaviVelicinu(int nn){
	if(alocirano <= n)
		realociraj(2 * nn + 1);
	n = nn;
}

// dodavanje elementa na kraj
// niz se automatski realocira
void dodajNaKraj(int x){
	if(alocirano <= n)
		realociraj(2 * alocirano +1)
	a[n++] = x;
}

// brisanje celog niza
void obrisi(){
	delete[] a;
}

int main(){

	io_base::sync_with_stdio(false);
	cin.tie(0);

	char c;
	while(cin >> c){
		if(c == 'w'){
			int i, x;
			cin >> i >> x >> ws;
			if(i >= n)
				postaviVelicinu(i+1);
			postaviElement(i, x);
		} else if(c == 'r'){
			int i;
			cin >> i >> ws;
			cout << (i < n ? procitajElement(i) : 0) << '\n';
		} else if (c == 'p'){
			int x;
			cin >> x >> ws;
			dodajNaKraj(x);
		}
	}
	obrisi();
	return 0;
}
```
