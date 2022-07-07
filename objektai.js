"use strict";

//savybes(properties) - dydis, istrizaine, kaina, spalva ir t.t.
//funkcijos, metodai - rodytiVaizda, išsijungti, įsijungti, derintiSpalvas

//Zmogus
// savybes(properties) - ugi, svori, fiziniai gebejimai, kuno formos t.t.
//veiksmus, funckijas, metodus - dirbti, mokytis, tingeti, miegoti, atsikelti, mastyti, nemastyti ...

//sudeti du skaicius

// ivesti du skaicius: skaicius1 ir skaicius2
//metodas: sudeti

let skaiciuotuvas = {
    skaicius1: 0, //13
    skaicius2: 0, //2
    //constructor
    ijungimas: function(a,b) {
        this.skaicius1 = a; // 13
        this.skaicius2 = b; // 2
    },
    sudeti: function() {
        let suma;
        suma = this.skaicius1 + this.skaicius2;
        console.log(suma);
        return suma;
    }
};

// skaiciuotuvas.ijungimas(13,2);
// skaiciuotuvas.sudeti();
// skaiciuotuvas.ijungimas(12,8);
// skaiciuotuvas.sudeti();
//objekta tiesiog susikurem
// skaiciuotuvas.sudeti();
//skaiciuotuvo ijungimas
//suvesti sudedamas reiksmes
//sudeti


// Uzduotis "Trikampis". Trikampis = objektas. Savybes:a, b,c; Metodus: koks jo plotas, koks jo perimetras


let trikampis = {
    a: 0,
    b: 0,
    c: 0,
    krastines: function(a, b,c ){
        this.a = a;
        this.b = b;
        this.c = c;
        let masyvas;
        let arGalima = 0;
        if(this.a+this.b>this.c && this.c+this.b>this.a  && this.a+this.c>this.b) {
            arGalima = 1;
        }
        masyvas = [this.a, this.b, this.c, arGalima];
        return masyvas;
    },
    plotas: function(a, b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
        let plotas = 0;
        let p = (this.a + this.b + this.c)/2;
        if(this.a+this.b>this.c && this.c+this.b>this.a  && this.a+this.c>this.b) {
            // S = Math.Sqrt(p(p-a)(p-b)(p-c))
            //p = puse perimtro(pusperimetris)
            plotas = Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c));

        } else {
            return "Trikampio sudaryti negalima"
        }
        return plotas;
    },
    perimetras: function(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
        let per = 0;

        if(this.a+this.b>this.c && this.c+this.b>this.a  && this.a+this.c>this.b) {
            per = this.a + this.b + this.c;
        } else {
            return "Trikampio sudaryti negalima"
        }
        return per;
    }
}

console.log(trikampis.perimetras(15,4,3)); // statusis ivariakrastis trikampis
console.log(trikampis.plotas(15,4,3)); // 6

function manoRandom(intervaloPradzia, intervaloPabaiga) {
    let skaicius;
    skaicius = Math.floor(Math.random()*(intervaloPabaiga+1)) + intervaloPradzia; //intervaloPradza iki intervaloPabaiga
    return skaicius;
}


let testiniai_duomenys = [];

for(let i=0; i<1000; i++) {
    testiniai_duomenys[i]=[manoRandom(1,100),manoRandom(1,100),manoRandom(1,100)];
} 


for(let j=0; j<testiniai_duomenys.length; j++) {
    console.log(trikampis.krastines(testiniai_duomenys[j][0],testiniai_duomenys[j][1],testiniai_duomenys[j][2]));
}


// console.log(testiniai_duomenys);
// console.log(trikampis.krastines(15,4,3));

