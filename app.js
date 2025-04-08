function sum(a, b){
    return a + b
}

function osszefuz(a, b){
    return `${a} - ${b}`
}

/*function arrayContains(tomb, elem){
    return tomb.includes(elem)
}*/

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
module.exports = {
    sum,
    osszefuz,
    getGrade
};