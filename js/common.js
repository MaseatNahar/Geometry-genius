function handleButtonClick(a, b, c, d, e) {
  console.log(a, b, c, d, e);
  let height = parseFloat(document.getElementById(a).value);
  let base = parseFloat(document.getElementById(b).value);
  let correctInputValue = document.getElementById(e);
  //const parallelogramArea = base * height;
  // document.getElementById(d).innerText = parallelogramArea;

  //For Rectangle
  
  // For parallelogram
  if (c === "parallelogram") {
    if ((isNaN(base) && isNaN(height)) || isNaN(base) || isNaN(height)) {
      correctInputValue.style.display = "block";
      document.getElementById(d).innerText = 0;
    } else {
      const parallelogramArea = base * height;
      document.getElementById(d).innerText = parallelogramArea;
      let node = document.createElement("li");
      let textNode = document.createTextNode(
        "Parallelogram:" + parallelogramArea + "cm²"
      );
      node.appendChild(textNode);
      document.getElementById("calculation-entry").appendChild(node);
      correctInputValue.style.display = "none";
      document.getElementById(a).value = "";
      document.getElementById(b).value = "";
    }
  }
  //for ellipse

  if (c === "ellipse") {
    //const ellipseArea = Math.round( Math.PI * base * height);
    //document.getElementById(d).innerText = ellipseArea;
    if ((isNaN(base) && isNaN(height)) || isNaN(base) || isNaN(height)) {
      correctInputValue.style.display = "block";
      document.getElementById(d).innerText = 0;
    } else {
      const ellipseArea = Math.round(Math.PI * base * height);
      document.getElementById(d).innerText = ellipseArea;
      let node = document.createElement("li");
      let textNode = document.createTextNode("Ellipse:" + ellipseArea + "cm²");
      node.appendChild(textNode);
      document.getElementById("calculation-entry").appendChild(node);
      correctInputValue.style.display = "none";
      document.getElementById(a).value = "";
      document.getElementById(b).value = "";
    }
  }
}
