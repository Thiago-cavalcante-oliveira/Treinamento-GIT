const conta = document.getElementById("id_conta");
const saldo = document.getElementById("saldo_value");
const debito = document.getElementById("debito_value");
const credito = document.getElementById("credito_value");
const botao_confirma = document.getElementById("button_confirm");


function confere_saldo(){
    let pai = document.getElementById("formulario");
    let filho = document.createElement("article");
    let saldo_final;
    saldo_final=parseFloat(saldo.value)-parseFloat(debito.value)+parseFloat(credito.value);
    
    if (saldo_final>=0){
        filho.innerHTML = `
        <p>Saldo Positivo</p>  
        <p>A conta: ${conta.value}</p>  
        <p>Saldo atualizado: ${saldo_final}</p>    `
    }else{
        filho.innerHTML=`
        <p>Saldo Negativo</p>
        <p>A conta: ${conta.value}</p>  
        <p>Saldo atualizado: ${saldo_final}</p>
        `
    }
    pai.appendChild(filho);
}

botao_confirma.addEventListener("click", confere_saldo);
