$( document ).ready(function() {

      var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", "Assets/push.mp3");

      var winnerElement = document.createElement("audio");
      winnerElement.setAttribute("src", "Assets/winner.mp3");

      var LoserElement = document.createElement("audio");
      LoserElement.setAttribute("src", "Assets/laugh.mp3");


        var wins = 0;

        var losses = 0;

        var targetNumber = Math.floor(Math.random() * 60) + 45;

        $("#number-to-guess").text(targetNumber);
        console.log(targetNumber)

        var counter = 0;

       

        // array creating random numbers for the crystals
        var numberOptions = [
        Math.floor(Math.random() * 6) + 3, 
        Math.floor(Math.random() * 7) + 2, 
        Math.floor(Math.random() * 5) + 2, 
        Math.floor(Math.random() * 14) + 4
        ];


        $("#crystal1").attr("data-crystalvalue", numberOptions[0]);
        $("#crystal2").attr("data-crystalvalue", numberOptions[1]);
        $("#crystal3").attr("data-crystalvalue", numberOptions[2]);
        $("#crystal4").attr("data-crystalvalue", numberOptions[3]);
        console.log(numberOptions)

        
        $(".crystal").on("click", function () {
                    
                    audioElement.play();

                    var crystalValue = ($(this).attr("data-crystalvalue"));
                    crystalValue = parseInt(crystalValue);
                    
                    counter += crystalValue;
                    $("h2 span").text(counter)

                    
                    //win / loss logic

                    if (counter === targetNumber) {
                        wins ++;
                        winnerElement.play();
                        counter = 0;
                        alert("Math must be your favorite subject!");
                        reset();

                    }

                    else if(counter > targetNumber) {
                        losses ++;
                        LoserElement.play();
                        counter = 0;
                        alert("Try again!");
                        reset();
                    }



                    var temp = document.getElementById("wins-span");
                    temp.textContent = wins;

                    temp = document.getElementById("lose-span");
                    temp.textContent = losses;

        });



    function reset() {
       
        targetNumber = Math.floor(Math.random() * 60) + 45;
        $("#number-to-guess").text(targetNumber);
        counter = 0;
        
        numberOptions = [
        Math.floor(Math.random() * 6) + 3, 
        Math.floor(Math.random() * 7) + 2, 
        Math.floor(Math.random() * 5) + 2, 
        Math.floor(Math.random() * 14) + 4
        ];

        $("#crystal1").attr("data-crystalvalue", numberOptions[0]);
        $("#crystal2").attr("data-crystalvalue", numberOptions[1]);
        $("#crystal3").attr("data-crystalvalue", numberOptions[2]);
        $("#crystal4").attr("data-crystalvalue", numberOptions[3]);
    }




});