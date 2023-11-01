

 var div = document.getElementsByTagName('div');
 var button = document.getElementsByTagName('button');
 var form = document.getElementsByTagName('form')[0];
 form.onsubmit =()=>{return false}

   var current_div = 0;
    div[current_div].style.display = "block";
      if(current_div == 0)
       {
      button[0].style.display = "block";
       }
   button[0].onclick = ()=>{
     current_div++;
           var back_div = current_div-1;
          if ((current_div>0) && (current_div < 2))
          {
              button[0].style.display = "block";
           div[current_div].style.display = "block";
             div[back_div].style.display = "none";
             if (current_div ==1)
      {
        button[0].innerHTML="request a guidance";
     }
          }
          else{
              if(current_div > 2)
             {
                  form.onsubmit =()=>{return true}
             }
        }
     }
