---
title: "Prefiksno Drvo"
author: "Nikola Mladenovic"
category: "CS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - Computer sscience
  - Data Structures
---

# Prefiksno drvo

Uredjena binarna drva omogucavaju efikasnu implementaciju struktura sa asocijativnim pristupom, kod kojih se pristup vrsi po kljucu koji je string ili nesto drugo. Jos jedna struktura u vidu drveta koja omogucava efikasan asocijativni pristup je _trie_ (od engleske reci _retrieval_). Osnovna ideja ove strukture je da putanje od korena do lista kodiraju kljuceve, a da se podaci vezani za taj kljuc cuvaju u cvorug do kojeg se dolazi pronalazenjem kljuca duz putanje.

![Screenshot 2022-03-02 at 17.31.07.png](/images/posts/cs/prefiksno-drvo-1.png)

Svaki cvor moda da cuva informaciju da li se njime kompletira neka vrednost kljuca i tu tom slucaju cuva podatak.

U slucaju da neki cvor ima samo jednog potomka i ne predstavlja kraj nekog kljuca, grana do njega i grana od njega se mogu spojiti u jednu, njihovi karakteri nadovezati, a taj cvor obrisati.

![Screenshot 2022-03-02 at 17.36.52.png](/images/posts/cs/prefiksno-drvo-2.png)

Pored asocijativnog pristupa podacima, ocigledna pirmena ove strukture je i implementacija konacnih recnika, na primer u svrhu automatskog kompletirana reci.

Implementacija osnovnih funkcionalnosti prefiksnog drveta:

```other
#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>

using namespace std;

// struktura cvora prefiksnog drveta
// u svakom cvoru cuvamo mapu grana obelezenih karakterima
// ka potomcima i informaciju da li je u ovom cvoru kraj neke reci

struct cvor{
  bool krajKljuca = false;
  unordered_map<char, cvor*> grane;
};

// trazimo sufiks reci w koji pocinje od pozicije i
// u drvetu na ciji koren ukazuje pokazivac drvo
bool nadji(cvor* drvo, const string& w, int i){
  // ako je sufiks prazan, on je u korenu akko je u korenu obelezeno
  // da je tu kraj reci
  if (i == w.size())
    return drvo->krajKljuca;

  // trazimo granu na kojoj pise w[i]
  auto it = drvo->grane.find(w[i]);
  // ako je nadjemo, rekurzivno trazimo ostatak sufiksa od pozicije i+1
  if(it != drvo->grane.end())
    return nadji(it->second, w, i+1);

  // nismo nasli granu sa w[i] pa rec ne postoji
  return false;
}

// trazimo rec w u drvetu na ciji koren ukazuje pokazivac drvo
bool nadji(cvor *drvo, const string& w){
  return nadji(drvo, w, 0);
}

// umece sufiks reci w od pozicije i u drvo na ciji koren
// ukazuje pokazivac trie
void umetni(cvor *drvo, const string& w, int i){
  // ako je sufiks prazan samo u korenu belezimo da je tu kraj reci
  if(i == w.size()){
    drvo->krajKljuca = true;
    return;
  }

  // trazimo granu na kojoj pise w[i]
  auto it = drvo->grane.find(w[i]);
  // ako takva grana ne postoji, dodajemo je kreirajuci novi cvor
  if(it == drvo->grane.end())
    drvo->grane[w[i]] = new cvor();

  // sada znamo da grana sa w[i] sigurno postoji i preko te grane
  // nastavljamo dodavanje sufiksa koji pocinje na poziciji i+1
  umetni(drvo->grane[w[i]], w, i+1);
}
// umece rec w u drvo na ciji koren ukazuje pokazivac w
void umetni(cvor *drvo, string& w){
  return umetni(drvo, w, 0);
}

// program kojim testiramo funkcije
int main(){
  cvor* drvo = new cvor();
  vector<string> reci
    {"ana", "at", "noc", "noz", "da", "dan", "duh", "duz"};
  vector<string> reci_neg
    {"", "a", "d", "ananas", "marko", "ptica"};
  for(auto w : reci)
    umetni(drvo, w);
  for(auto w : reci)
    cout << w << ": " << (nadji(drvo, w) ? "da" : "ne") << endl;
  for(auto w : reci_neg)
    cout << w << ": " << (nadji(drvo, w) ? "da" : "ne") << endl;
  return 0;
}
```
