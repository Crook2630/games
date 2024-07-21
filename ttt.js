const btn=document.querySelectorAll('.pbtn');
const winPatters=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];
btn.forEach(button => {
    button.addEventListener('click' , ()=> play(button));
});
let turnx=true;
function play(button){
    if(turnx){
        button.innerText=`X`;
        button.disabled=true;
        turnx=false;
    }else{
        button.innerText=`O`;
        button.disabled=true;
        turnx=true;
    }
    determineWinner();
}
function determineWinner(){
    for(let i of winPatters){
        let pos1val=btn[i[0]].innerText;
        let pos2val=btn[i[1]].innerText;
        let pos3val=btn[i[2]].innerText;
    if(pos1val!='' && pos2val!='' && pos3val!=''){
        if(pos1val===pos2val && pos2val===pos3val){
            document.querySelector('.result-div').innerText=`Winner is ${pos1val}`;
            btn.forEach(button =>{
                button.disabled=true;
            });
        }
    }
}
document.querySelector('.js-reset-button').addEventListener('click' , ()=> resetGame())
function resetGame(){
    btn.forEach(button =>{
        button.disabled=false;
        button.innerText=``;
        document.querySelector('.result-div').innerText=``;
    })
}
}
