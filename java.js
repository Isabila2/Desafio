var idade;
var resultado;

function fase(){
    idade = parseFloat(document.getElementsById).value;
     resultado = document.getElementById("resultado");

    if (idade < 11) {
        window.alert("Velho");
        resultado.innerHTML = "<br/> Seus resultado foi:" + idade.value + "<br/> Você é uma criança! Aproveite a infância!";
   } else if (idade > 11 && <=20){
       resultado = document.getElementById("resultado");
       resultado.innerHTML = "<br/> Seus resultado foi:" + idade.value + "<br/> Você é um adolescente! Está ganhando novas responsabilidades!";
    } else if ( idade > 20 && <=65){
        resultado = document.getElementById("resultado");
       resultado.innerHTML = "<br/> Seus resultado foi:" + idade.value + "<br/> Você é um adulto! Precisa arrumar um emprego!";
   } else if (idade > 65){
      resultado = document.getElementById("resultado");
     resultado.innerHTML = "<br/> Seus resultado foi:" + idade.value + "<br/> Você é um idoso! Descanse bastante!";
   }

    
}