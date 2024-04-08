console.log("001");


document.getElementById("goHome").addEventListener('click', () => {
    location.href = "index.html";
});

if(document.getElementById("nfeb")){
    document.getElementById("nfeb").addEventListener('click', () => {
        location.href = "pages/n_feb.html";
    });
}

if(document.getElementById("nmar")){
    document.getElementById("nmar").addEventListener('click', () => {
        location.href = "pages/n_mar.html";
    });
}






