let = mitukordaproovinud =0
let number = Math.floor(Math.random() * 10) + 1
console.log(number)
while (password != "qwe123")
{
 
 
    password = prompt("Sisesta number")
mitukordaproovinud++
console.log("on proovinud", mitukordaproovinud)
if (mitukordaproovinud > 2)
        break


if (password!=number)
alert("Sorry, X ei ole õige number")
if (password== number-1 || password== number+1)
alert("Ai, sa pakkusid väga lähedale")
if (password ==null)
    break


}
if(password==number) console.log("Yay!Arvasid õige numbri ära!")
else console.log("ei")
VM2027:3 4
VM2027:10 on proovinud 1
VM2027:10 on proovinud 2
VM2027:10 on proovinud 3
