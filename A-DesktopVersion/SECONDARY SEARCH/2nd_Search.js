function openPage_2() {
    var x = document.getElementById("Secondary_SEARCH").value;

    if (x === "Home") {
        window.open("searchbrowser.html");
    }

    if (x === "Art works") {
        window.open("arts.html");
    }

    if (x === "Faudiax") {
      window.open("https://faudiac.github.io/Faudiax/");
    }

    if (x === "Faudynews") {
      window.open("https://faudiac.github.io/OfficialFaudyNEWS/");
    }


    if (x === "Services ads") {
        window.open("services/ads .html");
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



function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
  /*An array containing all the country names in the world:*/
  var countries = [ 

    "Home", "Demo news", "Services ads" ,"Art works", 

    /* People Biographies */

    "Albert Einestine",

    "Ronaldo", "Cristiano Ronaldo","CR7","what is Cristiano Ronaldo's Networth?",
    "what is Cristiano Ronaldo's Religion?",

    "Lionel Messi", "Messi", "Leo Messi","What is Messi's Networth?", "What is Messi's Religion?",

    "Pele'",


    /* Studying */

    "Algebra","Biology","Space",


    /* Meme's */

    "bruh", "bruhmeme","bruhmemegang","brumeme",


    /* Sports */

    "chess", "Chessboard.fau", "How to win a game of chess?", "How to Play chess?",
    
    /* Animals */

    "donkey","dog", "Elephant",

    /* Faudiax */
    
    "Faudynews", "Faudiax", "FauHathim", "Fauditube",
    "FaudiBrowser1.fau", "Faudiac", "FauPlay", "Founder of Faudiax",
    
    "How to do Algebra?", 
    
        , "PSG VS AL NASR",  "Winston Churchill", "What is Space?", "Surah Fathiha / fauhathim", "Surah Mulk / fauhathim", "Surah Ikhlas / fauhathim", "Surah falaq / fauhathim"
     ,"Surah Nas/ fauhathim", "What is Pele's Nationality?", "What is Biology?",  "When was Algebra invented?", 
     "When was Astronomy invented?", "Who made Algebra?", "Who is Albert Einestine?", "Who is the father of Biology?", "who is the goat of chess?", "Who is Ronaldo?", "Who is Messi?",
     "Who is Pele'?", "Who is sir Winston Churchill?", "Who is the father of Astronomy", "Youtube.com", "@Faudiac& (Cmd; make me laugh)",
    
    ]
  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  autocomplete(document.getElementById("Secondary_SEARCH"), countries);