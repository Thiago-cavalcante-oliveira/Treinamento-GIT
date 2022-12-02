const nomecidadao = document.getElementById("nome_cidadao");
const filhos= document.getElementById("total_filhos");
const salario= document.getElementById("salario");
const botao= document.getElementById("button_confirm");
const media_salario = document.getElementById("media_salario");
const media_filho = document.getElementById("media_filhos");
const maior_salario = document.getElementById("maior_salario");
const menor_salario = document.getElementById("salario_menor");
let contador=soma_salario=soma_filho=0;
let salarios_organiza=[];
let i;


function adiciona_tabela() {
    if (nomecidadao.value.length < 0) {
        alert("Campo do nome preenchido de forma incorreta");

    } else if (filhos.value < 0 || filhos.value.length <= 0) {
        alert("Quantidade de filho(s) informado de forma icorreta, valor deve ser igual ou maior que 0 (zero)")

    } else if (salario.value < 0) {
        alert("Valor do salário informado de forma icorreta, valor deve ser igual ou maior que 0 (zero)")

    } else {
        let pai = document.getElementById("tabela");
        let filho = document.createElement("tr");
        filho.innerHTML = `
        <tr>
            <th>${nomecidadao.value}</th>
            <th>${filhos.value}</th>
            <th>R$ ${parseInt(salario.value)},00</th>
        </tr>
        `
        pai.appendChild(filho);
        contador++;
        //console.log(contador)
        soma_salario += parseInt(salario.value);
        soma_filho += parseInt(filhos.value);

        media_salario.innerHTML =( parseInt(soma_salario) / parseInt(contador)).toFixed(2);
        media_filho.innerHTML = parseInt(soma_filho) / parseInt(contador);

        for (i = 0; i <contador; i++) {
            salarios_organiza[i] = salario.value;

            const max = salarios_organiza.reduce((a, b) => Math.max(salarios_organiza), -Infinity);

            console.log(max);
        }

    }



}



botao.addEventListener("click", adiciona_tabela)

