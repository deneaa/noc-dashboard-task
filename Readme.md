# NOC Dashboard (Gestionarea Stării și a Componentelor)

Pentru început, stocați următoarea listă de dispozitive într-un fișier separat `devices.json` și folosiți-o ca valoare inițială pentru un state a aplicației voastre.

```json
[
  { "id": "rtr-core-1", "name": "Core Router Alpha", "type": "Router", "status": "Active", "load": 45 },
  { "id": "sw-edge-2", "name": "Edge Switch West", "type": "Switch", "status": "Warning", "load": 82 },
  { "id": "db-main-1", "name": "Primary Database", "type": "Server", "status": "Critical", "load": 91 },
  { "id": "fw-ext-1", "name": "External Firewall", "type": "Firewall", "status": "Active", "load": 20 }
]
```

Rezolvați următoarele sarcini, respectând cu strictețe o arhitectură bazată pe componente reutilizabile:

## Sarcina 1 (2p)

Creați o componentă separată numită `Device`. În componenta principală a aplicației, generați dinamic câte un <DeviceCard /> pentru fiecare obiect din lista (care e și state-ul aplicației), transmițând datele necesare (`name`, `type`, `status`, `load`) prin props. Componenta <DeviceCard /> trebuie să fie strict de prezentare a tuturor informațiilor și să aplice o stilizare vizuală distinctă (de ex. culori diferite de fundal sau text) în funcție de statusul primit: verde pentru "Active", galben pentru "Warning" și roșu pentru "Critical"

## Sarcina 2 (2p)

Adăugați două butoane în interiorul componentei <DeviceCard />: "Simulate Traffic" (crește `load` al dispozitivului cu 10, dar nu mai mult de 100) și "Flush Cache" (scade încărcarea cu 20, dar nu mai puțin de 0). Interfața trebuie să se actualizeze imediat la apăsare.

## Sarcina 3 (2p)

Actualizați logica aplicației astfel încât statusul (textul "Active", "Warning", "Critical") să reacționeze automat la valoarea load la fiecare apăsare de buton. Dacă încărcarea atinge sau depășește 90, statusul trebuie să devină imediat "Critical". Dacă se află între 70 și 89 inclusiv, devine "Warning". Dacă scade sub 70, revine la "Active". Această schimbare trebuie să se întâmple sincronizat, o dată cu modificarea valorii numerice.

## Sarcina 4 (2p)

Creați o nouă componentă reutilizabilă numită <SummaryPanel /> și plasați-o în partea de sus a dashboard-ului. Aceasta va afișa două statistici cheie în timp real: numărul dispozitivelor aflate curent în starea "Active" și numărul dispozitivelor aflate curent în starea "Critical".

## Sarcina 5 (2p)

Adăugați un buton global "Emergency Reboot All" în interiorul componentei <SummaryPanel />. Apăsarea acestui buton trebuie să reseteze simultan proprietatea load a tuturor dispozitivelor la 0 și să readucă statusul fiecăruia la "Active". 

### Exemplu de solutie: https://noc-dashboard-solved.vercel.app/
