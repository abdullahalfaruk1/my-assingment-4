function onlyCharacter(str){
if (typeof str !== "string"){
    return "Invalid";
} 
const result = str.split('').filter(char => char !== ' ').join('');
{
    return result.toUpperCase();
}
}
// console.log(onlyCharacter("Cy   bar- At  tac k  "))