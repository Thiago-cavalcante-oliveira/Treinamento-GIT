const totalhoras = document.getElementById("total_horas");
const valorhora = document.getElementById("valor_hora");
let horaextra=0;
let valorhoraextra=0;
let gerou;



function calcula(){

    if (totalhoras.value >160){
        horaextra.value = (((valorhora/100)*50)*(totalhoras-160));

        let gerou = 'Gerou hora extra';
    }else{
        let gerou = 'não gerou hora extra';
    }

    const formulario = document.getElementById("formulario");
    let resposta = document.createElement("article");
    let salario = (valorhora.value*totalhoras.value)+ horaextra.value;

    resposta.innerHTML=`
    <p> ${gerou}</p><br>
    <p>Valor total salário: R$ ${salario}</p><br>
        `
    formulario.appendChild(resposta);

}
