let valores = [8,1,7,5,4,3]

valores.sort()

/*
for (let pos=0;pos<valores.length;pos++){
    console.log(`A posição ${pos} tem dentro dela o valor: ${valores[pos]}`)
}
*/

for(let pos in valores){
    console.log(`A posição ${pos} tem dentro dela o valor: ${valores[pos]}`)
}


let posVet = valores.indexOf(10)

console.log(`O valor está na posição ${posVet}`)