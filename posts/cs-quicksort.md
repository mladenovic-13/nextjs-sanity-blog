---
title: "QuickSort"
author: "Nikola Mladenovic"
category: "CS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - Computer sscience
  - Data Structures
---

# QuickSort

U svakom koraku ovog algoritma jedan element (pivot) se dovodi na svoje mesto (blizu sredine niza). Nakon toga sve elemente manje ili jednake od pivota smestamo sa njegove leve strane, dok vece od njega smestamo sa njegove desne strane. Svrha ovog razvrstavanja elemenata je sledeca: sortiranje celog niza moze da se svede na sortiranje dva manja podniza.

Pregrupisavanje elemenata ispred i iza pivoto naziva se **particionisanje** niza i kljucni je korak u algoritmu QuickSort.

Brzo sortiranje se moze implementirati na sledeci nacin. Definisemo funkciju `qsort_(a, l, d)` koja sortira deo niza _a[l, d]_. Particionisanje se vrsi tehnikom **dva pokazivaca**. Nakon particionisanja rekurzivno se sortiraju leva i desna polovina niza. Izlaz iz rekurzije je slucaj kada je deo niza _a[l, d]_ prazan ili jednocla, u tom slucaju je niz sortiran.

```other
// sortira segment u intervalu [l, d] u nizu a
void qsort_(vector<int>& a, int l, int d){
    // ako je [l, d] jedan ili nijedan element niz je sortiran
    if(l < d){
        // za pivot uzimamo proizvoljan element
        swap(a[l], a[l + rand() % (d - l + 1)]);
        // particionisem niz tako da se u njemu javljaju elementi
        // manji ili jednaki od pivota sa njegove leve strane, a zatim vece
        // [l, k] - manji od pivota
        // (k, i) - veci
        // [i, d] - neispitani
        int k = l;
        for(int i = l+1; i < d; i++)
            if(a[i] <= a[l])
                swap(a[i], a[++k]);
        // razmenjujemo pivot sa poslednjim manjim ili jednakim
        swap(a[l], a[k]);
        // rekurzivno sortiramo levi i desni niz
        qsort_(a, l, k-1);
        qsort_(a, k+1, d);
    }
}

// sortira niz a
void quick_sort(vector<int>& a){
    // poziv pomocne funkcije
    qsort_(a, 0, a.size() - 1);
}
```
