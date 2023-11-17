let action = document.getElementById("criar") // selecionando o botao
action.addEventListener("click", carregar) // escutando o evento click do botao
let tabuada = document.getElementById("tabuada") // selecionando a div tabuada

function carregar() {
    let numero = window.document.getElementById("numero") // selecionando o numero digitado no input
    tabuada.innerText = ""; 
    console.log(numero.value);

    for (let i = 0; i <= 10; i++) {
        tabuada.innerHTML += `${numero.value} * ${i} = ${numero.value * i} </br>`; // escrevendo o resultado
        console.log("teste")
    }
}
