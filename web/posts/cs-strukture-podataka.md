---
title: "Strukture podataka"
author: "Nikola Mladenovic"
category: "CS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - Computer sscience
  - Data Structures
---

# Strukture podataka

## Kontejneri:

1. Sekvencijalni : _array, string, list, forward_list, deque_
2. Adaptori : _stack, queue, priority_queue_
3. Asocijativni: _set, multiset, map, multimap_
4. Neuredjeni asocijativni: _unordered_queue, unordered_multiset, unordered_map, unordered_multimap_

**Iteratori**

- objekti koji pokazuju na odredjeno mesto unutar kontejnera, ili neposredno iza elementa ( iterator **end**)
- mogu se dereferencirati operatorom **\***
- njime mozemo ocitati ili izmeniti element na koji ukazuje iterator

### Sekvencijalni kontejneri

- skladistenje serije elemenata
- mogucnost obilaska svih elemenata redom
- indeksni pristup elementu
- svi su dinamicki alocirani ( osim _array_ koji je omotac obicnih statickih nizova)

### Adaptori kontejnera

- sloj iznad nekog od postojecih sekvencijalnih kontejnera
- interfejs sa implementacijom odredjenih funkcija
- imaju podrazumevani sekvencijalni kontejner koji se moze promeniti prilikom deklaracije
  1.  **stack** implementira funkcije steka (LIFO)
  2.  **queue** implementira funkcije red(FIFO)
  3.  **priority_queue** implementira funkcije reda sa prioritetom ( elementi mogu da se dodaju u proizvoljnom redosledu, a vade u nerastucem redosledu)

### Asocijativni kontejneri

- dodadavnje i brisanje na osnovu njihove vrednosti, a ne pozicije
- pristup elementu na osnovu **kljuca**
- na osnovu implementacije dele se na: **uredjene i neuredjene**

#### Uredjeni:

set //skup elemenata tipa T

multiset //multiskup elemenata tipa T ( dopustena visestruka pojavljivanja elemenata )

3. map<K, V> //preslikavanje kljuceva tipa K u vrednosti tipa T
4. multimap<K, V> //preslikavanje kljuceva K u vrednosti tipa V pri cemu se svaki original moze slikati u vise razlicitih slika

- karakterise ih logoritamska slozenost
- implementirani pomocu samobalasirajucih binarnih drveta
- mogu se porediti operatorom **<**

#### Neuredjeni:

unordered_set // neuredjeni skup

unordered_multiset // neuredjeni skup sa ponavljanjem

3. unordered_map<K, V> // neuredjena mapa
4. unordered_multimap<K, V> // neuredjena mapa sa ponavljanjem

- obicno su implementirani pomovu hes-tabela ( amortizovana konstantna slozenost operacija)
- postoji hash funkcija koja slika elemente skupa

Tags:

podataka, strukture
