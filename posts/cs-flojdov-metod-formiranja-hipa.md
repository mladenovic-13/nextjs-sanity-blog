---
title: "Flojdov metod formiranja hipa"
author: "Nikola Mladenovic"
category: "CS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - Computer sscience
  - Data Structures
---

# Flojdov metod formiranja hipa

Jedan nacin da se od niza formira hip (u istom memorijskom prostoru) je da se krene od praznog hipa i da se jedan po jedan element ubacuju u hip. Ovaj nacin naziva se **formiranje hipa nanize** ili **Bilijamsov metod**. Slozenost najgoreg slucaja formiranja jednaka je **_O_(n _log_ n).**

Mi cemo razmatrati drugi efikasniji nacin formiranja hipa koji se naziva **formiranje hipa navise** ili **Flojdov metod**. Ideja je da se elementi pocetnog niza obilaze od pozadi i da se svaki element umetne u hip ciji koren predstavljam tako sto se spusti nanize kroz hip.

```other
// svi elementi u nizu na pozicijama [0, i) zadovoljavaju uslov hipa
// pomera se element na poziciji i navise tako da nakon toga svi elementi
// na pozicijama [0, i] zadovoljavaju uslov hipa
void pomeri_gore(vector<int>& a, int i){
    while(i > 0){
        // roditelj cvora na poziciji i
        int roditelj = (i-1)/2;
        // ako element nije veci od svog roditelja,
        // postupak je zavrsen
        if(a[i] <= a[roditelj])
            break;
        // inace razmenimo element sa svojim roditeljem
        swap(a[i], a[roditelj]);
        // postupak nastavljamo od pozicije roditelja
    }
}
// svi elementi u nizu na pozicijama od 0 do n-1 zadovoljavaju uslov
// hipa osim eventualno elementa na poziciji i koji moze biti manji od
// svojih potomaka (ali je svakako manji ili jedna svom roditelju, ako roditelj postoji)
// element se pomera nanize , tako da se na pozicijama 0 do n-1 dobije ispravan hip
void pomeri_dole(vector<int>& a, int i, int n){
    while(true) {
        // pozicija sa kojom treba zameniti element na poziciji i
        // vrednost i govori da element ne treba menjati
        int menjam = i;
        // pozicija levog i desnog potomka cvora
        int levi = 2 * i + 1;
        int desni = 2 * i + 2;
        // ako element na poziciji i ima levog potomka i ako je manji od njega
        // trebalo bi da se zameni sa levim
        if(levi < n && a[i] < a[levi])
            menjam = levi;
        // medjutim, ako postoji i desni potomak i ako je on jos manji
        //trebalo bi da se zameni sa njim
        if (desni < n && a[menjam] < a[desni])
            menjam = desni;

        // ako je menjam ostalo na vrednosti i znaci da nije manje ni od
        // jednog potomka i posao je zavrsen
        if(menjam == i)
            break;

        // u suptrotnom menjamo element sa svojim potomkom
        swap(a[i], a[menjam]);
        // i nastavljamo postupak popravke od tog potomka
        i = menjam;
    }
}

// od niza pravi hip
void napravi_hip(vector<int>& a){
    // za sve pozicije od 1 do a.size()-1
    for(int i = 1; i < a.size(); i++)
    // na pozicijama [0,i) je vec napravljen hip
    // element na poziciji i jedini ne mora da zadovoljava uslov
    // pa ga pomeramo navise tako da dobijemo hip na pozicijama [0,i]
    pomeri_gore(a, i);
}

// od niza u kojem se nalazi hip pravi sortirani niz
void sortiraj_hip(vector<int>& a){
    // za sve pozicije od a.size()-1 unazad do 1
    for(int k = a.size() - 1; k > 0; k--){
        // najveci element u hipu razmenjujemo sa pozicijom n
        swap(a[0], a[k]);
        // element na vrhu ne mora biti na svom mestu u hipu koji ima k elemenata
        // pa ga pomeramo nanize tako da tih prvih k elemenata cine isptavan hip
        pomeri_dole(a, 0, k);
    }
}

void heap_sort(vector<int>& a){
    // od niza pravi hip - binarno drvo u cijem se svakom cvoru
    // nalazi element koji je veci ili jednak od svojih potomaka.
    // Drvo je u nizu smesteno po nivoima
    napravi_hip(a);
    sortiraj_hip(a);
    // za sve ovo mozemo koristiti i
    // biblioticke funkcije
    // make_heap()
    // sort_heap();
}
int main(){ return 0; }
```
