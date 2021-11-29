/*
function translatePigLatin(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";

    if (vowels.indexOf(str[0]) > -1) {
        newStr = str + "way";
        return newStr;
    } else {
        let firstMatch = str.match(/[aeiou]/g) || 0;
        let vowel = str.indexOf(firstMatch[0]);
        newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
        return newStr;
    }
} */
//user logic
$(document).ready(function(){
    $("#form").submit(function(event){
        event.preventDefault();
    let userInput =$("#word").val();
    let firstLetter= userInput.substring(0,1)
    let remove  = userInput.slice(1)+firstLetter;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";
    if (vowels.indexOf(userInput[0]) > -1) {
        newStr = userInput + "acedu";
        console.log(newStr);  
         
    }

   
  //  $(".word").text(str)
});
});