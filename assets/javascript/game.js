$( document ).ready(function() {

       

        var wins = 0;

        var losses = 0;

        var targetNumber = Math.floor(Math.random() * 60) + 45;

        $("#number-to-guess").text(targetNumber);

        var counter = 0;

        // Now for the hard part. Creating multiple crystals each with their own unique number value.

        // We begin by expanding our array to include four options.
        var numberOptions = [
        Math.floor(Math.random() * 3) + 2, 
        Math.floor(Math.random() * 7) + 2, 
        Math.floor(Math.random() * 5) + 2, 
        Math.floor(Math.random() * 15) + 2
        ];




        $("#crystal1").attr("data-crystalvalue", numberOptions[0]);
        $("#crystal2").attr("data-crystalvalue", numberOptions[1]);
        $("#crystal3").attr("data-crystalvalue", numberOptions[2]);
        $("#crystal4").attr("data-crystalvalue", numberOptions[3]);

        $(".crystal").on("click", function () {

            console.log("works")

                    var crystalValue = ($(this).attr("data-crystalvalue"));
                    crystalValue = parseInt(crystalValue);
                    // We then add the crystalValue to the user's "counter" which is a global variable.
                    // Every click, from every crystal adds to the global counter.
                    counter += crystalValue;
                    $("h2 span").text(counter).closest('h2').slideDown();

                    // All of the same game win-lose logic applies. So the rest remains unchanged.
                    //    alert("New score: " + counter);

                    if (counter === targetNumber) {
                        wins ++;
                        alert("you won");
                        counter: 0;
                        reset();

                    }

                    else if (counter >= targetNumber) {
                        losses ++;
                        alert("you lost");
                        counter: 0;
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
        numberOptions = [Math.floor(Math.random() * 3) + 2, Math.floor(Math.random() * 7) + 2, Math.floor(Math.random() * 5) + 2, Math.floor(Math.random() * 15) + 2];

        $("#crystal1").attr("data-crystalvalue", numberOptions[0]);
        $("#crystal2").attr("data-crystalvalue", numberOptions[1]);
        $("#crystal3").attr("data-crystalvalue", numberOptions[2]);
        $("#crystal4").attr("data-crystalvalue", numberOptions[3]);
    }




});