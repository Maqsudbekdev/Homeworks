pInp.addEventListener("change", () => {
  p.style.fontSize = pInp.value + "px";
});

lInp.addEventListener("change", () => {
  link1.style.fontSize = lInp.value + "px";
  link2.style.fontSize = lInp.value + "px";
});

imgInp.addEventListener("change", () => {
  image.style.height = imgInp.value + "px";
});
lCol.addEventListener("change", () => {
  link1.style.color = lCol.value;
  link2.style.color = lCol.value;
});
