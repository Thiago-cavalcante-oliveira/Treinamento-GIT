const totalhoras = document.getElementById("total_horas");
const valorhora = document.getElementById("valor_hora");



function calcula(){
    let valorhoraextra=valorhora.value+(valorhora.value/2);
    let horaextra=0;

    if (totalhoras.value>160) {
        horaextra = (totalhoras.value - 160) * valorhoraextra;
        console.log(horaextra);
    }
    const formulario = document.getElementById("formulario");
    let resposta = document.createElement("article");
    let salario = (valorhora.value*totalhoras.value)+ horaextra;

    resposta.innerHTML=`
   
    <p>Valor total salário: R$ ${salario}</p><br>
        `
    formulario.appendChild(resposta);

}
