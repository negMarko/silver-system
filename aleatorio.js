//Define la cantidad de numeros aleatorios.
var numero = function(){
  var cantidadNumeros = document.getElementById("alumnos").value;
  var grupo = document.getElementById("grupo").value;
  var myArray = []
  while(myArray.length < cantidadNumeros ){
    var numeroAleatorio = Math.ceil(Math.random()*(cantidadNumeros*100));
    
    var existe = false;
    
        for(var i=0;i<myArray.length;i++){
            if(myArray [i] == numeroAleatorio){
                  existe = true;
                  break;
              }
          }
          
    if(!existe){
        myArray[myArray.length] = numeroAleatorio;
      }

}
  for(var i=0;i<myArray.length;i++){
    
      if (myArray[i]<1000 & myArray[i]>99) {
        document.write("0" + myArray[i] +grupo+ "<br>");
      }else if (myArray[i]<100 & myArray[i]>9) {
        document.write("00" + myArray[i] +grupo+ "<br>");
      }else if (myArray[i]<10) {
        document.write("000" + myArray[i] +grupo+ "<br>");
      }else{
          document.write(myArray[i] +grupo+ "<br>");
      }
  }
}

