/* 
O objetivo deste teste é criar um jogo da memória simples. Utilizando Letras.
Para isto utilize Javascript para desenvolver o que se pede.

Ao final envie comente o arquivo .js, então todas as respostas devem estar neste arquivo e o html e o css não devem ser alterados.

O jogo terá 5 letras: A, B, C, D, E. 

As letras serão repetidas 2 vezes no jogo, totalizando 10 cartas.

O jogador deverá clicar em duas cartas, se as cartas forem iguais, elas devem ser mantidas viradas (Seu valor aparecerá na tela). Se forem diferentes, as cartas devem ser viradas novamente (Aparecerá um X no lugar da carta).

- Questao 1: Crie um array com as letras do jogo. (0.2pts)

Crie um array com as cartas a serem jogadas, utilize letra maiuscula. O array deverá ter 10 cartas, sendo 2 de cada letra.

- Questao 2: Virada das cartas (0.4pts)

Selecione todas as cartas e adicione um evento de clique em cada carta. 
Ao clicar na carta, a carta deve ser "virada" e mostrado o seu valor.
Utilize o atributo posicao para identicar a carta clicada no array de cartas.

- Questao 3: Verificação de cartas (0.5pts)

Verifique se as duas cartas clicadas são iguais.
Se as cartas forem iguais, elas devem ser mantidas viradas.
Se as cartas forem diferentes, as cartas devem ser viradas novamente (O valor X deve ser exibido). 
Lembre que você pode usar variáveis para armazenar a carta clicada anteriormente.

- Questao 4: Aplique a classe referente a cada carta (0.4pts)

Ao virar a carta adicione a classe css correspondente a carta clicada (ex: A).
Ao desvirar a carta ela deve voltar ter somente a sua classe original (card).


- Questão extra: (0.5pts)

Aplique a função setTimeout para caso o par não seja igual que as cartas sejam desviradas somente após 1 segundo.

O método setTimeout permite executar um código após um tempo estipulado, que pode ser definido em milissegundos. O método executará o código apenas uma vez.

setTimeout(function, milliseconds);

O primeiro parâmetro é a função que será executada e o segundo é o tempo em milissegundos, lembrando que 1s é igual a 1000ms.
*/

let arrayCartas = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "A",
    "B",
    "C",
    "D",
    "E"
];

console.log(arrayCartas);
let cartas = document.querySelectorAll(".card");

let verificCartas = [];
let cont = 0;

cartas.forEach((card, index) => { // inicio para percorrer todas as cartas
    card.addEventListener("click", event => { // adiciono o evento de click
        cont++;
        event.preventDefault();
        let idCarta = card.getAttribute('posicao'); // peg a posição da carta e coloco ela em uma variavel
        //console.log(arrayCartas[idCarta]); // printo no console para ver se esta indo
        //console.log(idCarta);
        if (arrayCartas[idCarta] !== undefined) { // faço uma verificação para ver se a carta ja foi selecionada ou n
            card.innerText = arrayCartas[idCarta]; // adiciono o texto na carta
            card.classList.add(arrayCartas[idCarta]); // coloca o css
            verificCartas.push(arrayCartas[idCarta]); // adiciona no novo array as cartas selecionadas
            //console.log(verificCartas); // printa para ver as cartas selecionadas
            if (cont % 2 == 0) { // vai verificar se há duas cartas no array para fazer a verificacao e desvirlas
                let carta1 = verificCartas[verificCartas.length - 2]; // Pegando o valor da penúltima carta selecionada
                let carta2 = verificCartas[verificCartas.length - 1];

                if (carta1 != carta2 || carta2 != carta1) {
                    setTimeout(function (Tempo) { // 
                        RemoverCor(carta1, carta2);
                    }, 2000);
                }
            }
        }
    });
});

function RemoverCor(carta1, carta2) {
    cartas.forEach(card => {
        if (card.innerText == carta1 || card.innerText == carta2) {
            card.innerText = "X";
        }
        card.classList.remove(carta1);
        card.classList.remove(carta2);  
    });
}




