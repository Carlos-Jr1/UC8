//Se a peça possuir um pesso supeior a 100 gramas, pode cadastrar



let peso = 600;

if(peso <100){
    console.log("A peça deve pesar no minimo 100g")
} else{
    console.log("A peça possui peso adequado")
}

var listaDePecas = ["amortecedor", "Motor", "Filtro do Ar"]

if (listaDePecas.length < 10){
    console.log("é possivel cadastrar mais peças")
}else{
    console.log("Não tem amis espaço na lista")
}


let nomePeca = "Disco de Freio"
if (nomePeca.length >3){
    console.log("Nome de peça esta adquado par ao cadastro")
    // = atribuicao == igualdade ===igualdade estrita
} else if(nomePeca == 0){
    console.log("O nome da peça não pode ser vazio")
} else{
    console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado")
}


// encontro remoto 2 
// Considere a quantidade de alunos presentes na sala, percorra do zero até o número total e rerornar os seguintes resultados :


//- se o número par, escreva 'par' e o número correspondente
//- se o número for ímpar, escreva 'impar' e o número correspondente
//- Se o número for zero, escreva 'zero' 

let numeroDeAlunos = 10

for (let contador = 0; contador <= numeroDeAlunos; contador++){
    console.log (contador)

    if (contador == 0){
        console.log("o numero ataual é zero");
    }else if (contador % 2 == 0){
        console.log("O numero " + contador + " é PAR")
    }else{
        console.log(`O numero ${contador} é IMPAR`)
    }
}
