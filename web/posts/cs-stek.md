---
title: "Stek"
author: "Nikola Mladenovic"
category: "CS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - Computer sscience
  - Data Structures
---

# Stek

Kolekcija podataka u kojoj se podaci dodaju po LIFO (last-in-first-out) principu. Element se moze dodati i skinuti samo sa vrha steka. U jeziku C++ stek se realizuje klasom:

`stack<T> // T - tip elementa na steku`

Podrzane su sledece metode sve slozenosti _O_(1):

- push - dodavanje na vrh steka
- pop - skidanje sa vrha steka ( tipa `void`, nema povratnu vrednost)
- top - ocitava element na vrhu steka
- empty - proverava da li je stek prazan
- size - vraca broj elemenata na steku

Ako dodajemo n-torke na stek pozivamo metodu `emplace`, nema potrebe za prethodnim pravljenjem parova.

Stek je samo adapter koji tera korisnika da postoje nacin unosa podataka.

## Liste

U jeziku C++ postoje dve kolekcije realizovane pomocu povezanih lista.

`forward_list<T> // jednostruko povezane liste`

`list<T> // dvostruko povezane liste`

Osnovne metode za rad, sve slozenosti _O_(1):

- **begin()** - iterator na pocetak liste
- **end()** - iterator na kraj liste
- **insert(it, x)** - umece element ispred datog iteratora i vraca iterator na novi
- **erase(it)** - brise element i vraca iterator element iza obrisanog (moze biti i **end()**)

Na jednostruko povezane liste moguce je primenjivati operator **++**, a na dvostruko moguce je primenjivati i **--**, obe operacije slozenosti _O_(1).

### Zadatak 1: Push-pop rekonstrukcija

```other
#include <iostream>
#include <stack>
#include <vector>

using namespace std;

int main(){
	ios_base::sync_with_stdio(false);

	// ucitavamo nizove vrednosti push i pop
	int n;
	cin >> n;
	vector<int> push(n);
	for(int i = 0; i < n; i++)
		cin >> push[i];
	vector<int> pop(n);
	for(int i = 0; i < n; i++)
		cin >> pop[i];

	// stek ciji rad simuliramo
	stack<int> stek;
	// niz naredbi push i pop
	vector<string> naredbe;
	naredbe.reserve(2*n);
	// da li postoji resenje
	bool moze = true;
	// dok ne obradimo kompletno oba niza
	int push_i = 0, pop_i = 0;
	while(push_i < n || pop_i < n){
		if(!stek.empty() && stek.top() == pop[pop_i]){
			// ako se na vrhu steka nalazi naredni element
			// koga treba skinuti, skidamo ga
			naredbe.push_back("pop");
			stek.pop();
			pop_i++;
		}else if(push_i < n) {
			// ako postoji element koji treba postaviti na stek, postavimo ga
			naredbe.push_back("push");
			stek.push(push[push_i]);
			push_i++;
		}else {
			// posto ne mozemo ni skinuti ni postaviti element
			// resenje ne postoji
			moze = false;
			break;
		}
	}

	// ispisujemo rezultat
	if(moze)
		for(const string& s : naredbe)
			cout << s << endl;
	else
		cout << '-' << endl;

	return 0;
}
```

Tags:

lifo, stek
