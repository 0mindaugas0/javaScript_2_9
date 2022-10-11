let n1;
n1 = 26;

let d1;
d1 = 2;

let a1;
a1 = 5;

let n2;
n2 = 37;

let d2;
d2 = -6;

let a2;
a2 = 17;

let progresija1 = aritmetineProgresija(n1, d1, a1);
console.log(progresija1);

let progresija2 = aritmetineProgresija(n2, d2, a2);
console.log(progresija2);

function aritmetineProgresija(kelintasSkaicius, skirtumas, pirmasSkaicius){
    return pirmasSkaicius + (kelintasSkaicius-1) * skirtumas;
}
