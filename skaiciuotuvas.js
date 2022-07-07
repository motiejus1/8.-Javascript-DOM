"use strict";


function veiksmas(skaicius1, skaicius2, veiksmas ) {
    let rezultatas;
    rezultatas = 0;
    if(veiksmas == "sudetis") {
        rezultatas= skaicius1 + skaicius2;
    } else if(veiksmas == "atimtis") {
        rezultatas= skaicius1 - skaicius2;
    } else if(veiksmas == "daugyba") {
        rezultatas= skaicius1 * skaicius2;
    } else if(veiksmas == "dalyba") {
        rezultatas= skaicius1 / skaicius2;
    } else {
        return "Neteisingas veiksmas"; //funkcijos nutraukimas
    }

    document.querySelector("#rezultatas").append(rezultatas + " ");
    return rezultatas;
}




document.querySelector("#sudetis").addEventListener("click", function() {
    let skaicius1 = parseFloat(document.querySelector("#skaicius1").value);
    let skaicius2 = parseFloat(document.querySelector("#skaicius2").value);
    let action = this.getAttribute("data-veiksmas");
    veiksmas(skaicius1, skaicius2, action);
})

document.querySelector("#atimtis").addEventListener("click", function() {
    let skaicius1 = parseFloat(document.querySelector("#skaicius1").value);
    let skaicius2 = parseFloat(document.querySelector("#skaicius2").value);
    let action = this.getAttribute("data-veiksmas");

    veiksmas(skaicius1, skaicius2, action);
})


document.querySelector("#daugyba").addEventListener("click", function() {
    let skaicius1 = parseFloat(document.querySelector("#skaicius1").value);
    let skaicius2 = parseFloat(document.querySelector("#skaicius2").value);
    let action = this.getAttribute("data-veiksmas");

    veiksmas(skaicius1, skaicius2, action);
})


document.querySelector("#dalyba").addEventListener("click", function() {
    let skaicius1 = parseFloat(document.querySelector("#skaicius1").value);
    let skaicius2 = parseFloat(document.querySelector("#skaicius2").value);
    let action = this.getAttribute("data-veiksmas");

    veiksmas(skaicius1, skaicius2, action);
})