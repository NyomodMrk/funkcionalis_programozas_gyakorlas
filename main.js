import lista from "./dolgozok.json";
console.log(lista);

const ferfiDolgozok = 
lista.filter(lista => lista.nem =="férfi").length;
console.log(`Férfi dolgozók száma:`);
console.log(ferfiDolgozok)

const noDolgozok = 
lista.filter(lista => lista.nem =="nő").length;
console.log(`Női dolgozók száma:`);
console.log(noDolgozok);

const nagyFizetes = 
lista.filter(lista => lista.fizetes > 150000)
console.log(`150.000ft-nál többet kereső emberek adatai:`);
console.log(nagyFizetes);

const nagyokAdatai = 
lista.filter(lista => lista.nev.includes("Nagy"))
console.log(`"Nagy" keresztnevű emberek adatai: `);
console.log(nagyokAdatai);

const kisKoruak = 
lista.filter(lista => lista.kor < 18)
.map(lista => ({nev:lista.nev, fizetes:lista.fizetes}) );
console.log(`Kiskorú dolgozók adatai:`);
console.log(kisKoruak)