var u = window.location.href.split("?").pop();
const content = decodeURI(u);
console.log(content);
document.getElementById("cont-box").innerHTML = content
