function colorMix(color1, color2) {
  let result;

  switch (color1) {
    case "red":
      if (color2 == "blue") {
        result = "purple";
      } else if (color2 == "yellow") {
        result = "orange";
      } else {
        result = "Invalid color combination";
      }
      break;
    case "blue":
      if (color2 == "red") {
        result = "purple";
      } else if (color2 == "yellow") {
        result = "green";
      } else {
        result = "Invalid color combination";
      }
      break;
    case "yellow":
      if (color2 == "red") {
        result = "orange";
      } else if (color2 == "blue") {
        result = "green";
      } else {
        result = "Invalid color combination";
      }
      break;
    default:
      result = "Invalid color combination";
  }

  console.log(result);
}


colorMix ("red","blue")