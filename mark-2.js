



const n=require("readline-sync")
var name=n.question("Enter your name")
console.log("Welcome"+name+"You know Biology Game.")

var score=0
function introduction(question,answer){
    const usrename=n.question(question)
    if(usrename.toUpperCase()===answer.toUpperCase()){
        console.log("right your answer")
        score+=1
        console.log("score is ",+score)
    }else{
        console.log("wrong your answer.")
        score-=1
    }
}
var question=[{
    question:"Largest gland in the human body??",
    answer:"Liver",
},{
    question:"In which part of the body food gest absorbed::",
    answer:"Small Intestine",
},{
    question:"another name of windpipe??",
    answer:"Trachea"
},{
    question:"In human body where is PITUTARY GLANG located??",
    answer:"Brain"
},{
    question:"How many bones present in human ear??",
    answer:"6 bones"
},{
    question:"How many type of teeth present in human body??",
    answer:"4"
},{
    question:"How many temporary teeth in human body??",
    answer:"20"
}]

for(var i=0;i<question.length;i++){
    let  Question=question[i]
    introduction(Question.question,Question.answer)
}
console.log("your total score is",+score)
console.log(":I HOPE ARE YOU INJOY IN THIS GAME:")