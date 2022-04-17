const PNP = (volumen,horas) => volumen / horas;

let continua = true;

while(continua){
    
    let volumen= parseFloat(prompt("ingrese volumen"))
    let horas= parseFloat(prompt("ingrese horas"))
    let operacion= prompt("/ para solicitar el cálculo de PNP")
    

    if(!(isNaN(volumen) || isNaN(horas)) &&! (horas==0 && operacion=="/")){
        continua = false
    } else{
        alert("por favor ingrese un número válido")    
    }
    if (operacion==="/"){
        alert(PNP(volumen,horas))
    }else{
        alert("error durante el proceso, vuelva a intentarlo")
    }
}

   

