---
title: "AVL balansirano binarno drvo - izvorni kod"
author: "Nikola Mladenovic"
category: "CS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - Computer sscience
  - Data Structures
---

# AVL balansirano binarno drvo - izvorni kod

Celokupan kod implementacije funkcionalnosti AVL stabla.

- ubacivanje u stablo
- brisanje iz stabla

```other
#include <iostream>

using namespace std;

// pojedinacni cvor
class Node
{
    public:
    int key;
    Node *left;
    Node *right;
    int height;
};

// maksimum dva broj
int max(int a, int b);

// funkcija koja vraca visinu cvora
int height(Node *N)
{
    if (N == NULL)
        return 0;
    return N->height;
}

// maksimum dva broja
int max(int a, int b)
{
    return (a > b)? a : b;
}

// alociranje novog cvora
// inicijalizacija vrednosti
Node* newNode(int key)
{
    Node* node = new Node();
    node->key = key;
    node->left = NULL;
    node->right = NULL;
    node->height = 1;
    // svaki novi cvor ima pocetnu visinu 1
    return(node);
}

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

// vracamo faktor balansa
int getBalance(Node *N)
{
    if (N == NULL)
        return 0;
    return height(N->left) - height(N->right);
}

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
// vraca cvor sa najmanjom vrednoscu
Node* minValudeNode(Node* node){
    Node* current = node;

    // prolazimo nanize do krajnjeg levog potomka
    while(current->left != nullptr)
        current = current->left;
    return current;
}

// rekurzivna funkcija za brisanje cvora
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

// ispis
void preOrder(Node *root)
{
    if(root != NULL)
    {
        cout << root->key << " ";
        preOrder(root->left);
        preOrder(root->right);
    }
}

// main funkcija za testiranje implementacije
int main()
{
Node *root = NULL;

    root = insert(root, 9);
    root = insert(root, 5);
    root = insert(root, 10);
    root = insert(root, 0);
    root = insert(root, 6);
    root = insert(root, 11);
    root = insert(root, -1);
    root = insert(root, 1);
    root = insert(root, 2);

    cout << "Preorder traversal of the "
            "constructed AVL tree is \n";
    preOrder(root);

    root = deleteNode(root, 10);

    cout << "\nPreorder traversal after"
         << " deletion of 10 \n";
    preOrder(root);

    return 0;
}
```
