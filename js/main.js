function number(i) {
    do {
        if (i === 0) {
            console.log(`${i} - это ноль`)
        } else if (i % 2 == 1) {
            console.log(`${i} - не четное число`)
        } else if (i % 2 == 0) {
            console.log(`${i} - четное число`)
        }
        i++
    }

    while (i <= 100) ;
}


let i = parseInt(prompt('Введите нижний предел'));

console.log(number(i));