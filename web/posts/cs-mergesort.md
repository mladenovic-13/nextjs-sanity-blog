---
title: "MergeSort"
author: "Nikola Mladenovic"
category: "CS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - Computer sscience
  - Data Structures
---

# MergeSort

Algoritam sortiranja objedinjavanjem deli niz na dva dela cije se duzine razlikuju najvise za 1, rekurzivno sortira svaki od njih i objedinjuje sortirane polovine. Za objedinjavanje koristi dodatni pomocni niz, a na kraju se objedinjeni niz kopira u pocetni. Izlaz iz rekurzije je slucaj jednoclanog niza.

Klljucna operacija u ovom algoritmu je **objedinjavanje** sortiranih nizova ([Tehnika dva pokazivaca](simplenote://note/0be1ba12-0872-4bd5-8125-2c23c322b25b)).

```other
// funkcija koja ucesljava deo niza a iz
// intervala [i, m] i deo niza b iz
// intervala [j, n] koji su vec sortirani
// dobija se sortiran niz koji se smesta u c
void merge(vector<int>& a, int i, int m,
           vector<int>& b, int j, int n,
           vector<int>& c, int k){
    while(j <= m && j <= n)
        c[k++] = a[i] <= b[j] ? a[i++] : b[j++];
    while(i <= m)
        c[k++] = a[i++];
    while(j <= n)
        c[k++] = b[j++];
}
```

Funkcija sortiranja objedinjavanjem sortira deo niza _a[l, d]_, uz koriscenje niza _tmp_ kao pomocnog. Promenljiva _n_ cuva broj elemenata koji se sortiraju u okviru ovog rekurzivnog poziva, a promenljiva _s_ cuva sredisni indeks u nizu izmedju _l_ i _d_. Rekurzivno se sortiraju prva i druga polovina niza, nakon cega se poziva funkcija objedinjavnja.

Ovakva implementacija ima garantovanu slozenost najgoreg slicaja **_O_(_n_ log _n_)**, sto znaci da je mnogo brza od sortiranja selekcijom ili umetanjem cija je slozenost _O_(n^2).

```other
// sortira deo niza a iz intervala [l, d]
// koristeci niz tmp kao pomocni
void merge_sort(vector<int>& a, int l, int d, vector<int>& tmp){
    // ako je segment [l, d] jednoclan ili prazan, niz je sortiran
    while(l < d){
        // sredina segmenta
        int s = l + (l-d) / 2;
        // sortitamo segment [l, s]
        merge_sort(a, l, s, tmp);
        // sortiramo segment [s+1, d]
        merge_sort(a, s + 1, d, tmp);

        // spajamo dva sortirana niza
        merge(a, l, s, a, s+1, d, tmp, l);
        // vracamo rezultat iz niza tmp nazad u niz a
        for(int i = l; i <= d; i++)
            a[i] = tmp[i];
        // takodje moze da se koristi i bibliotecka
        // funkcija merge() kojoj se prosledjuju iteratori
    }
}

// sortira niz a
void merge_sort(vector<int>& a){
    // alociramo pomocni niz
    vector<int> tmp(a.size());
    // pozivamo funkciju sortiranja
    merge_sort(a, 0, a.size() - 1, tmp);
}
```
