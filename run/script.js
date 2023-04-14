window.addEventListener('message', (event) =>{
    if(event.origin !=="https://EDUCPK.github.io/extensions/vscode/extensions/startup"){
        var u = window.location.href.split("?").pop();
        const content_var = decodeURI(u);
        console.log(content_var);
            
        const blob= new Blob([content_var], {
            type:'text/html'

        });

        const fileurl = URL.createObjectURL(blob);
        window.location.href = fileurl
    }else{
        window.location.href = "https://EDUCPK.github.io/extensions/run?<p>404</p>"
        var u = window.location.href.split("?").pop();
        const content_var = decodeURI(u);
        console.log(content_var);
            
        const blob= new Blob([content_var], {
            type:'text/html'

        });

        const fileurl = URL.createObjectURL(blob);
        window.location.href = fileurl
    }
})

