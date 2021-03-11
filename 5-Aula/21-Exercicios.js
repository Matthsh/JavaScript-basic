//  1. Declare uma variável de nome weight
let weight;

//  2. Que tipo de dado é a variável acima?
console.log(typeof weight); // undefined

/* 
    3. Declare uma variável e atribua valores para cada um dos dados:
        *name: String,
        *age: Number (integer)
        *stars: Number (float)
        *isSubscribed: (boolean)
*/

let name = "Mattheus"
let age = 26
let stars = 4.9
let isSubscribed = true

/*
    4. A variável student abaixo é de que tipo de dados?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguente mensagem:

        <name> de idade <age> pesa <weight> Kg.

        Atenção, substitua <name> <age> e < weight> pelos valores de cada propriedade do objeto.
*/

let student = {
    name: "Mattheus",
    age: 26,
    weight: 80,
    stars: 4.9,
    isSubscribed: true
}
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} Kg.`)

/* 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor,
ou seja, somente o Array vazio.*/

let students = []

/* 6. Reatribua o valor da variável acima, colocando dentro dela o objeto student da questão 4.
(Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)*/

students = [student]
console.log(students)

// 7. Coloque no console o valor da posiçãozero do Array acima 

console.log(students[0])

// 8. Crie um novo student e coloque na posição 1 do array students

student2 = {
    name: "Mayk",
    age: 34,
    weight: 74.6,
    stars: 4.856,
    isSubcribed: false
}

students[1] = [student2]

console.log(students)

/* 
    9. Sem rodar o código diga o resultado do código abaixo e por que? 
    Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1

    R:
    hoisting
    var a == undefined
*/

