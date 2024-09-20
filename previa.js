// 1. Função 1 (maiorNumero): Retorna o maior número da lista usando Math.max(). Se a lista for vazia ou inválida, retorna null.
export function maiorNumero (listaNumeros){
    if(!Array.isArray(listaNumeros) || listaNumeros.length === 0){
        return null
    }
    return Math.max(...listaNumeros)
}

// 1. Função 2 (verificarParOuImpar): Verifica se um número é par ou ímpar usando o operador %.
export function verificarParOuImpar(ParImpar){
    if(isNaN(ParImpar)){
        return null
    }
    else{
        if(ParImpar % 2 === 0){
            return "Par"
        }
        else{
            return "Ímpar"
        }
    }
}

// 1. Função 3 (contarCaracterA): Conta quantas vezes o caractere 'a' ou 'A' aparece em uma string usando um loop while.
export function contarCaracter(palavra, letra){
    if(typeof palavra == typeof 'a'){
    palavra = palavra.toLowerCase()
    let quantidade = 0
    for(let letter of palavra){
        if(letter == letra){
            quantidade++
        }
    }
    return quantidade
}
    else{
        return null
    }
}

// 1. Função 4 (atualizarPropriedade): Atualiza o valor de uma propriedade existente em um objeto. Se a chave não existir, retorna null.
export function atualizarPropriedade(objeto, propriedade, valor){
    if(propriedade in objeto){
        objeto[propriedade] = valor
        return objeto
    }
    else{
        return null
    }
}