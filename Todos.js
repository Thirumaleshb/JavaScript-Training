
//Adding Nodes
const formf=document.querySelector(".add")
formf.addEventListener("submit",e=>{
    e.preventDefault();
    if(e.target.add.value.length){
        funcc(e)
        console.log("SomeThing is Happened ")
        formf.reset();
    }
    
    
})


const funcc=function(e){
const ul=document.querySelector('ul')
console.log(ul.children)
console.log("We are Creating the New Content")
const value=`<li class="list-group-item d-flex justify-content-between align-items-center">
<span>${e.target.add.value}</span>
<i class="far fa-trash-alt delete"></i>
</li>`
ul.innerHTML+=value

};

//Deleting Nodes

const deleteul=document.querySelector('ul')
//console.log(deleteul.children)

deleteul.addEventListener("click",e=>{
    e.target.remove()
})
//console.log(deleteul.children)
//deleteul.forEach(item=>{
  //  item.addEventListener("click",e=>{
  //console.log(e.target.parentElement)
   // e.target.remove();
    //})
//});


//Keyup Event

const filterout=(val)=>{
    //console.log(val)
    Array.from(deleteul.children).filter(item=> !item.textContent.toLowerCase().includes(val))
    .forEach(item=>item.classList.add("filtered"));

    Array.from(deleteul.children).filter(item=> item.textContent.toLowerCase().includes(val))
    .forEach(item=>item.classList.remove("filtered"));

    };


const inn=document.querySelector(".search input")
console.log(inn)
inn.addEventListener("keyup",e=>{
    const val=e.target.value.trim().toLowerCase();
    filterout(val)
})
