const content = str(window.location.href).split("?").pop()
const text = content.replace(/%20/g, " ")
console.log(text)
