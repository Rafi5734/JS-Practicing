function reverseString(str) {
    var splitString = str.split("");

    // console.log(splitString);

    // for (const j of splitString) {
    //     console.log(j.reverse());
    // }

    var reverseArray = splitString.reverse();

    var joinArray = reverseArray.join("");

    var splitLetter = joinArray.split(" ");

    var changingLetter = "";

    const updateWord = [];

    for (const i in splitLetter) {
        changingLetter = splitLetter[i].charAt(0).toUpperCase();
        updateWord.push(changingLetter);
    }
    console.log(updateWord);
    console.log(joinArray);
}

reverseString("hello world");
