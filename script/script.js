function hideDiv(element){
    var sibling = element.nextElementSibling; 
    if(sibling.style.display == "none"){
        sibling.style.display = "flex";
    } else {
        sibling.style.display = "none";
    }
}