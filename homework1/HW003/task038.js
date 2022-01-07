function halfСhange(myArray){
    const lastElArray = myArray.pop();
    const lastOfLast =  myArray.pop();
    myArray.unshift(lastElArray, lastOfLast);
    return myArray;
}

module.exports = halfСhange;