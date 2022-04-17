// let variableCiclos = parseInt(prompt("ingrese un entero aquí"))

// for(let i = variableCiclos; i<=100;i++){
//     if(i===10) continue;
//     console.log(i)

//     for(let i = variableCiclos; i<=100;i++){
//         if(i===99) break;
//         console.log(i)
        
//     }
// }

let chatBot = prompt("Hola! Cómo te llamas?");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(chatBot != "ESC" ){
    alert("Hola, "+ chatBot);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    chatBot = prompt("Qué te gustaría saber? 1.el clima 2.un chiste");
    if(chatBot==="1"){
        alert("el clima es nublado")}
    else if(chatBot==="2"){
        alert("por qué kellogs está triste...")
    }  
    else {
        alert("El código ingresado no es válido, nos vemos pronto!")
        break
    }
    }
    



