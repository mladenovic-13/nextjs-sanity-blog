---
title: "Implementacija reda"
author: "Nikola Mladenovic"
category: "CS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - Computer sscience
  - Data Structures
---

# Implementacija reda

Red `queue` u jeziku C++ podrazumenavo koristi dek tj. `deque`. Takodje red je moguce implementirati i rucno pomocu jednostruko povezane liste. Tada cuvamo pokazivac na pocetni i poslednji element jednostruko povezane liste. Posto skidanje sa kraja liste nije moguce efikasno izvrsiti, dodavanje vrsimo na kraj, a uklanjanje sa pocetka liste.

Slozenost svih operacija je _O_(1), a memorijska slozenost _O_(k), gde je k maksimalni kapacitet.

## Implementacija reda sa jednim krajem

```other
#include <iostream>

using namespace std;

class Node{
public:
	int data;
	Node* next;
};

// delete element from begining of list
int deleteNode(Node** root){
	Node* temp = (*root)->next;
	int data = (*root)->data;
	delete (*root);
	(*root) = temp;
	return data;
}
// make new node
Node* makeNode(int x){
	Node* newNode = new Node();
	newNode->data = x;
	newNode->next = nullptr;
	return newNode;
}

// add element to end of list
void addNode(Node** last, int x){
	Node* newNode = makeNode(x);
	(*last)->next = newNode;
	(*last) = newNode;
}

class Queue{
public:
	int size;
	Queue(){
		root = nullptr;
		last = nullptr;
		size = 0;
	}
	void push(int x){
		if(root == nullptr){
			root = makeNode(x);
			last = root;
		}else{
			// passing pointer to last node
			// becase we use linked list with two pointers
			addNode(&last, x);
		}
		size++;
	}
	int pop(){
		Node* temp = root;
		int data = root->data;
		root = root->next;
		delete temp;
		size--;
		return data;
	}
	int front(){
		return root->data;
	}
	void print(){
		for(Node* it = root; it != nullptr; it = it->next)
			cout << it->data << endl;
	}

private:
	Node* root;
	Node* last;
};

int main(){
	Queue red;
	red.push(1);
	red.push(2);
	red.push(3);
	red.push(4);
	red.push(5);
	cout << "Pop: " << red.pop() << endl;
	cout << "Front: " << red.front() << endl;
	red.print();
	return 0;
}
```

## Implementacija reda sa dva kraja

Za implementaciju reda sa dva kraja koristimo dvostruko povezanu listu, jer uklanjanje poslednjeg elementa nije efikasno kod jednostruko povezane.

- Specifikacija implementacije:
  - klasu Node koristimo kao strukturu pojedinacnih cvorova dvostruko povezane liste ( nije kruzna).
  - klasu Queue koristimo kao omotac za dvostruko povezanu listu gde se implementiraju funkcionalnosti reda sa dva kraja.

```other
#include <iostream>
#include <string>

using namespace std;

// Node for double-linked list
class Node{
public:
	int data;
	Node* next;
	Node* prev;
};
// making new node
Node* makeNewNode(int x){
	Node* newNode = new Node();
	newNode->next = nullptr;
	newNode->prev = nullptr;
	newNode->data = x;
	return newNode;
}
// adding element to the beginning of the list
void addFront(Node** root, int x){
	Node* newNode = makeNewNode(x);
	newNode->next = (*root);
	(*root)->prev = newNode;
	(*root) = newNode;
}
// adding element to the end of the list
void addBack(Node** last, int x){
	Node* newNode = makeNewNode(x);
	newNode->prev = (*last);
	(*last)->next = newNode;
	(*last) = newNode;
}
// removing element from the beginnig of the list
int removeFront(Node** root){
	Node* temp = (*root);
	int data = temp->data;
	(*root) = (*root)->next;
	(*root)->prev = nullptr;
	delete temp;
	return data;
}
// removing an element from the end of the list
int removeBack(Node** last){
	Node* temp = (*last);
	int data = temp->data;
	(*last) = (*last)->prev;
	(*last)->next = nullptr;
	delete temp;
	return data;
}

class Queue {
public:
	int size;
	Queue(){
		size = 0;
		root = nullptr;
		last = nullptr;
	}
	void push_back(int x){
		if(root == nullptr){
			root = makeNewNode(x);
			last = root;
		}else{
			addBack(&last, x);
		}
		size++;
	}
	void push_front(int x){
		if(root == nullptr){
			root = makeNewNode(x);
			last = root;
		}else{
			addFront(&root, x);
		}
		size++;
	}
	int pop_front(){
		size--;
		return removeFront(&root);
	}
	int pop_back(){
		size--;
		return removeBack(&last);
	}
	int front(){ return root->data; }
	int back(){ return last->data; }
	void print(){
		for(Node* it = root; it != nullptr; it = it->next)
			cout << it->data << " ";
		cout << endl;
	}
private:
	Node* root;
	Node* last;
};

// function that returns first option
void options(){
	cout << "Available options:" << endl;
	cout << "f - push front" << endl;
	cout << "b - push back" << endl;
	cout << "pf - pop front" << endl;
	cout << "pb - pop back" << endl;
	cout << "rf - read front" << endl;
	cout << "rb - read back" << endl;
	cout << "s - size" << endl;
	cout << "p - print" << endl;
	cout << "-----------------" << endl;
}

int main(){
	Queue red;
	int x;
	string op;

	options();
	cout << "Enter your option: (ctrl + Z -> end of input)" << endl;
	while(cin >> op){
		if(op == "f"){
			cout << "Number: ";
			cin >> x;
			red.push_front(x);
		}
		else if(op == "b"){
			cout << "Number: ";
			cin >> x;
			red.push_back(x);
		}
		else if(op == "pf"){
			cout << "Pop: " << red.pop_front() << endl;
		}
		else if(op == "pb"){
			cout << "Pop: " << red.pop_back() << endl;
		}
		else if(op == "rf"){
			cout << "Front: " << red.front() << endl;
		}
		else if(op == "rb"){
			cout << "Back: " << red.back() << endl;
		}
		else if(op == "s"){
			cout << "Size: " << red.size << endl;
		}else if(op == "p"){
			red.print();
		}
		else{
			cout << "False input!" << endl;
		}
	}
	return 0;
}
```
