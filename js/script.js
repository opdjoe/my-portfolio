function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here
    showPopup(true);

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}

// Function to toggle the responsive class on the top navigation bar
function myFunction() {
  var x = document.getElementById("myTopnav");
  // Using getElementsByClassName to select the first element with the class "fa fa
  var icon = document.getElementsByClassName("fa fa-bars")[0];
  // Toggle the icon class to change the icon when clicked
  if (x.className === "topdiv") {
    x.className += " responsive";
    icon.classList.replace("fa-bars", "fa-close");
    // console.log(icon.className)
  } else {
    x.className = "topdiv";
    // Change the icon back to bars when the menu is closed
    var icon = document.getElementsByClassName("fa fa-close")[0];
    icon.classList.replace("fa-close", "fa-bars");
    // console.log(icon.className)
  }
}