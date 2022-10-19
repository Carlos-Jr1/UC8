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