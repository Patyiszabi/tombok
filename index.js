let dobasok = [];

for (let i = 0; i < 100; i++) {
    dobasok.push(Math.floor(Math.random() * 6) + 1);
}

let atlag = 0;
for (let i = 0; i < dobasok.length; i++) {
    atlag += dobasok[i];
}
atlag /= dobasok.length;

let atlagfeletti = 0;
for (let i = 0; i < dobasok.length; i++) {
    if (dobasok[i] > atlag) {
        atlagfeletti++;
    }
}
console.log("Ennyi átlag feletti dobás volt", atlagfeletti);



let szamok = [];
for (let i = 0; i < 100; i++) {
    szamok.push(Math.floor(Math.random() * 101) - 50);
}


let legnagyobb = szamok[0];
let legnagyobbindex = 0;
for (let i = 1; i < szamok.length; i++) {
    if (szamok[i] > legnagyobb) {
        legnagyobb = szamok[i];
        legnagyobbindex = i;
    }
}
console.log("Legnagyobb elem: " + legnagyobb + ", index: " + legnagyobbindex);


let osszeg = 0;
for (let i = 0; i < szamok.length; i++) {
    osszeg += szamok[i];
}
console.log("Tömb elemeinek összege: " + osszeg);


let paros = 0;
let paratlan = 0;
for (let i = 0; i < szamok.length; i++) {
    if (szamok[i] % 2 == 0) {
        paros++;
    } else {
        paratlan++;
    }
}

console.log("Páros elemek száma: "+ paros + ", Páratlan elemek száma: " + paratlan);



let oszthatok = false;
for (let i = 0; i < szamok.length; i++) {
    if (szamok[i] % 7 == 0) {
        oszthatok = true;
        break;
    }
}

console.log("Van e a tömbben 7-tel osztható elem? " + oszthatok);



let negativ = false;
for (let i = 0; i < szamok.length; i++) {
    if (szamok[i] < szamok[i - 1] && szamok[i] < szamok[i + 1]) {
        negativ = true;
    }
}

console.log("Van-e a tömbben olyan elem, amelynek mindkét szomszédja negatív? " + negativ);



let nagyobb = false;
for (let i = 0; i < szamok.length; i++) {
    if (szamok[i] > szamok[i - 1] + szamok[i + 1]) {
        nagyobb = true;
    }
}

console.log("Van-e a tömben olyan elem, amely nagyobb, mint két szomszédjának összege? " + nagyobb);


let utolso = szamok.length - 1;
while (utolso % 3 != 0 || utolso % 5 == 0) {
    utolso--;
}

console.log("A tömb utolsó 3-mal osztható, de 5-tel nem osztható elemének indexe: " + utolso);


let egyforma = false;
for (let i = 0; i < szamok.length - 2; i++) {
    if (szamok[i] == szamok[i + 1] && szamok[i] == szamok[i + 2]) {
        egyforma = true;
    }
}

console.log("Van-e a tömbben 3 egyforma szám: " + egyforma);


let egymas = false;
for (let i = 0; i < szamok.length; i++) {
    if (szamok[i] == szamok[i + 2]) {
        egymas = true;
    }
}

console.log("Van-e a tömbben egymás melletti azonos érték: " + egymas);


let tobbszoros10 = [];
for (let i = 0; i < szamok.length; i++) {
    if (szamok[i] % 10 == 0) {
        tobbszoros10.push(i);
    }
}

console.log(tobbszoros10);


let atlag1 = 0;
for (let i = 0; i < szamok.length; i++) {
    atlag1 += szamok[i];
}
atlag1 /= szamok.length;

let atlagalatti = 0;
for (let i = 0; i < szamok.length; i++) {
    if (szamok[i] < atlag1) {
        atlagalatti++;
    }
}

console.log("Átlag alatti számok: " + atlagalatti);
