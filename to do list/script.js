document.querySelector('#push').onclick=function(){
    if(document.querySelector('#newtask input').value.length==0){
        alert("plese enter a task")
    }
    else{
        document.querySelector("#tasks").innerHTML += `<div class="task">
        <span class="taskname">
            ${document.querySelector("#newtask input").value}
        </span>
            <button class="delete">⊘</button>

        </div>`;
    }  
    var currenttask=document.querySelectorAll(".delete")
    for(var i=0;i<currenttask.length;i++){
        currenttask[i].onclick=function(){
            this.parentNode.remove();
        }
    }
    
document.querySelector("#newtask input").value = "";

}
document.querySelector("#newtask input").addEventListener("keypress", function(e){
    if(e.key==="Enter"){
        document.querySelector('#push').click();
    }
});

