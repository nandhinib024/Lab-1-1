
    
    
   function calc()
   {
       var o=0;
       var units= parseInt(document.getElementById("unit").value);
       var ch=document.getElementById("c");
       var s=ch.options[ch.selectedIndex];
       if(s.text=="Domestic")
       {
           if(document.getElementById("c2").selectedIndex!=0)
           {
               
               document.getElementById("c2").selectedIndex=0;
           }
           if (units <= 100)
            {
            o= units * 0;
            }
            else if (units <= 200)
            {
             o= (100 * 0)
                + (units - 100)
                      * 1.5;
            }
            else if (units <= 300)
            {
                o= (100 * 0)
                + (100 * 1.5)
                + (units - 200)
                      * 2.0;
            }
            else if (units > 300)
            {
                o= (100 * 0)
                + (100 * 1.5)
                + (100 * 2.0)
                + (units - 300)
                      * 2.5;
            }
            document.getElementById("ans").innerHTML= "Rs."+o;

       }
       else if(s.text=="Commercial")
       {
        if (units <= 100)
        {
           o= units * 10;
        }
        else if (units <= 200)
        {
            o= (100 * 10)
                + (units - 100)
                      * 15;
        }
        else if (units <= 300)
        {
            o= (100 * 10)
                + (100 * 15)
                + (units - 200)
                      * 20;
        }
        else if (units > 300)
        {
            o= (100 * 10)
                + (100 * 15)
                + (100 * 20)
                + (units - 300)
                      * 25;
        }
        if(document.getElementById("c2").selectedIndex==1)
        {
            document.getElementById("ans").innerHTML= "Rs." +o;
        }
        else 
        {
            document.getElementById("ans").innerHTML= "Rs." +o*2;
        
        }

       }


   }