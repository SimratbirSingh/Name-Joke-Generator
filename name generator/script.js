let names = [" Liam" ,	" Olivia" ,	"Noah" ,
	" Emma" , "Oliver" ,	" Charlotte" ,	
    " Elijah" ,	" Amelia" , " James" ,	
    "Ava" , " William" ," Sophia" ,	
    " Benjamin" ,	" Isabella" , " Lucas" 
    ,"MiaHenry",	"Evelyn", "Theodore", "Harper"]

const name = document.getElementById("name")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")


let nameIndex =0;

const getPreviousName= ()=>{
    if(nameIndex <=0)
    {
        nameIndex = names.length -1
    }
    else { 
        nameIndex--
    }
    name.innerHTML = names[nameIndex]
}

const getNextName = () =>{
    if (nameIndex >= names.length-1)
    {
        nameIndex = 0;
    }
    else{
        nameIndex++
    }
    name.innerHTML = names[nameIndex] 
}
nextBtn.addEventListener("click",getNextName)
prevBtn.addEventListener("click",getPreviousName)

