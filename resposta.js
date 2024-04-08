
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




