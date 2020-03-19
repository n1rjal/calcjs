
//log like history 
// cannot hold data more than once run
let history=[];

function writeinscreen(x){
    
    console.log("called")
    x=String(x);
    if (x!="AC" && x!="="){
        document.getElementById("screen").innerHTML+=x;
        console.log(x);
    }
    if (x=="AC"){
        document.getElementById("screen").innerHTML="";
        console.log("Clearing");
    }
    if (x=="="){

        try{
            let content=document.getElementById("screen").innerText;
            history.push(String(content));
            content=content.replace("x","*");
            console.log(content);
            
            let processedcontent=eval(content);
            document.getElementById("screen").innerHTML+=" = "+processedcontent;

            setTimeout(function(){
                document.getElementById("screen").innerHTML="";
            },1500);

        }
        catch(err){
            
            document.getElementById("screen").innerHTML="SYNTAX ERROR!"
            console.log(err);
            setTimeout (function(){
                document.getElementById("screen").innerHTML="";
            },1500)

        }
    }
}

//pointer like in database in python 
let pointer=history.length
function showhistory(x){
    
    document.getElementById("screen").innerHTML="";
    if (x=="UP"){
        pointer--;
    }
    if (x=='DOWN'){
        pointer++;
    }
    if (pointer>history.length){
        pointer=0;
    }
    if (pointer<0){
        pointer=history.length;
    }
    if (history[pointer]!=undefined){

        document.getElementById("screen").innerHTML=history[pointer];
    }
    setTimeout(() => {
        document.getElementById("screen").innerHTML=""
    }, 2000);
}