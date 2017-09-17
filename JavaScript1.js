function calcImc(){
    var peso =parseFloat(document.getElementById("pesoId").value);
    var altura =parseFloat(document.getElementById("alturaId").value);
    var temp = peso / (altura*altura);
    var imc = temp.toFixed(2);
    if(imc < 16){
        alert("Seu imc é: " + imc + "\nMagreza grave!")
    }
    else if(imc < 17){
        alert("Seu imc é: " + imc + "\nMagreza moderada!")
    }
    else if(imc < 18.5){
        alert("Seu imc é: " + imc + "\nMagreza leve!")
    }
    else if(imc < 25){
        alert("Seu imc é: " + imc + "\nVocê está saudável!")
    }
    else if(imc < 30){
        alert("Seu imc é: " + imc + "\nSobrepeso!")
    }
    else if(imc < 35){
        alert("Seu imc é: " + imc + "\nObesidade Grau 1!")
    }
    else if(imc < 40){
        alert("Seu imc é: " + imc + "\nObesidade Grau 2 (severa)!")
    }
    else{
        alert("Seu imc é: " + imc + "\nObesidade Grau 3 (mórbida)!")
    }
}