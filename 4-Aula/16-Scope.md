# Scope

* Escopo determina a visibilidade de alguma variável no JS

# Block statment

```js
// Vamos iniciar um bloco
{
    // aqui dentro é um bloco e posso colocar qualquer código
} // aqui fechamos o bloco
```

O bloco. também criará um novo escopo. chamamos de `block-scoped`


## var
```js
// var é global e poderá funcionar fora de um escopo de bloco
// hoisting = a variavel ja existe mesmo antes de receber um valor
console.log('> existe x antes do bloco? ', x) // x ja existe mas não teme valor

{ // <- escopo
    var x = 0 //-> funcionar fora de um escopo de bloco
} // <- escopo

console.log('> existe x depois do bloco? ', x) // <- fora do escopo, x ja tem valor
```

## let e const
```js
// const e let são variaveis locais e só funcionam no escopo onde foram criadas
// y só existira dentro do bloco em que ele aparece, nem antes nem depois
console.log('> existe y antes do bloco? ', y)

{
    let y = 0
}

console.log('> existe y depois do bloco? ', y)

/* caso y seja declarado fora de um bloco de código (let y = 0) e depois atualizado dentro de um bloco (y = 1)
ele recebera o ultimo valor armazenado, a menos que seja declarada uma nova variavel y (let y = 1). */
let y = 0
{
    y = 1
    console.log('> existe y? ', y)
}

console.log('> existe y depois do bloco? ', y)

//Uma variável const não pode ter seu valor alterado
//O que pode ser feito é criar uma outra variavel com o mesmo nome dentro de um bloco, mas no caso são duas variaveis diferentes.
const y = 0
{
    const y = 1
    console.log('> existe y? ', y)
}

console.log('> existe y depois do bloco? ', y)