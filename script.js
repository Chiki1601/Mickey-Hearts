var params = (new URL(document.location)).searchParams;
var from = params.get("from");
var to = params.get("to");
function displayText(content,time){
   if(content.length>0){
  setTimeout(function(){ 
    if(content!=""){
    $(".Text-place").fadeOut(500, function() {
     
        $(this).text(content.shift()).fadeIn(500);
     
    });
    }
    else{
      $(".Text-place").fadeOut(500, function() {
      $(".heart").fadeIn(500);      
    });
    }
  

     displayText(content,3000);
    
  }, time
  
  );
  
   }
}

$("document").ready(function(){
  $(".fromImage").show();
  let content=[]
  if(to==""||from==null){
    to="Rabbit";
    
  }
  if(from==""||from==null){
    from="Mickey";
  }
  content.push("Hello "+to+"!!");
  content.push("I am "+from);
  content.push("I found something");
  content.push("Can you check if it is yours?");
    displayText(content,1500);
});