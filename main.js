'use strict'

function criarImagem (urlImagem) {
const galeria = document.getElementById('galeria')
const img = document.createElement('img')
img.src = urlImagem.url

galeria.appendChild(img)
}

function carregarImagens (){
    const imagens = [
       {
        Nome: 'carro',
        url: './img/1.jpg'
       },
       {
        Nome: 'carro',
        url: './img/2.jpg'
       },
       {
        Nome: 'carro',
        url: './img/3.jpg'
       },
       {
        Nome: 'carro',
        url: './img/4.jpg'
       },
       {
        Nome: 'carro',
        url: './img/5.jpg'
       },
       {
        Nome: 'carro',
        url: './img/6.jpg'
       },
       {
        Nome: 'carro',
        url: './img/7.jpg'
       },
       {
        Nome: 'carro',
        url: './img/8.jpg'
       },
       {
        Nome: 'carro',
        url: './img/9.jpg'
       },
       {
        Nome: 'carro',
        url: './img/10.jpg'
       }
    ]
        
    
   
    imagens.forEach(criarImagem)
}

carregarImagens()