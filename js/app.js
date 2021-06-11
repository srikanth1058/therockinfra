// home.html
var btn1 =  document.getElementById("grid1");
var btn2 =  document.getElementById("grid2");
// document.getElementById("upcoming").style.display = "none";
btn1.addEventListener("click", show_img);
btn2.addEventListener("click", show_img);
function show_img(e){
    var idone = e.target.id
    console.log(idone)
    if (idone === "grid1"){
        document.getElementById("ongoing").style.display = "block";
        document.getElementById("upcoming").style.display = "none";
    }else{
        document.getElementById("ongoing").style.display = "none";
        document.getElementById("upcoming").style.display = "block";
    }
   e.preventDefault(); 
};

    
