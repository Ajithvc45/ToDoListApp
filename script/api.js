function ajax(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            var output = "";
            for(var i=0;i<response.length;i++){
                output += `<br><input type="checkbox" onclick="validation();" id="call">`+response[i].title;
                
            }
            document.getElementById("demo").innerHTML=output;
        }
    }
    
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}


//promise


// let p = new Promise((resolve,reject) =>{
//     if(alert.checked){
//         resolve("success");
//     }else{
//         reject("failed");
//     }
// })

// p.then((message)=>{
//     console.log("This is " + message);
// }).catch((message)=>{
//     console.log("this is " + message);
// })


//check2

// function validation(){
//     if(document.getElementById("call").checked){
//         var x61 = document.getElementById("call").value;
//     }else{
//         var x61 = "";
//     }
//     alert("Helloooo")
// }

var count = 0;
function validation(){
    var box = document.getElementById("call");
    if(box.checked){
        count = count + 1;
        var promise = new Promise((resolve,reject)=> {
            if(count==5){
                resolve("You have successfully completed 5 tasks");
                count = 0;
            }else{
                reject("Not completed 5 tasks");
            }
        })
        promise
        .then(function(s){
            alert(s)
        })
        .catch(function(e){
            console.log(e);
        })
    }else{
        console.log("error occured");
    }
}
