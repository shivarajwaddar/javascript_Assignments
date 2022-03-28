let count=0;

document.querySelector('#addtodo').onclick = function() {

    let input =document.querySelector('#todoinput').value;
    if(input.lenght ===0) {
        alert("please enter a task");
    } else {
        document.querySelector('.todos').innerHTML += `
        <p key=${count}>
            <span class="task">${input}</span>
        </p>
        `;
        count++

        let currentTask=document.querySelectorAll('.task');
        for(let i=0; i< currentTask.length; i++){
            currentTask[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}