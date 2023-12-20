document
  .getElementById("btn-triangle-calculate")
  .addEventListener("click", function () {
    const triangleBaseField = document.getElementById("triangle-base");
    const triangleBaseString = triangleBaseField.value;
    const triangleBase = parseFloat(triangleBaseString);
    console.log(triangleBase);

    const triangleHeightField = document.getElementById("triangle-height");
    const triangleHeightString = triangleHeightField.value;
    const triangleHeight = parseFloat(triangleHeightString);
    console.log(triangleHeight);

    const correctInputValue = document.getElementById("empty-input");
    if (
      (isNaN(triangleBase) && isNaN(triangleHeight)) ||
      isNaN(triangleBase) ||
      isNaN(triangleHeight)
    ) {
      correctInputValue.style.display = "block";
    } else {
      const triangleAreaField = document.getElementById("triangle-area");
      const triangleAreaString = triangleAreaField.innerText;
      const triangleArea = parseFloat(triangleAreaString);
      const triangleAreaTotal = 0.5 * triangleBase * triangleHeight;
      triangleAreaField.innerText = triangleAreaTotal;

      triangleBaseField.value = "";
      triangleHeightField.value = "";
    }
  });
