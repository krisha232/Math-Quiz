player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML= player1_name+":";
document.getElementById("player2_name").innerHTML= player2_name+":";
document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;
document.getElementById("player_question").innerHTML="question turn:"+player1_name;
document.getElementById("player_answer").innerHTML="answer turn:"+player2_name;

function send(){

    get_word=document.getElementById("word").value;
    get_word2=document.getElementById("word2").value;
    answer= parseInt(word)*parseInt(word2);
    word= get_word.toLowerCase();
    word2= get_word2.toLowerCase();
    question="<h4>"+word+"*"+word2+"</h4>";
    input="<br>Answer:<input type='text' id='input_box'>";
    button="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row=question+input+button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
    document.getElementById("word2").value="";
    
}

var question_turn="player1";
var answer_turn="player2";

function check(){

get_answer=document.getElementById("input_box").value;
answer=get_answer.toLowerCase();
if (answer==answer){
    if (answer_turn=="player1"){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }}
    else{
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
        
    }
    if (question_turn=="player1"){

        question_turn="player2"
        document.getElementById("player_question").innerHTML="question_turn:"+player2_name;
    }
    else{
        question_turn="player1"
        document.getElementById("player_question").innerHTML="question_turn:"+player1_name;
    }
    if (answer_turn=="player1"){
answer_turn="player2"
        document.getElementById("player_answer").innerHTML="answer_turn:"+player2_name;
    }
    else{
        answer_turn="player1"
        document.getElementById("player_answer").innerHTML="answer_turn:"+player1_name;
    }
document.getElementById("output").innerHTML="";
}


