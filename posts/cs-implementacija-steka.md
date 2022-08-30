---
title: "Implementacija steka"
author: "Nikola Mladenovic"
category: "CS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - Computer sscience
  - Data Structures
---

# Implementacija steka

Obicno se koristi neki oblik niza ili jednostruko povezane liste. Stek `stack` podrazumevano koristi `vector`.

## Implementacija steka

- struktura Node - cvorovi jednostruko povezane liste
- funkcije koje implementiraju trazeno ponasanje liste
- klasa Stek - omotac oko jednostuko povezane liste sa svi potrebnim funkcionalnostima steka

```other
#include <iostream>

using namespace std;

// implementacija liste
class Node{
	public:
	int data;
	Node* next;
};
// function that returns empty node
Node* makeNewNode(int x){
	Node* newNode = new Node();
	newNode->data = x;
	newNode->next = nullptr;
	return newNode;
}
// add new node at beginig of the list
void addNode(Node** root, Node* newNode){
	newNode->next = (*root);
	(*root) = newNode;
}
// delete node
int deleteNode(Node** root){
	Node* temp = *root;
	(*root) = (*root)->next;
	int data = temp->data;
	delete temp;
	return data;
}
// read first node
int readNode(Node* root){
	return root->data;
}

// implementacija kalse Stack
class Stack{
public:
	int size;
	// constructor
	Stack(){
		root = nullptr;
		size = 0;
	}
	// public functions
	void push(int x){
		addNode(&root, makeNewNode(x));
		size++;
	}
	int pop(){
		size--;
		return deleteNode(&root);
	}
	int top(){
		return root->data;
	}
	void print(){
		for(Node* it = root; it != nullptr; it = it->next)
			cout << it->data << endl;

	}
private:
	Node* root;
};

int main(){
	Node* root = nullptr;
	Stack stek;

	stek.push(1);
	stek.push(2);
	stek.push(3);
	cout << "Deleted: " << stek.pop() << endl;
	cout << "Top: " << stek.top() << endl;
	stek.print();
	cout << "Size: " << stek.size << endl;

	return 0;
}
```
