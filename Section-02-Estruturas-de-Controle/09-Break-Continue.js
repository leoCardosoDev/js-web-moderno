const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log(`---------------`)
console.log(`---------------`)
console.log(` `)
console.log(` `)
console.log(`---------------`)
console.log(`---------------`)


for(let x in nums){
    if(x == 0){
        continue
    }
    console.log(`${x} = ${nums[x]}`)
}


console.log(`---------------`)
console.log(`---------------`)
console.log(` EXTERNO `)
console.log(`---------------`)
console.log(`---------------`)

externo: for (let a in nums){
    for(b in nums){
        if(a == 2 && b == 3){
            break externo
        }

        console.log(`Par = ${a} x ${b} = ${a*b}` )
    }
}

console.log(`---------------`)
console.log(`---------------`)
console.log(` TABUADA `)
console.log(`---------------`)
console.log(`---------------`)

for (let a in nums){
    for(b in nums){
        console.log(`${a} x ${b} = ${a*b}` )
    }
}