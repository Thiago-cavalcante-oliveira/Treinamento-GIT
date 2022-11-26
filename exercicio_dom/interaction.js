let ITENS_LOJA = [
    {
        nome:"Bola da Copa",
        preco:86.30,
        url_img:"./img/bola_copa.webp",
        descricao:"Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome:"Carrinho da Hot Wheels",
        preco:5.80,
        url_img:"./img/carro_hotwheels.jpeg",
        descricao:"Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome:"Chinelo",
        preco:19.99,
        url_img:"./img/chinelo.webp",
        descricao:"Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome:"Escorredor de Louça",
        preco:15.20,
        url_img:"./img/escorredor_louca.webp",
        descricao:"Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome:"Espada Medieval",
        preco:200.18,
        url_img:"./img/espada_medieval.png",
        descricao:"Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome:"Guitarra",
        preco:1980.99,
        url_img:"./img/guitarra.webp",
        descricao:"Otima para utilizar em bandas de hard rock"
    },
    {
        nome:"Toalha de Banho",
        preco:9.99,
        url_img:"./img/toalha_banho.webp",
        descricao:"Boa para se secar apos o banho"
    },
    {
        nome:"Vinho",
        preco:59.90,
        url_img:"./img/vinho.webp",
        descricao:"Vinho que harmoniza muito bem com carnes vermelhas "
    }
]




function adiciona_item(item) {
    let section_itens = document.getElementById("itens_section");
    let elemento_criado = document.createElement("article");
    elemento_criado.className = "publica"  
    console.log("hello")
    

    elemento_criado.innerHTML = `
    <img class="img_loja" src="${item.url_img}" alt="${item.nome}">
            <h2 class="titulo">${item.nome}</h2>
            <p class="preco">R$ ${item.preco}</p>
            <p>Descrição:</p>
            <article>
            <p class="descricao">${item.descricao}</p>
            </article>            
    `
    section_itens.appendChild(elemento_criado)
}



window.onload = function(){
    let itens;
    
    if (localStorage.getItem("itens-loja") != null){
        itens = JSON.parse(localStorage.getItem("itens-loja") || "[]");
    }else { console.log("oie")
    itens = ITENS_LOJA}
    
    for (let i=0;i<itens.length;i++) {
        adiciona_item(itens[i])
    }
}

function criar_itens(){
    let item = {
        nome:"",
        preco: null,
        url_img:"",
        descricao:""
    }
    
    item.nome = prompt("nome");
    item.preco = prompt("preço")
    item.url_img = prompt("imagem");
    item.descricao = prompt("descrição");
    
    ITENS_LOJA.push(item)
    
    adiciona_item(item)
    
    localStorage.setItem("itens-loja", JSON.stringify(ITENS_LOJA))
    
}




