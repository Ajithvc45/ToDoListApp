function ajax(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            var output = "";
            for(var i=0;i<response.length;i++){
                output += `<br><input type="checkbox">`+response[i].title;
                
            }
            document.getElementById("demo").innerHTML=output;
        }
    }
    
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}


//promise

// let p = new Promise((resolve,reject) =>{
//     if(output.value>=5){
//         resolve("success");
//     }else{
//         reject("failed");
//     }
// })

// p.then((message)=>{
//     console.log("This is " + message);
// }).catch((message)=>{
//     console.log("this is " + messagez);
// })