password = prompt("Sisesta number")
let Proovinud = 0 
let tulemus = Math.floor(Math.random() * 10) + 1
console.log(tulemus)
while (password != tulemus)
{
    password = prompt("Sisesta number")
    Proovinud++
    console.log('on proovinud', Proovinud )
    if (Proovinud > 2)
        break
    if (password!=tulemus)
    alert("Sorry, X ei ole õige number. ")
    if (password == tulemus -1 || password == tulemus +1)
    alert("Lähedal oled")
    if (password == null)
        break 


}
if(password == tulemus) console.log("Yay! Arvasid õige numbri ära!")
else console.log("Proovi uuesti")
