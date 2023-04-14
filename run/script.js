var u = window.location.href.split("?").pop();
const content_var = decodeURI(u);
console.log(content_var);
document.getElementById("cont-box").innerHTML = content_var
