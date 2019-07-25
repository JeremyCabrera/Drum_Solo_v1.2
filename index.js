
var numberOfDrumButtons = document.querySelector(".drum").length;

for (var i = 0; i< numberOfDrumButtons; i++) {
//Code below "finds" the first button in the document, then it adds an event, listens for the click then calls the method//
document.querySelector("button").addEventListener("click", function(){
  alert("I got clicked");
});
}
