let  numero = parseFloat(prompt("De qual numero você quer a tabuada"));

alert(` Tabuada do ${numero} ---`);

tabuada = "";

for (let i = 1; i <= 100; i++) {
    tabuada = tabuada + (`${numero} x ${i} = ${numero * i}\n`);
}
alert(tabuada)