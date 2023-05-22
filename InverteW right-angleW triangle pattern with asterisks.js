const i = 9;

for (let row = i; row >= 1; row--) {
  let star = "";
  for (let col = 1; col <= row; col++) {
    star += "* ";
  }
  console.log(star);
}
