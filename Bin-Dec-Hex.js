<!DOCTYPE html>
<html>
 <body>
  <style>
   input[type='text'] {text-transform:uppercase;} 
  </style>
   <form action="">
     <p><label for="decimal">Décimal&#160;: </label> <input type="text" id="decimal" name="decimal" >
     <input type="button" name="submit1" value="&#8674;" onClick="xdecimal();"></p>
 
     <p><label for="hexadecimal">Hexadécimal&#160;: </label> <input type="text" id="hexadecimal" name="hexadecimal">
     <input type="button" name="submit2" value="&#8674;" onClick="xhexadecimal();"></p>
 
     <p><label for="hexadecimal">Binaire&#160;: </label> <input type="text" id="binaire" name="binaire">
     <input type="button" name="submit3" value="&#8674;" onClick="xbinaire();"></p>
   </form>
  <script>
     function xdecimal(){
          decimal = document.getElementById("decimal");
          hexadecimal = document.getElementById("hexadecimal");
          binaire = document.getElementById("binaire");
          hexadecimal.value = (decimal.value-0).toString(16);
          binaire.value = (decimal.value-0).toString(2);
                       }
     function xhexadecimal(){
          decimal = document.getElementById("decimal");
          hexadecimal = document.getElementById("hexadecimal");
          binaire = document.getElementById("binaire");
          decimal.value = parseInt(hexadecimal.value,16);
          binaire.value = (parseInt(hexadecimal.value,16)).toString(2);
                           }
     function xbinaire(){
          decimal = document.getElementById("decimal");
          hexadecimal = document.getElementById("hexadecimal");
          binaire = document.getElementById("binaire"); 
          decimal.value = parseInt(binaire.value,2);
          hexadecimal.value = (parseInt(binaire.value,2)).toString(16);
                      }
   </script>  
 </body>
</html>
