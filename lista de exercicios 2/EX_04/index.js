const idade_homem_1 = document.getElementById("homem_1");
const idade_homem_2 = document.getElementById("homem_2");
const idade_mulher_1 = document.getElementById("mulher_1");
const idade_mulher_2 = document.getElementById("mulher_2");
const botao = document.getElementById("button_confirm");
function checa_idade(){
    const pai = document.getElementById("formulario");
    const filho = document.createElement("article");
    let homem_velho, homem_novo, mulher_velha, mulher_nova;
            
    if (idade_homem_1.value > idade_homem_2.value){
        homem_velho=idade_homem_1.value;
        homem_novo=idade_homem_2.value             
    }else{
        homem_velho=idade_homem_2.value;
        homem_novo=idade_homem_1.value;
    }
    if(idade_homem_1.value > idade_mulher_2.value){
        mulher_velha=idade_mulher_1.value;
        mulher_nova=idade_mulher_2.value;
    }else{
        mulher_velha=idade_mulher_2.value;
        mulher_nova=idade_mulher_1.value;
    }
    let soma1 = parseInt(homem_velho) +parseInt(mulher_nova);
    let soma2 = parseInt(homem_novo)+parseInt(mulher_velha);
    filho.innerHTML = `
        <p> A soma das idades do homem mais velho e da mulher mais nova é: ${soma1}</p>
        <p>A soma das idades do homem mais novo e da mulher mais nova é: ${soma2}</p>
    `
    pai.appendChild(filho);
}
botao.addEventListener("click", checa_idade);
