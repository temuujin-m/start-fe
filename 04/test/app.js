// Function to change the content of t2
function modifyText() {
    const t2 = document.getElementById("t2");
    if (t2.firstChild.nodeValue == "three") {
      t2.firstChild.nodeValue = "two";
    } else {
      t2.firstChild.nodeValue = "three";
    }
  }
  
  // Add event listener to table
  const el = document.getElementById("outside");
  el.addEventListener("click", modifyText, false);
  