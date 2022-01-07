function spinWords(string) {
  //TODO Have fun :)
    let strSplit = string.split(" ");

    for( let i= 0; i < strSplit.length; i++){
        if(strSplit[i].length >= 5){
            let rev = reverseAString(strSplit[i]);
            strSplit[i] = rev;
        }
    }

    return strSplit.join(" ");
}

function reverseAString(str){
    return str.split("").reverse().join("");
}
