// atvaizduoti skaicius nuo 1 iki 100

//[0;99] ivyksta 100 kartu
//masyvas

 "use strict"; //naudoti grieztai
//use script x!!!!!!!!!

//mes pasiimam kintamuosius is dizaino, atvaizduojame dizaine, sukuriame 100 divu su ciklu
//DOM manipuliacijos

// let masyvas= []; // tuscias masyvas

// for(let i=0; i<100; i++) {
//     masyvas.push(i); //papildo masyva
//     console.log(i);
// }

// console.log(masyvas);

//kintamojo deklaravimas
//kintamojo priskyrimas
//kintamojo isvedimas

// let x;
//error: ziurek x nera
// x=5;
// console.log(x);

//sugeneruoti atsitiktini skaiciu nuo 0 iki 100

//nera kintamojo
// negalima neegzistuojanciam kintamajam priskirti reiksmes
let atsitiktinis = 0;
atsitiktinis = Math.floor(Math.random()*100);//0 iki 99
console.log(atsitiktinis);
// console.log(atiktinis);

//Funkcijos - veiksmas atlikti pakartotinius veiksmus

//sudeti 2 skaicius

//skliausteliuose yra aprasomi funkcijos argumentai(kintamieji kuriuos priima funkcija) ir sie kintamieji gali buti naudojami
//funkcijos skliausteliuose
//funkcija atlieka kazkoki veiksma tik tada kai ja mes iskvieciam
function sudetis(skaicius1, skaicius2) {

    // skaicius1 = 4
    //skaicius2 = 5
    //kintamieji aprasyti pacioje funkcijoje su let egzistuoja tik funkcijoje
    let suma;
    suma = skaicius1+skaicius2;
    console.log(suma);
    return suma;
}

let suma;
suma = sudetis(4,5); // 9
suma = sudetis(15,4); // 19
suma = sudetis(100,3); //103
suma = sudetis(2,1); // 3


//atsitiktinio skaiciaus generavimas nurodytame intervale
// nuo intervaloPradzios, iki intervaloPabaigos


function manoRandom(intervaloPradzia, intervaloPabaiga) {
    let skaicius;
    skaicius = Math.floor(Math.random()*(intervaloPabaiga+1)) + intervaloPradzia; //intervaloPradza iki intervaloPabaiga
    return skaicius;
}

let randomSkaiciai = [];
for (let i=0; i<100;i++) {

    randomSkaiciai.push(manoRandom(1, 1000));
}

console.log(randomSkaiciai);
