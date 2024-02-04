let btn=document.querySelectorAll(".container .btn");
let Xchance=true;
let Ochance=true;
let ischeck=true;
let chance=document.querySelector(".container .chance span");
let hide=document.querySelector(".container .chance");
let won=document.querySelector(".container .msg");
let reset=document.querySelector(".container .reset button")
btn.forEach(event => {
    event.addEventListener("click",()=>{
       if(Xchance)
       {
        event.innerText="X";
        chance.innerText= "O";
        Xchance=false;
        Ochance=true;
       }
       else if(Ochance){
        event.innerText="O";
        chance.innerText= "X";
        Ochance=false;
        Xchance=true;
       }
       event.disabled=true; 
       checkwinner();
    })
});
const winner=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const checkwinner=()=>{
    if(ischeck)
    {
    for(win of winner)
    {
        let input1=btn[win[0]].innerText
        let input2=btn[win[1]].innerText
       let input3= btn[win[2]].innerText
       if(input1!="" && input2!="" && input3!="" && input1==input2 && input2==input3)
       {
        won.style.display="block";
        hide.style.display="none";
        won.innerText="Winner " + btn[win[0]].innerText;
        ischeck=false;
       }
        
    }
}
}
reset.addEventListener("click",()=>{
   
btn.forEach(event => {
    event.innerText="";
    won.style.display="none";
    hide.style.display="block";
    chance.innerText= "X"
    event.disabled=false; 
    reset.style.backgroundColor="green";
    document.documentElement.style.setProperty("--color","green")
});
})