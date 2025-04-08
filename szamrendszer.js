

let szam = 0;
let szamrendszer = 0;
do
{
    szam = parseInt(prompt("Adjon meg egy pozitív egész számot!"));
    szamrendszer = parseInt(prompt("Adjon meg egy számrendszer alapját (1-32):"));
    
}
while(szamrendszer < 1 || szamrendszer > 32 || szam < 0 || isNaN(szam));


let eredmeny = szam.toString(szamrendszer);
console.log(szam + ": " + "10-es számrendszerből " + szamrendszer + " számrendszerbe: " + eredmeny);

