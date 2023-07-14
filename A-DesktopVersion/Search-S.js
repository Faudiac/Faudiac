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

    if (x ==="Ronaldo", "Cristiano Ronaldo","CR7","what is Cristiano Ronaldo's Networth?","what is Cristiano Ronaldo's Religion?") {
      window.open("../Server 3/Server3.html");
    }
 
    if (x === "Lionel Messi", "Messi", "Leo Messi","What is Messi's Networth?", "What is Messi's Religion?") {
      window.open("../Server5/Server5.html");
    }

    else {
      alert("sorry your search wasn't availible")
    }
}
