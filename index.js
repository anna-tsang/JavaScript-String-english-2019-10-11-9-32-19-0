// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
console.log(name.toUpperCase());


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var sentenceList = sentence.split(" ");
for (var i = 0; i < sentenceList.length; i++) {
    sentenceList[i] = sentenceList[i].charAt(0).toUpperCase() + sentenceList[i].slice(1);
}
var sentenceList2 = sentenceList.join(" ");
console.log(sentenceList2);


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
var dollar;
dollar = money.split("￥")[1];
console.log(dollar);