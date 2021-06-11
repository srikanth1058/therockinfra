// floorplans
var plan = document.getElementById("floorplans");

plan.addEventListener("click", function(e){
    
    if(e.target.parentElement.parentElement.className === "col-sm-4 col-lg-2 col-md-2 col-4 plan 1265_SFT_East p-2 text-center mr-2 mb-2"){
        document.getElementById("planimg").src = "ongoing_greenalpha_floorplan_imgs/1265-Sft-East.jpg"
       
    }else if(e.target.parentElement.parentElement.className === "col-sm-4 col-lg-2 col-md-2 col-4 plan 1265_SFT_West p-2 text-center mr-2 mb-2"){
        document.getElementById("planimg").src = "ongoing_greenalpha_floorplan_imgs/1265-Sft-West.jpg"
    }else if(e.target.parentElement.parentElement.className === "col-sm-4 col-lg-2 col-md-2 col-4 plan 1485_SFT_West p-2 text-center mr-2 mb-2"){
        document.getElementById("planimg").src = "ongoing_greenalpha_floorplan_imgs/1485-Sft-West.jpg"
    }else if(e.target.parentElement.parentElement.className === "col-sm-4 col-lg-2 col-md-2 col-4 plan 1655_SFT_East p-2 text-center mr-2 mb-2"){
        document.getElementById("planimg").src = "ongoing_greenalpha_floorplan_imgs/1655-Sft-East.jpg"
    }else if(e.target.parentElement.parentElement.className === "col-sm-4 col-lg-2 col-md-2 col-4 plan 1655_SFT_West p-2 text-center mr-2 mb-2"){
        document.getElementById("planimg").src = "ongoing_greenalpha_floorplan_imgs/1655-Sft-West.jpg"
    }else if(e.target.parentElement.parentElement.className === "col-sm-4 col-lg-2 col-md-2 col-4 plan 1935_SFT_East p-2 text-center mr-2 mb-2"){
        document.getElementById("planimg").src = "ongoing_greenalpha_floorplan_imgs/1935-Sft-East.jpg"
    }else if(e.target.parentElement.parentElement.className === "col-sm-4 col-lg-2 col-md-2 col-4 plan 1935_SFT_West p-2 text-center mr-2 mb-2"){
        document.getElementById("planimg").src = "ongoing_greenalpha_floorplan_imgs/1935-Sft-West.jpg"
    }else if(e.target.parentElement.parentElement.className === "col-sm-4 col-lg-2 col-md-2 col-4 plan 2020_SFT_East p-2 text-center mr-2 mb-2"){
        document.getElementById("planimg").src = "ongoing_greenalpha_floorplan_imgs/2020-Sft-East.jpg"
    }else if(e.target.parentElement.parentElement.className === "col-sm-4 col-lg-2 col-md-2 col-4 plan 2020_SFT_West p-2 text-center mr-2 mb-2"){
        document.getElementById("planimg").src = "ongoing_greenalpha_floorplan_imgs/2020-Sft-West.jpg"
    }else if(e.target.parentElement.parentElement.className === "col-sm-4 col-lg-2 col-md-2 col-4 plan 2030_SFT_West p-2 text-center mr-2 mb-2"){
        document.getElementById("planimg").src = "ongoing_greenalpha_floorplan_imgs/2030-Sft-West.jpg"
    }else if(e.target.parentElement.parentElement.className === "col-sm-4 col-lg-2 col-md-2 col-4 plan 2030_SFT_East p-2 text-center mr-2 mb-2"){
        document.getElementById("planimg").src = "ongoing_greenalpha_floorplan_imgs/2030-Sft-East.jpg"
    }

    e.preventDefault(); 
});

// blockimages
var block = document.getElementById("blocks");
block.addEventListener("click", function(e){
   console.log(e.target.className)
   if(e.target.parentElement.parentElement.className === "col-sm-4 col-lg-2 col-md-2 col-4 plan blocka p-2 text-center mr-2 mb-2"){
    document.getElementById("blockimg").src = "ongoing_greenalpha_block_imgs/YellowFlame-Block-A-231x300.jpg"
   
    }else if(e.target.parentElement.parentElement.className === "col-sm-4 col-lg-2 col-md-2 col-4 plan blockb p-2 text-center mr-2 mb-2"){
        document.getElementById("blockimg").src = "ongoing_greenalpha_block_imgs/GoldenRain-Block-B-300x273.jpg"
    }else if(e.target.parentElement.parentElement.className === "col-sm-4 col-lg-2 col-md-2 col-4 plan blockc p-2 text-center mr-2 mb-2"){
        document.getElementById("blockimg").src = "ongoing_greenalpha_block_imgs/BlueTrumpet-Block-C-300x294.jpg"
    }else if(e.target.parentElement.parentElement.className === "col-sm-4 col-lg-2 col-md-2 col-4 plan blockd p-2 text-center mr-2 mb-2"){
        document.getElementById("blockimg").src = "ongoing_greenalpha_block_imgs/RedMaple-Block-D-262x300.jpg"
    }else if(e.target.parentElement.parentElement.className === "col-sm-4 col-lg-2 col-md-2 col-4 plan blocke p-2 text-center mr-2 mb-2"){
        document.getElementById("blockimg").src = "ongoing_greenalpha_block_imgs/Ritu-Silver-Fir-Block-E-300x294.jpg"
    }else if(e.target.parentElement.parentElement.className === "col-sm-4 col-lg-2 col-md-2 col-4 plan blockf p-2 text-center mr-2 mb-2"){
        document.getElementById("blockimg").src = "ongoing_greenalpha_block_imgs/White-Oak-Block-F-300x300.jpg"
    }
    e.preventDefault(); 
});


// SPECIFICATIONS

// var inputval = document.getElementById("dropicon");
// var data = document.getElementById("structure")
// inputval.addEventListener("click", function(e){
//    if (data.classList.contains('show')){
//       data.style.display = "none";
//       data.classList.remove('show')
//    }else{
//       data.style.display = "block";
//       data.classList.add("show")
//    }
//    e.preventDefault()
// })