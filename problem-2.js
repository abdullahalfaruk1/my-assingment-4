function onlyCharacter(input){
if (typeof input !== "string"){
    return "Invalid";
} 
const result = input.split('').filter(char => char !== ' ').join('');
{
    return result.toUpperCase();
}
}
console.log(onlyCharacter(["hack", "me"]))