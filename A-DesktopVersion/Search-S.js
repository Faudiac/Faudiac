function openPage() {
    var x = document.getElementById("mySearch").value;

    if (x === "Home") {
        window.open("../searchbrowser.html");
    }

    if (x === "Art works") {
        window.open("../arts.html");
    }

    if (x === "Faudiax") {
        window.open("https://faudiac.github.io/Faudiax/");
    }

    if (x === "Faudynews") {
      window.open("https://faudiac.github.io/OfficialFaudyNEWS/");
    }

    if (x === "CR7") {
      window.open("Server 3/Server3.html");
    }
    if (x === "Ronaldo") {
        window.open("Server 3/Server3.html");
    }
    if (x === "Cristiano Ronaldo") {
      window.open("Server 3/Server3.html");
    }

    else {
      alert("sorry your search wasn't availible")
    }
}
