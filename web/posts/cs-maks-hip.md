---
title: "Maks-hip"
author: "Nikola Mladenovic"
category: "CS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - Computer sscience
  - Data Structures
---

# Maks-hip

Razmotricemo narednu implementaciju. Drvo smestamo u niz. Koren na poziciju 0, naredna dva elementa na pozicije 1, 2 itd. Zahtevamo da se hip popunjava redom i da su svi nivoi osim eventualno poslednjeg popunjeni.

Uocavamo da ako se koren nalazi na poziciji _i_, njegovo levo dete se nalazi na poziciji _2i + 1_, a desno dete na poziciji _2i + 2_, dok mu se roditelj nalazi na poziciji _(i - 1)/2_.

```other
// funkcije koje vracaju poziciju cvorova
// u zavisnosti od korena koji se prosledi
int parent(int i){ return (i-1)/2; }
int leftChild(int i){ return 2*i + 1; }
int rightChild(int i){ return 2*i + 2; }
```

Najveci element se uvek nalazi na poziciji 0, vreme koje nam je potrebno za njegovo ocitavanje je _O_(1).

```other
// funkcija koja vraca najveci element
int max( const vector<int>& hip){ return hip[0]; }
```

Razmotrimo kako mozemo realizovati operaciju izbacivanja najveceg elementa iz maks-hipa. Posto se on nalazi u korenu, najjednostavnije je u njega upisati poslednji element iz hipa (najdesniji element poslednjeg nivo). Ovim je zadovoljen uslov drveta, ali ne mora nuzno da znaci da je taj element veci od svojih potomaka sto narusava svojstvo hipa. Popravku izvrsavamo tako sto uporedimo vrednost korena sa vrednostima njegove dece (ako postoje). Ako je vrednost veca ili jednaka od tih vrednosti, onda koren zadovoljava uslov maks-hipa i zavrsavamo proceduru. U suprotnom, menjamo vrednost u korenu sa vecom od vrednosti njegove desce. Nakon toga koren zadovoljava uslov maks-hipa i preostaje jedino da proverimo i popravimo ako je potrebno podrucje proddrveta u cijem je korenu zavrsila vrednost korena. Ovo je problem istog oblika, samo manje dimenzije i lako se resava.

```other
// funkcija koja vraca najveci element
int max( const vector<int>& hip){ return hip[0]; }

// element na poziciji k se pomera nanize,
// razmenom sa svojom decom sve dok se ne zadovolji
// uslov maks-hipa
void moveDown(vector<int>& heap, int k){
    // pozicija najveceg cvora (razmatrajuci
    // roditelja i njegovu decu)
    int max = k;
    int left = leftChild(k);
    int right = rightChild(k);
    if(left < heap.size() && heap[left] > heap[max])
        max = left;
    if(right < heap.size() && heap[right] > heap[max])
        max = right;
    // ako roditelj nije najveci
    if(max != k){
        // menjamo roditelja i vece detete
        swap(heap[max], heap[k]);
        // rekurzivno obradjujemo vece dete
        moveDown(heap, max);
    }
}
// izbacivanje najveceg elementa
void removeMax(vector<int>& heap){
    // poslednji element izbacujemo iz hipa
    // i upisujemo ga na pocetnu poziciju
    heap[0] = heap.back();
    heap.pop_back();
    // pomeramo pocetni element nanize dok
    // se ne zadovolji uslov hipa
    moveDown(heap, 0);
}
```

Vreme potrebno za uklanjanje najveceg elementa je _O_(_log_ n).

Umetanje novog elementa funkcionise po slicnom, ali obrnutom principu. Element je najjednostavnije ubaciti na kraj niza, nakog cega izvrsavamo izmene kao kod izbacivanja.

```other
// element na poziciji k se pomera navise,
// razmenom sa svojim roditeljem, sve dok se ne zadovolji hip
void moveUp(vector<int>& heap, int k){
    // pozicija roditelja cvora k
    int p = parent(k);
    // ako cvor k nije koren i ako je veci od roditelja
    if(p > 0 && heap[k] > heap[p]){
        // razmenjujemo ga sa njegovim roditeljem
        swap(heap[k], heap[p]);
        // pomeramo roditelja navise
        moveUp(heap, p);
    }
}

// ubacuje se element x i u hip
void insert(vector<int>& heap, int x){
    // element dodajemo na kraj
    heap.push_back(x);
    // pomeramo ga navise dok se ne zadovolji uslov hipa
    moveUp(heap, heap.size() - 1);
}
```
