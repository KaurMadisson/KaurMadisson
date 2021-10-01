/*
Katlal on kolm temperatuurivahemikku
0-20 on liiga külm
21-40 on paras temperatuur
 41-60 on liiga kuum
 */
 function checkTemp (temp) {
     console.log("temp on "+temp)
     if (temp <0) {
         console.log("Liiga külm")
         return 0;
     }else{
         return 1;
     }   
 }
