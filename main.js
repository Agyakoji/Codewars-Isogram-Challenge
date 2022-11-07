//Implement a function that determines whether a string that contains only letters is an isogram,
//having your final answer as TRUE or FALSE.
//Assume the empty string is an Isogram and ignore letter case 
// NB: An Isogram is a word that has no repeating letters, consecutive or non-consecutive.

                // Explanation
// Parameter: str
// Return: true/False
// Example:console.log('moses') = false & 'thomas' = true
// Pseudo-code://1.Decalre a function taking a string value, convert the string into either lower or uppercase to ignore the casing
              //2.split the string letters into individual elements
             //3.Compare individual elements, checking for a match

            //  Solution
function isIsogram(str){
    str = str.toLowerCase()
    return str.split('').every((x,i) => str.indexOf(x) === i)
} 
alert(isIsogram('Val'))


                // Using For Loop
// function isIsogram(str){
    // let i, j;
//     str = str.toLowerCase()
//     for(let i = 0; i < str.length; i++){
//         for(let j = i + 1; j < str.length; j++){
//             if(str[i] === str[j]){
//                 return false
//             }else{
//                 return true
//             }
//         }
//     }
// }
// alert(isIsogram('val'))


// function isIsogram(str){
//     return new Set(str.toLowerCase()).size == str.length
// }
// console.log(isIsogram('MoSeS'))  