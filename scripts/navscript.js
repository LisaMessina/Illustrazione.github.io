function sas(){
    var path = window.location.pathname;
    var page = path.split("/").pop().replace(".html", "");
    console.log( page );
    var prev = document.getElementsByClassName("active");
    prev.className = "";
    var current = document.getElementById(page);
    current.className = "active";
    //var home = document.getElementById("home");
    //var artisti = document.getElementById("artisti");
    //var mostra = document.getElementById("mostra");
    //var info_utili = document.getElementById("info utili");
    //home.className = "";
    //artisti.className = "active";
    //mostra.className = "";
    //info_utili.className = "";
  }