var table = document.getElementById("myTable");
var output = "";

for(var i=1;i<=10; i++){
  output += "<tr>";
  for(var j=1;j <=20; j++){
      if(i==1 && j==1){
          output+="<th>&times;</th>";
      }
      else{

          if(i==1 || j==1){
              output +="<th>" + i*j +"</th>";
          }
          else{
              output +="<td>" + i*j +"</td>";
      

          }
      }
      
  }
  output+= "</tr>"; 
}
table.innerHTML = output;

