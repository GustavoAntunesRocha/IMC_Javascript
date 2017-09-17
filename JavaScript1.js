function calcImc(){
    var peso =parseFloat(document.getElementById("pesoId").value);
    var altura =parseFloat(document.getElementById("alturaId").value);
    var imc = peso / (altura*altura);
    alert("O seu IMC é: "+imc);
}