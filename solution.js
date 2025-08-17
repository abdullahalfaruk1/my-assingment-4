function  totalFine(fare) {
if(typeof fare !== "number"){
    return "Invalid";
}

else if(fare <= 0){
    return "Invalid";
}


    const fine = fare + (fare * 20 / 100) + 30;
    return fine;
}




function onlyCharacter(input){
if (typeof input !== "string"){
    return "Invalid";
} 
const result = input.split('').filter(char => char !== ' ').join('');
{
    return result.toUpperCase();
}
}



