document.getElementById("output").style.visibility = "hidden";

        document.getElementById("lbs-input").addEventListener('input', function (e) 
        {
            document.getElementById("output").style.visibility = "visible";

            let lbs = e.target.value;
            document.getElementById("gramsOutput").innerHTML = lbs / 0.0022046; //grams

            document.getElementById("kgOutput").innerHTML = lbs / 2.205;  // kilogram

            document.getElementById("ozOutput").innerHTML = lbs * 16;  //ounces 
        })