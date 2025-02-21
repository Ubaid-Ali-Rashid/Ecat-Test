var question_bank = [".d1A",".d2B",".d3B",".d4D",".d5B",".d6B",".d7C",".d8C",".d9B",".d10B"]
var skip=[];
var data = "";
var options = [];
var correct = 0;
var not_correct = 0;

var correct = 0;
var correct_count = 0;
function remove(){
    $(".header").css("display","none");
    $(".questions").css("display","block");
}


function save_option(n){
    option = document.getElementById(n);
    option = option.value;
    save_data(option);
}

function save_data(n){
    data = n;
    return data;
}


function Save_Option(){
    options.push(data);
    current_id = options.length;
    current_id = ".d"+current_id.toString();
    $(current_id).css({"display":"none"});
    if(current_id === ".d10"){
            $('.questions').css({"display":"none"});
            $('.result').css({"display":"block"});
            submit();
        }
    next_id = (options.length)+1;
    next_id = ".d"+next_id.toString();
    $(next_id).css({"display":"block"});
}


function submit(){
    for(i=0;i<options.length;i++){
        let correct_pre = correct;
        for(j=0;j<question_bank.length;j++){
            if(options[i] === question_bank[j]){
                correct = correct+4;
                break;
            }
        }
        if(correct === correct_pre){
            not_correct+=1;
        }
    }
    let tot_obt = correct-not_correct;
    $(".result").css({"display":"block"});
    if((tot_obt*100)/40 >= 75){
        document.getElementById('output').innerHTML = "You obtained <br><br>"+tot_obt.toString()+" out of 40.<br><br>Your percentage is "+(tot_obt*100)/40+"<br><br>Great Effert.<br>You are Eligible for admission in UET.";
    }
    else if((tot_obt*100)/40 < 75 && (tot_obt*100)/40 >= 40){
        document.getElementById('output').innerHTML = "You obtained <br><br>"+tot_obt.toString()+" out of 40.<br><br>Your percentage is "+(tot_obt*100)/40+"<br><br>Good. But need more progress.<br>You are Eligible for admission in UET.";
    }
    else{
        document.getElementById('output').innerHTML = "You obtained <br><br>"+tot_obt.toString()+" out of 40.<br><br>Your percentage is "+(tot_obt*100)/40+"<br><br>Unlucky, Need so much effert.<br>You are not Eligible for admission in UET.";
    }
}