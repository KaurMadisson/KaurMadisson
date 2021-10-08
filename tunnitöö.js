let Proovinud = 0 
let vastus = Math.floor(Math.random() * 10) + 1
console.log(vastus)
while (pakkumine != vastus)
{
    pakkumine = prompt("Sisesta number")
    Proovinud++
    console.log('on proovinud', Proovinud )
    if (Proovinud > 2)
        break
    if (pakkumine!=vastus)
    alert("Sorry, X ei ole õige number. ")
    if (pakkumine == vastus -1 || pakkumine == vastus +1)
    alert("Lähedal oled")
    if (pakkumine == null)
        break 


}
if(pakkumine==vastus) console.log("Yay! Arvasid õige numbri ära!")
else console.log("Proovi uuesti")
