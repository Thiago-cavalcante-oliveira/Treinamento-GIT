const valido = document.getElementById("valido");
const brancos = document.getElementById("voto_branco");
const nulos = document.getElementById("nulo_voto"); 
function imprime(){    
     let total = parseInt(valido.value) +parseInt(brancos.value) +parseInt(nulos.value);
     console.log(total);
     return total    
 }

 function imprime_resultado(){
     let total = imprime();
     let pai = document.getElementById("formulario");

     let perc_valido=(valido.value/total)*100;
     let perc_branco =(brancos.value/total)*100;
     let perc_nulo = (nulos.value/total)*100;
     let resposta = document.createElement("article");
     console.log(perc_nulo);

     resposta.innerHTML = `
     <p>Total de votos validos:${total}</p> <br>
     <p>% votos validos:${perc_valido}</p>
     <p>% votos em branco: ${perc_branco}</p>
     <p>% votos nulos: ${perc_nulo}</p>         
     `
     pai.appendChild(resposta)

 }