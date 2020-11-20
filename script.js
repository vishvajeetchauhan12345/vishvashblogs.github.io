var Slideindex=0;
myidentity();
function myidentity()
{
    var Slides=document.getElementsByClassName("myslides");
    var i;
    for(i = 0; i < Slides.length;i++)
    {
        Slides[i].style.display="none";
    }
    Slideindex++;
    if(Slideindex > Slides.length)
      {
          Slideindex=1;
      }
      Slides[Slideindex-1].style.display="flex";
      setTimeout(myidentity,5000);
}

function myCategory(){
    alert("hello");
    var store=documnet.getElementById("search").value;
    if(store=="EDUCATION"){
        document.getElementById("card1").style.visibility="visible"; alert("hello education");
        document.getElementById("card1").style.display="flex";
    }
    else if( store=="Quize Certificate")
    {
        document.getElementById("card2").style.Visibility="visible"; 
        document.getElementById("card2").style.display="flex";  
    }
    else if( store=="Certificate")
    {
        document.getElementById("card3").style.Visibility="visible";  
        document.getElementById("card3").style.display="flex"; 
    }
    else if( store=="PROGRAMMING")
    {
        document.getElementById("card4").style.Visibility="visible";  
        document.getElementById("card4").style.display="flex"; 
    }
    else if( store=="IT SECTOR Certificate")
    {
        document.getElementById("card5").style.Visibility="visible";   
        document.getElementById("card5").style.display="flex";
    }
    else{
        document.getElementById("category-card-1").style.Visibility="hidden";
        document.getElementById("category-card-2").style.Visibility="hidden";
        document.getElementById("category-card-3").style.Visibility="hidden";
        document.getElementById("category-card-4").style.Visibility="hidden";
        document.getElementById("category-card-5").style.Visibility="hidden";

        document.getElementById("card1").style.display="hidden";
        document.getElementById("card2").style.display="hidden";
        document.getElementById("card3").style.display="hidden";
        document.getElementById("card4").style.display="hidden";
        document.getElementById("card5").style.display="hidden";
    }
    alert("end");
}

