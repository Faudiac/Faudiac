function openPage() {
  var x = document.getElementById("mySearch").value;

  if (x === "Home") {
    window.open("index.html");
  }

  if (x === "Albert Einestine") {
    window.open("./servesbackup/server8.html");
  }

  if (x === "Algebra") {
    window.open("./servesbackup/server7.html");
  }

    if (x === "Biology") {
    window.open("./server6/server6.html");
  }

  if (x === "Ronaldo") {
     window.open("server3/Server3.html");
  }

  if (x === "Cristiano Ronaldo") {
    window.open("server3/Server3.html");
  }
  
  if (x === "Faudynews") {
    window.open("https://faudiac.github.io/OfficialFaudyNEWS/");
  }

  if (x === "Faudiax") {
    window.open("https://faudiac.github.io/Faudiax/");
  }

  else {
    alert("Sorry Your Search is not Availible try searching something else!." )
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
 
       "Albert Einestine","Algebra","Algebra","Biology","bruh", "bruhmeme","bruhmemegang","brumeme","Bunnies on Sale!! (Recent News)",
       "chess", "Cristiano Ronaldo", "Ronaldo", "Chessboard.fau","donkey","dog", "Elephant","Faudy News.fau", "Faudiax", "FauHathim", "Fauditube.fau",
       "FaudiBrowser1.fau", "Faudiac", "FauPlay", "Founder of Faudiax", "Faudiac (Test build)", "How to win a game of chess?", "How to Play chess?"
       , "How to do Algebra?", "Lioenel Messi", "Messi", "Leo Messi", "Pele'", "PSG VS AL NASR", "Space", "Winston Churchill","what is Cristiano Ronaldo's Networth?",
        "what is Cristiano Ronaldo's Religion?", "What is Space?", "Surah Fathiha / fauhathim", "Surah Mulk / fauhathim", "Surah Ikhlas / fauhathim", "Surah falaq / fauhathim"
        ,"Surah Nas/ fauhathim", "What is Pele's Nationality?", "What is Biology?", "What is Messi's Networth?", "What is Messi's Religion?", "When was Algebra invented?", 
        "When was Astronomy invented?", "Who made Algebra?", "Who is Albert Einestine?", "Who is the father of Biology?", "who is the goat of chess?", "Who is Ronaldo?", "Who is Messi?",
        "Who is Pele'?", "Who is sir Winston Churchill?", "Who is the father of Astronomy", "Youtube.com", "@Faudiac& (Cmd; make me laugh)",
    ];
  
  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  autocomplete(document.getElementById("mySearch"), countries);
 
 