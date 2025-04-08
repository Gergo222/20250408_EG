function sum(a, b){
    return a + b
}

function osszefuz(a, b){
    return `${a} - ${b}`
}

function arrayContains(tomb, elem){
    return tomb.includes(elem)
}

function getGrade(limit, point){
    const percent = point / limit * 100
    if(percent > 80){
        return 5
    }else if (percent > 60){
        return 4
    }else if(percent > 50){
        return 3
    }else if (percent > 40){
        return 2
    }else{
        return 1
    }
}

function addXTimes(base, add, times){
    let value = base
    for(let i = 0; i < times; i++){
        value += add
    }
    return value
}

function arrayElement(tomb, elem){
    if(elem !== null){
        tomb.push(elem)
    }

    return tomb
}

function convertItemsToString(item) {
    return `${item}`
}

function mapArrayElements(tomb){
    return tomb.map(item => convertItemsToString(item))
}

function getRandomByChance(chance = 50){
    return Math.random() < (chance / 100)
}
module.exports = {
    sum,
    osszefuz,
    getGrade,
    addXTimes,
    arrayContains,
    arrayElement,
    convertItemsToString,
    mapArrayElements,
    getRandomByChance
};