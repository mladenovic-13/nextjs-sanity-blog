---
title: "Skupovi i mape (recnici)"
author: "Nikola Mladenovic"
category: "CS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - Computer sscience
  - Data Structures
---

# Skupovi i mape (recnici)

## Skupovi

- skup elemenata bez duplikata

podrzan kroz dve klase: **set** i **unordered_set**

- osnovne funkcije skupova:
  - **insert** - umece element ( ako je vec u skupu nema efekta ), **set** ima slozenost _log k_, a _unordered_set_ slozenost _k_.
  - **erase** - uklanja dati element
  - **find** - proverava da li element postoji u skupu, ako ne vraca iterator **end**
  - **size** - vraca broj elemenata
- moguca je iteracija koriscenjem petlje

```other
for( T element : skup )
```

- uredjeni skupovi sadrze i metode:
  - **lower_bound(x)** - najmanji element skupa veci ili jednak od zadatog
  - **upper_bound(x)** - najmanji element skupa koji je strogo veci od zadatog
- mozemo promeniti definisani poredak

```other
set<T, greater<T>> // za greater treba uljuciti <functional>
```

### Multiskupovi

- uopstenje skupova u kojima su dopusteni duplikati

**multiset**

## Mape (recnici)

Predstavljaju kolekciju podataka u kojima se kljucevima nekog tipa pridruzuju vrednosti nekog tipa

```other
map<string, int> brojDana = {
    {"januar", 31},
    {"februar", 28},
    {"mart", 31},
    ...
}
```

- moguc je indeksni pristup elementima
- pretragu izvrsavamo sa **find** (vraca iterator na pronadjeni element ili **end**)
- **sortirana je po kljucevima**

## Zadatak 1: Svojstvo 132

```other
#include <iostream>
#include <vector>
#include <set>
#include <stack>
#include <functional>

using namespace std;

bool svojstvo132(const vector<int>& a){
	int n = a.size();
	vector<int> minP(n);
	minP[0] = a[0];
	for (int i = 1; i < n; i++)
		minP[i] = min(minP[i-1], a[i]);

	//elementi desno od Aj
	set<int, greater<int>> elementi_desno;
	elementi_desno.insert(a[n-1]);

	//za svaki element aj proveravamo da li moze biti sredisnji
	for(int j = n-2; j > 0; j--){
		int ai = minP[j], aj = a[j];
		//interval je prazan
		if(ai == aj)
			continue;
		// trazimo najveci element desno od aj koji je strogo manji
		auto najveci_desno_manji_od_aj = elementi_desno.upper_bound(aj);
		// ako on postoji i strogo je veci od ai,pronadjena je 132 trojka
		if(najveci_desno_manji_od_aj != elementi_desno.end() &&
			*najveci_desno_manji_od_aj > ai)
			return true;

		// najveci element desno od aj koji je manji od aj je manji ili jednak ai,
		// pa aj ne moze biti sredisnji element trojke

		// aj ce biti desno od elemenata u narednim iteracijama
		elementi_desno.insert(aj);
	}
	// nije pronadjena 132-trojka
	return false
}

int main() {
	int n;
	cin >> n;
	vector<int> a(n);
	for (int i = 0; i < n; i++)
		cin >> a[i];
	cout << (svojstvo132(a) ? "da" : "ne") << endl;

	return 0;
}
```

## Zadatak 2: Broj segmenata sa razlicitim elementima

```other
#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

int main(){
	// ucitavamo dati niz brojeva
	int n;
	cin >> n;
	vector<int> a(n);
	for (int i = 0; i < n; i++)
		cin >> a[i];

	// ukupan broj segmenata ciji su svi elementi razliciti
	int broj = 0;

	// za svaku poziciju kraj zelimo da pronadjemo najduzi segmenat
	// oblika [pocetak, kraj] koji ima raz elemente

	// za svaki element u tekucem segmentu [pocetak, kraj]
	// pamtimo poziciju na kojoj se pojavljuje
	unordered_map<int, int> prethodno_pojavljivanje;

	int pocetak = 0;
	for(int kraj = 0; kraj < n; kraj++){
		// karakter a[kraj] se vec javio u segmentu [pocetak, kraj - 1]?
		if(prethodno_pojavljivanje.find(a[kraj]) != prethodno_pojavljivanje.end()){
			// nijedan segment koji se zavrsava na poziciji kraj,
			// a pocinje pre ranijeg pojavljivanja elementa a[kraj]
			// ne moze da ima sve razlicite elemente,
			// pa zato razmatramo samo segmente koji se zavrsavaju
			// na poziciji kraj i pocinju iza pozicije tog prethodnog
			// pojavljivanja - najduzi takav pocinje na prvoj
			// poziciji iza te pozicij
			int novi_pocetak = prethodno_pojavljivanje[a[kraj]] + 1;
			// brisemo iz segmenta sve elemente od starog do ispred novog pocetka
			// i mapu uklanjamo sa time
			for(int i = pocetak; i < novi_pocetak; i++)
				prethodno_pojavljivanje.erase(a[i]);
			// pomeramo pocetak
			pocetak = novi_pocetak
		}
		// prosirujemo segment elementom a[kraj], pa pamtimo poziciju
		// njegovog pojavljivanja
		prethodno_pojavljivanje[a[kraj]] = kraj;

		// [pocetak, kraj] sadrzi sve razlicite elemente i on je najduzi
		// takav koji se zavrsava na poziciji kraj
		// sigurno su takvi i [pocetak+1, kraj], ... [kraj-1, kraj]
		// njih ima (kraj - pocetak) i taj broj dodajemo na ukupan broj
		// trazenih segmenata
		broj += kraj - pocetak
	}
	// ispisujemo ukupan broj pronadjenih segmenata
	cout << broj << endl;

	return 0;
}
```

Tags:

mape, recnici, skupovi
