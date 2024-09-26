document.addEventListener("DOMContentLoaded", function(){

   document.getElementById("bottone1").onclick=function(){
    
    document.querySelector("body").style.backgroundColor="orange";
    document.getElementById("bottone1").style.border="5px solid black";
    Somma();
    document.getElementById("risultato").style.display="block";
    document.getElementById("risultato1").style.display="none";
    document.getElementById("risultato2").style.display="none";

    setTimeout(function() {
        location.reload();
    }, 1000);
   }

   document.getElementById("bottone2").onclick=function(){

    document.querySelector("body").style.backgroundColor="pink";
    document.getElementById("bottone2").style.border="5px solid black";
    Sottrazione();
    document.getElementById("risultato").style.display="none";
    document.getElementById("risultato1").style.display="block";
    document.getElementById("risultato2").style.display="none";

    setTimeout(function() {
        location.reload();
    }, 1000);
   }
    
   
   document.getElementById("bottone3").onclick=function(){
    
    document.querySelector("body").style.backgroundColor="yellow";
    document.getElementById("bottone3").style.border="5px solid black";
    Moltiplicazione();
    document.getElementById("risultato").style.display="none";
    document.getElementById("risultato1").style.display="none";
    document.getElementById("risultato2").style.display="block";

    setTimeout(function() {
        location.reload();
    }, 1000);

   }
    


})


function Somma(){

    let numero1 = 100;
    console.log(numero1);
    
    let numero2 = 200;
    console.log(numero2);

    let risultato = numero1 + numero2;
    console.log(risultato);
    document.getElementById("risultato").style.width="130px";
    document.getElementById("risultato").style.height="50px";
    document.getElementById("risultato").style.border="5px solid black";
    document.getElementById("risultato").style.textAlign="center";
    document.getElementById("risultato").style.padding="50px";
    document.getElementById("risultato").style.backgroundColor="white";
    document.getElementById("risultato").style.marginLeft="150px";
    document.getElementById("risultato").innerHTML="La somma è " + "<br>" + risultato;
    
}


function Sottrazione(){

    let numero1 = 100;
    console.log(numero1);
    
    let numero2 = 200;
    console.log(numero2);

    let risultato = numero1 - numero2;
    console.log(risultato);
    document.getElementById("risultato1").style.width="130px";
    document.getElementById("risultato1").style.height="50px";
    document.getElementById("risultato1").style.border="5px solid black";
    document.getElementById("risultato1").style.textAlign="center";
    document.getElementById("risultato1").style.padding="50px";
    document.getElementById("risultato1").style.backgroundColor="white";
    document.getElementById("risultato1").style.marginLeft="550px";
    document.getElementById("risultato1").innerHTML="La sottrazione è " + "<br>" + risultato;
    
}


function Moltiplicazione(){

    let numero1 = 100;
    console.log(numero1);
    
    let numero2 = 200;
    console.log(numero2);

    let risultato = numero1 * numero2;
    console.log(risultato);
    document.getElementById("risultato2").style.width="135px";
    document.getElementById("risultato2").style.height="50px";
    document.getElementById("risultato2").style.border="5px solid black";
    document.getElementById("risultato2").style.textAlign="center";
    document.getElementById("risultato2").style.padding="50px";
    document.getElementById("risultato2").style.backgroundColor="white";
    document.getElementById("risultato2").style.marginLeft="950px";
    document.getElementById("risultato2").innerHTML="La moltiplicazione è " + "<br>" + risultato;
    
}


