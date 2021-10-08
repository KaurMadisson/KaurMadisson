let Proovinud = 0 
let vastus = Math.floor(Math.random() * 10) + 1
console.log(vastus)
while (password != vastus)
{
    password = prompt("Sisesta number")
    Proovinud++
    console.log('on proovinud', Proovinud )
    if (Proovinud > 2)
        break
    if (password!=vastus)
    alert("Sorry, X ei ole õige number. ")
    if (password == vastus -1 || password == vastus +1)
    alert("Lähedal oled")
    if (password == null)
        break 


}
if(password==vastus) console.log("Yay! Arvasid õige numbri ära!")
else console.log("Proovi uuesti")
