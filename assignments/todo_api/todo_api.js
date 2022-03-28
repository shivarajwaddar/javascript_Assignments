const compbtn=document.querySelector('button#comp');
const pendbtn=document.querySelector('button#pend');
const dcomp=document.getElementById('d_comp');
const dpend=document.getElementById('d_pend');


async function fetchtodo(){
    let res=await fetch('https://jsonplaceholder.typicode.com/todos');
    let data=await res.json();
    let output='';
    compbtn.onclick=function(){
        document.querySelector('.todos').innerHTML="";
        data.forEach(function(todo,index){
            if (todo.completed == true){
                output+=`<p key=${todo.id}>
                ${todo.title}
                </p>`
            }
        })
    dcomp.innerHTML=output;
    dpend.remove();
    }
    pendbtn=onclick = function(){
        data.forEach(function(todo,index){
            if (todo.completed == false) {
                output+=`<p key=${todo.id}>
                ${todo.title}
                </p>`
            }
        })
    dpend.innerHTML=output;
    dcomp.remove();
    }
}
    fetchtodo();