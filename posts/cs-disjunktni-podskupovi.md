---
title: "Disjunktni podskupovi (union-find)"
author: "Nikola Mladenovic"
category: "CS"
date: "2022-03-13"
bannerImage: "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000"
tags:
  - Computer sscience
  - Data Structures
---

# Disjunktni podskupovi (union-find)

Disjunktni skupovi predstavljaju skupove koji nemaju presek, tj. zajednicke clanove. Struktura podataka koja implementira ovakve skupove je _union-find_. Zasto se zove tako? Funkcije koje nam omogucava ova struktura su _union_ (objedinjavanje skupova) i _find_ (trazenje elementa u skupu), odatle i naziv _union-find._

Jedna moguca implementacija je da se odrzava preslikavanje svakog elementa u oznaku podskupa kojem pripada. Ako pretpostavimo da su elementi numerisano o 0 do n-1, onda ovo preslikavanje mozemo realizovati pomocu obicnog niza gde se na poziciji svakog elementa nalazi oznaka podskupa kojem pripada.

Operacija _find_ je tada trivijalna, jer se samo ocita oznaka elementa kojem skupu pripada i njega slozenost je _O_(1), dok je operacija _union_ slozenosti _O_(n), jer moramo da prodjemo kroz ceo skup i zamenimo oznake elemenata.

Elemente cemo da smestimo u neku formu drveta, samo sto cemo se kretati od potomka ka roditelju. Kada stignemo do korena drveta, njega cemo proglasiti za identifikator podskupa.
