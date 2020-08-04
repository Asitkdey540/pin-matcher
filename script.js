document.getElementById("matched-pin").style.display = "none";
document.getElementById("unmatched-pin").style.display = "none";
document.getElementById("generate-btn").addEventListener("click", function(){
    var RandomNumber = Math.floor(Math.random() * 9000 + 1000);
 document.getElementById("generate-pin").value = RandomNumber;
   });




function getOutput(){
    return document.getElementById("output-value").value;
}

function printOutput(num){
    if(num == ""){
        document.getElementById("output-value").value = num;
    }
    else{
        document.getElementById("output-value").value = num;
    }
}

var operator = document.getElementsByClassName("operator");
for(var i = 0; i < operator.length; i++){
    operator[i].addEventListener("click", function(){
        if(this.id == "clear"){
            printOutput("");
        }
        else {
            if(this.id == "backspace"){
            var output = getOutput().toString();
            if(output){
                output = output.substr(0, output.length-1);
                printOutput(output);
            }
            
        }
    }
    });
}

var number = document.getElementsByClassName("number");
for(var i = 0; i < number.length; i++){
    number[i].addEventListener("click", function(){
        var output = getOutput();
        if(output!=NaN){
            output = output + this.id;
            printOutput(output);
        }
    });
}





submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", function(){
    generatePin = document.getElementById("generate-pin").value;
    outputValue = document.getElementById("output-value").value;

    if(generatePin == outputValue && outputValue && generatePin != ""){
        document.getElementById("unmatched-pin").style.display = "none";
        document.getElementById("matched-pin").style.display = "block";
    }
    else{
        document.getElementById("matched-pin").style.display = "none";
        document.getElementById("unmatched-pin").style.display = "block";
        tryLeftArea = document.getElementById("try-left").innerHTML;
        decreaseNumber = parseInt(tryLeftArea);
        decreaseNewNum = decreaseNumber - 1;
        document.getElementById("try-left").innerHTML = decreaseNewNum;
    }
    var disableButton = document.getElementById("try-left").innerHTML;
    if(disableButton == 0){
        document.getElementById("submit-btn").disabled = true;
    }

    document.getElementById("output-value").value = '';
})