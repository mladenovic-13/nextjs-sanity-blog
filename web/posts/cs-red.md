---
title: "Red"
author: "Nikola Mladenovic"
category: "CS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - Computer sscience
  - Data Structures
---

# Red

Kolekcija podataka u kojoj se podaci dodaju po FIFO (first-in-first-out) principu.

Realizuje se klasom: `queue<T> // T - tip elementa na steku`

Zaglavlje: `<stack>`

Podrzane su sledece metode:

- `push` - postavlja na kraj reda
- `pop` - skida sa kraja reda i vraca **void**
- `front` - ocitava element na pocetku
- `empty` - proverava da li je prazan
- `size` - vraca broj elementa u redu

Takodje se moze koristiti `emplace` umesto `push` za dodavanje n-torki.

## Red sa dva kraja

Uopstenje redova u kome se mogu dodavati i skidati elementi sa pocetka i kraja reda.

Realizuje se klasom `deque<T>` iz zaglavlja `<deque>`.Podrzane su sledece operacije (sve slozenosi _O_(1)):

- `push_front` - dodavanje na pocetak
- `push_back` - dodavanje na kraj
- `front` - cita element na pocetku
- `back` - cita element na kraju
- `pop_front` - skida element sa pocetka
- `pop_back` - skida element sa kraja
- `empty` - proverava da li je red prazan
- `size` - broj elementa u redu

Zahvaljujuci specificnoj implementaciji, ova struktura podataka podrzava indeksni pristup elementima reda u vremenu _O_(1).

### Zadatak: Josifov problem

Djaci sede u krugu obelezeni brojevima od 0 do _n_ - 1 i igraju se razbrajalice tako da u svakom brojanju jedan djak ispadne. Brojanje krece od djaka 0 i svaki _m_-ti djak ispada. Napisi program koji odredjuje koji djak je ostati poslednji.

**Ulaz:** U prvoj liniji standardnog ulaza nalazi se pocetni broj djaka _n_, a u drugom duzina brojalice _m_.

**Izlaz:** Na standardni izlaz ispisati broj preostalog djaka.

_Implementacija koriscenjem dvostruko povezane liste. Nakon svakog pomeranja proveravamo da li smo stigli do kraja, ako jesmo rucno vracamo na pocetak liste._

```other
#include <iostream>
#include <list>

using namespace std;

list<int>::iterator uvecaj(list<int>& lista, list<int>::iterator& it){
	list<int>::iterator polazni = it;
	it++;
	if(it == lista.end())
		it = lista.begin();
	return polazni;
}
int main(){
	int n;
	cin >> n;
	int m;
	cin >> m;
	list<int> lista;
	for(int i = 0; i < n; i++)
		lista.emplace_back(i);
	auto it = lista.begin();
	while(lista.size() > 1){
		for(int i = 0; i < m - 1; i++)
			uvecaj(lista, it);
		lista.erase(uvecaj(lista, it));
	}
	cout << *it << endl;
}
```

_Implementacija koriscenjem **reda**. U svakom koraku jednog djaka stavljamo na kraj reda. Nakon prebacivanja m-1 djaka, onog na pocetku trajno izbacujemo._

```other
#include <iostream>
#include <queue>

using namespace std;

int main(){
	int n;
	cin >> n;
	int m;
	cin >> m;
	queue<int> red;
	for(int i = 0; i < n; i++)
		red.push(i);
	while(red.size() > 1){
		for(int i = 0; i < m - 1; i++){
			red.push(red.front());
			red.pop();
		}
		red.pop();
	}
	cout << red.front() << endl;
	return 0;
}
```

Tags:

red
