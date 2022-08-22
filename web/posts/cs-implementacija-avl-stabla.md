---
title: "Implementacija AVL stabla"
author: "Nikola Mladenovic"
category: "CS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - Computer sscience
  - Data Structures
---

# Implementacija AVL stabla

---

AVL samobalansirajuca stabla nam garantuju operacije: pretragu, maksimum, minimum, dodavanje.. u vremenu **O(log n)**, za razliku od nebalansiranog stabla koje ima vreme najgoreg slucaja \*\*O(n), gde je n broj cvorova stabla. Nakon svakog dodavanja ili brisanje slozenost operacija ostaje nepromenjena zahvaljujuci "samobalansirajucem" svojstvu AVL stabla.

Da bi obezbedili da stablo "ostane" AVL, moramo obezbediti rebalansiranje nakon svakog klasicnog BST (binarno pretrazivacko drvo) ubacivanja. Imamo dve tipicne operacije koje mogu vratiti stablo u balans. To su:

**1) Desna rotacija**

```other
// desna rotacija
Node *rightRotate(Node *y)
{
    Node *x = y->left;
    Node *T2 = x->right;

    // rotacija
    x->right = y;
    y->left = T2;

    // azuriramo visine
    y->height = max(height(y->left),
                    height(y->right)) + 1;
    x->height = max(height(x->left),
                    height(x->right)) + 1;

    // vracamo novi koren
    return x;
}
```

**1) Leva rotacija**

```other
// leva rotacija
Node *leftRotate(Node *x)
{
    Node *y = x->right;
    Node *T2 = y->left;

    // rotacija
    y->left = x;
    x->right = T2;

    // azuriramo visine
    x->height = max(height(x->left),
                    height(x->right)) + 1;
    y->height = max(height(y->left),
                    height(y->right)) + 1;

    // vracamo novi koren
    return y;
}
```

## Koraci koje pratimo kod dodavanja u stablo

Novi cvor koji dodajemo cemo obeleziti sa _w_

- Izvrsimo standardno BST ubacivanje.
- Krenuvsi od _w_, putujemo navise dok ne nadjemo prvi nebalansirani cvor koji cemo obeleziti sa _z_, sa _y_ cemo obeleziti njegovo dete, dok cemo sa _x_ obeleziti dete cvora _y_.
- Kod rebalansiranja moze doci do 4 mogucih slucaja jer x, y i zed mogu biti rasporedjeni na 4 nacina. To su :
  - _y_ je levi potomak _z_, a _x_ levi potomak _y_ (Left Left Case)
  - _y_ je levi potomak _z_, a _x_ desni potomak _y_ (Left Right Case)
  - _y_ je desni potomak _z_, a _x_ desni potomak \*y (Right Right Case)
  - _y_ je desni potomak _z_, a _x_ levi potomak _y_ (Right Left Case)

U svakom od mogucih slucajeva, jedino sto treba da uradimo je da rebalansiramo podstablo sa korenom u _z_ i celo drvo se vraca u balans, jer se visina cvora _z_ vraca na vrednost pre ubacivanja.

**1) Desna Desna Rotacija**

**1)Leva Leva Rotacija**

**1) Leva Desna Rotacija**

**1) Desna Leva Rotacija**

### Implementacija funkcije koja ubacuje novi cvor i rebalansira stablo

```other
// rekurzivna funkcija koja ubacuje cvor
Node* insert(Node* node, int key)
{
    /* 1. Normalno BST ubacivanje */
    if (node == NULL)
        return(newNode(key));

    if (key < node->key)
        node->left = insert(node->left, key);
    else if (key > node->key)
        node->right = insert(node->right, key);
    else // postojeci
        return node;

    /* 2. azuriranje visina */
    node->height = 1 + max(height(node->left),
                        height(node->right));

    /* 3. proveravamo faktor balansa
          i odredjujemo da li je balansiran */
    int balance = getBalance(node);

    // Kada cvor nije balansiran imamo 4 slucaja

    // levo levo slucaj
    if (balance > 1 && key < node->left->key)
        return rightRotate(node);

    // desno desno slucaj
    if (balance < -1 && key > node->right->key)
        return leftRotate(node);

    // levo desno slucaj
    if (balance > 1 && key > node->left->key)
    {
        node->left = leftRotate(node->left);
        return rightRotate(node);
    }

    // resno levo slucaj
    if (balance < -1 && key < node->right->key)
    {
        node->right = rightRotate(node->right);
        return leftRotate(node);
    }

    /* vracamo nepromenjen cvor */
    return node;
}
```

### Implementacija funkcije koja brise cvor i rebalansira stablo

```other
// vraca cvor sa najmanjom vrednoscu
Node* minValudeNode(Node* node){
    Node* current = node;

    // prolazimo nanize do krajnjeg levog potomka
    while(current->left != nullptr)
        current = current->left;
    return current;
}

// rekurzivna funkcija za brisanje dvora
// sa zadatom vrednoscu, vraca koren
// modifikovanog podstabla
Node* deleteNode(Node* root, int key){
    // 1) standardno BST brisanje
    if(root == nullptr)
        return root;

    // ako je vrednost cvora koji treba obrisati
    // manja od vrednosti korena idemo levo
    if(key < root->key)
        root->left = deleteNode(root->left, key);

    // ako je vrednost veca od korena idemo desno
    if(key > root->key)
        root->right = deleteNode(root->right, key);

    // ako trazena vrednost ista kao u korenu
    // to je cvor koji brisemo
    else{
        // ako cvor ima jednog ili nijednog potomka
        if((root->left == nullptr) || (root->right ==nullptr)){
            Node* temp = root->left ? root->left : root->right;
            // slucaj bez potomka
            if(temp == nullptr){
                temp = root;
                root = nullptr;
            }else{
                // kopiramo vrednosti nepraznih potomaka
                *root = *temp;
                delete temp;
            }
        }else{
                // slucaj cvora sa dva potomka
                Node* temp = minValudeNode(root->right);
                root->key = temp->key;
                root->right = deleteNode(root->right, temp->key);
        }
    }

    // ako stablo sadrzi samo jedan cvor
    if(root == nullptr)
        return root;

    // 2) azuriramo visinu trenutnog cvora
    root->height = 1 + max(height(root->left), height(root->right));

    // 3) nalazimo balans faktor cvora
    int balance = getBalance(root);

    // ako je cvor postao nebalansiran
    // imamo 4 slucajeva

    // levo levo
    if(balance > 1 && getBalance(root->left) >= 0)
        return rightRotate(root);

    // levo desno
    if(balance > 1 && getBalance(root->left) < 0){
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    // desno desno
    if(balance < -1 && getBalance(root->right) <= 0)
        return leftRotate(root);

    // desno levo
    if(balance < -1 && getBalance(root->right) > 0){
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }

    return root;
}
```

**Kompletan kod implementacije:** [AVL kod implementacije]
