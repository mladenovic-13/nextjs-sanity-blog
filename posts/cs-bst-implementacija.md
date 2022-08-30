---
title: "BST Implementacija"
author: "Nikola Mladenovic"
category: "CS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - Computer sscience
  - Data Structures
---

# Implementacija Binarnog Pretrazivackog Stabla (BST)

Za implementaciju pojedinacnih cvorova BST-a koristimo klasu `Node`, koja sadrzi podatak koji cuvamo u cvoru i pokazivace na levo i desno podstablo.

```other
class Node{
public:
  int value;
  Node *left, *right;
};
```

Pre implementacije dodavanja u stablo treba nam pomocna funkcija koja pravi novi cvor i vraca pokazivac na njega.

```other
Node* newNode(int value){
    Node* node = new Node();
    node->value = value;
    node->left = nullptr;
    node->right = nullptr;
    return node;
}
```

Umetanje u binarno drvo pretrage se definise rekurzivnom funkcijom i uvek se vrsi na mesto lista. Vrednost poredimo sa vrednoscu korena, ako je manja umece se levo u suprotnom desno. U slucaju da je vrednost koju hocemo da umetnemo jednaka korenu postoje dva slucaja: drvo predstavlja **skup** (nije dopusteno dodavanje duplikata) i kada drvo predstavlja **multiskup** (mozemo dodavata duplikate).

```other
Node* insertNode(Node* root, int value){
    if(root == nullptr)
        return newNode(value);
    if(value < root->value)
        root->left = insertNode(root->left, value);
    else if( value > root->value)
        root->right = insertNode(root->right, value);
    return root;
}
```

Brisanje je malo komplikovanije od umetanja. Za njegovu realizaciju koristimo naredni rekurzivni algoritam:

- ako je element koji se brise manji od korena, on se brise iz levog podstabla
- ako je element koji se brise veci od korena, brise se iz desnog podstabla
- ako je jedna korenu brise se koren
  - ako desno podstablo ne postoji, rezultat je levo podstablo
  - u suprotnom se brise cvor koji sadrzi najmanji element iz desnog podstabla i ta vrednost se upisuje u koren. Ovu operaciju cemo izvrsiti zasebnom rekurzivnom funkcijom.

Nakon brisanja u koren je mogao biti doveden i najveci element iz levog podstabla. Minimum odredjujemo kao krajnji levi potomak korena. Maksimum se odredjuje analogno.

- ako je stablo prazno, sledbenik ne postoji
- ako je vrednost u korenu manja ili jednaka od datog broja, tada se sledbenik rekurzivno odredjuje u desnom podstablu. Ako desno podstablo ne postoji bice vracen `nullptr`.
- u suprotnom se sledbenik rekurzivno odredjuje u levom podstablu. Ako on postoji to je konacan rezultat, a ako ne postoji, tada je sledbenik koren.

Pod pretpostavkom da je stablo balansirano slozenost ovih operacija je _O_(_log_ n) u suprotnom _O_(n).

```other
// brisanje datog cvora iz stabla
Node* deleteMinNode(Node* root, int& value){
    // iz praznog stabla nema sta da se brise
    if(root == nullptr) return nullptr;
    // ako je levo podstablo prazno
    if(root->left == nullptr){
        // brisemo drvo i vracamo desno podstablo
        Node* right = root->right;
        value = root->value;
        delete root;
        return right;
    }
    // u suprotnom brisemo najmanji element levog podstabla
    root->left = deleteMinNode(root->left, value);
    return root;
}

// iz stabla se brise zadati cvor
Node* deleteNode(Node* root, int value){
    // prazno stablo
    if(root == nullptr) return nullptr;
    // cvor se nalazi levo pa se tamo i brise
    if(value < root->value)
        root->left = deleteNode(root->left, value);
    if(value > root->value)
        root->right = deleteNode(root->right, value);
    // cvor se nalazi u korenu
    else{
        if(root->right == nullptr){
            // ako je desno podstablo prazno brisemo
            // stablo i vracamo levo podstablo
            Node* left = root->left;
            delete root;
            return left;
        }else{
            // desno podstablo nije prazno, pa brisemo najmanji cvor
            // iz njega i vrednost iz tog cvora upisujemo u drvo
            int min;
            root->right = deleteMinNode(root->right, min);
            root->value = min;
        }
    }
    // cvor u koje je stablo se nije promenio
    return root;
}
```

Za kraj cemo implementirati do sada najjednostavniju funkciju koja brise celo stablo.

```other
// funkcija koja brise celo stablo
void deleteBST(Node* root){
    if(root != nullptr){
        deleteBST(root->left);
        deleteBST(root->right);
        delete root;
    }
}
```
