function run(){
    var u = window.location.href.split("?").pop();
    const content_var = decodeURI(u);
    console.log(content_var);
    const blob= new Blob([content_var], {
        type:'text/html'});
    const fileurl = URL.createObjectURL(blob);
    window.location.href = fileurl
}
run()
