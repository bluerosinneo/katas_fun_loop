(function(){
    window.onload = function(){


        // 1:sum
        function sum(a,b){
            return a + b;
        }
        // console.log("1:sum(a,b)");
        // console.log(sum(5, 9)); // return 14
        // console.log(sum(5, 4)); // return 9



        // 2:avg
        // average of three 
        function avg(a,b,c){
            return  (a+b+c)/3;
        }
        // console.log("2:avg(a,b,c)");
        // console.log(avg(1, 5, 9)); // returns 5
        // console.log(avg(4, 4, 4)); // returns 4
        // console.log(avg(10, 4, 1)); // returns 5



        // 3:greaterThan
        // returns true if second number is greater
        // otherwise false
        function greaterThan(a, b){
            if(b > a){
                return true;
            }
            else{
                return false;
            }

        }
        // console.log("3:greaterThan(a,b)");
        // console.log(greaterThan(5, 6)); // returns true
        // console.log(greaterThan(4, 1)); // returns false



        // 04:secondLargest
        // get the second largest element of an array
        // note that if there are multiple largest instances
        // the function will attempt to get a value that is smaller
        // than the largest
        function secondLargest(aBar){
            if(aBar.length > 2){
                // keep a running idea of what the
                // first and second largest number is
                let firstLargest = aBar[0];
                let secondLargest = 0;

                // initialize the first and second largest
                // based on the first two array elements
                firstLargest = aBar[0];
                if (firstLargest > aBar[1]){
                    secondLargest = aBar[1];
                }
                else{
                    secondLargest = firstLargest;
                    firstLargest = aBar[1];
                }

                // iterate the rest of the array
                // update first and second largest as we go
                for(let i = 1; i < aBar.length; i++){
                    if (aBar[i] > firstLargest){
                        secondLargest = firstLargest;
                        firstLargest = aBar[i];
                    }
                    else if(aBar[i] > secondLargest){
                        secondLargest = aBar[i];
                    }
                }

                return secondLargest;
            }
        }
        // console.log("4:secondLargest");
        // console.log(secondLargest([1, 4, 5, 8])); // returns 5
        // console.log(secondLargest([8, 3, 5, 1, 9, 10])); // returns 9



        // 05: containsVowel
        // return true if an inputted string contains a vowel
        function containsVowel(word){
            // string that has all the vowels
            // never y!
            let vowelString = "aeiou";

            // start out assuming that word contains no vowels
            let hasVowel = false;

            // check if any of the vowels contained in
            // vowelString are in the word
            for(let i = 0; i < vowelString.length; i++){
                // only make a change to hasVowel
                // if it is determined that the word
                // contains a vowel
                if(word.indexOf(vowelString[i]) != -1){
                    hasVowel = true;
                }
            }
            return hasVowel;
        }
        // console.log("05: containsVowel");
        // console.log(containsVowel('alpha')); // returns true
        // console.log(containsVowel('hmph')); // returns false



        // 06: piglatin
        // note that this will not account for capital letters
        function piglatin(theString){
            // vowel object wtih keys as vowels
            // values are not used
            let vowelObject = {
                "a": 1,
                "e": 1,
                "i": 1,
                "o": 1,
                "u": 1,
            };
            
            // build the translation in pigLatinString  
            let pigLatinString = "";

            // split the input into an array of seperate words
            let wordArray = theString.split(" ");

            // iterate over each word
            for(let i = 0; i < wordArray.length; i++){
                let word = wordArray[i]; // readability
                let leadConsonants = ""; // house leading consonants
                let restWord = ""; // house rest of word

                // get the leading consonants
                let j = 0; // to track leading consonants
                while((j<word.length) && !(word[j] in vowelObject)){
                    leadConsonants = leadConsonants + word[j];
                    j = j + 1;
                }

                // if found leading consonants move to end of word and then add
                // "ay"
                // otherwise just add "yay" to the end of the word
                if(leadConsonants.length > 0){
                    // get rest of words after starting consonants
                    restWord = word.substring(j);
                    pigLatinString = pigLatinString + restWord + leadConsonants + "ay";
                }
                else{
                    pigLatinString = pigLatinString + word + "yay";
                }

                // add spaces inbetween words
                if(i != wordArray.lenght-1){
                    pigLatinString = pigLatinString + " ";
                }
            }

            return pigLatinString;
        }
        // console.log("06: piglatin");
        // console.log(piglatin('good day')); // returns 'oodgay ayday'
        // console.log(piglatin('come now')); // returns 'omecay ownay'
        // console.log(piglatin('i had fish')); // returns 'iyay adhay ishfay'



        // 07: longestWord
        // find the longest word from a string of words (sentence)
        function longestWord(theString){
            let wordArray = theString.split(" ");
            
            let maxWordLength = 0;
            let maxWord = "";

            for(let i = 0; i < wordArray.length; i++){
                if(wordArray[i].length > maxWordLength){
                    maxWordLength = wordArray[i].length;
                    maxWord = wordArray[i];
                }
            }

            return maxWord;
        }
        // console.log("07: longestWord");
        // console.log(longestWord('have you ever seen a penguin go to tea?')); // returns 'penguin'
        // console.log(longestWord('fool me once, shame on me. fool me twice, shame on heathcliff')); // returns 'heathcliff'



        // 08: weave
        // replace every nth location of a string with 'x'
        // assumes that n=0 is invalid
        function weave(theString, n){
            // split the string into an array of characters
            let charArray = theString.split('');
            // start my count acounting for 0 based indexing 
            let myCounter = n-1;
            // while (m*n-1)(as m varies) is less than the length
            // of the string
            // update the array as we go
            while(myCounter < theString.length){
                charArray[myCounter] = "x";
                myCounter = myCounter + n;
            }
            // returned the joined array
            return charArray.join('');
        }
        // console.log("08: weave");
        // console.log(weave('hi how are you', 2)); // returns 'hx xox xrx xox'
        // console.log(weave('im terrible, go away', 5)); // returns 'im txrribxe, gx awax'



        // 09: tip
        // takes a number value and calculates a tip that
        // calculates a 20% tip
        // as well as making sure the total
        // amount paid (bill + tip) is a whole number
        // the output is the tipping amount
        function tip(bill){
            let baseTip = bill*0.2;
            let ceilingTotalBill = Math.ceil(bill + baseTip);
            let actualTip = ceilingTotalBill - bill;
            return actualTip;
        }
        // console.log(tip(57)); // returns 12
        // console.log(tip(32)); // returns 7
        // console.log(tip(20.5)); // retunrs 4.5 note that 20.5*0.5 = 4.1 but 20.5+4.5 = 25 (whole number)



        // 10: multiples
        // retunrs numbers from [1,100] that has factors from two different inputs
        function multiples(a, b){
            let result = [];
            for(let i = 1; i <= 100; i++){
                let aBool = false;
                let bBool = false;
                
                // if a is a factor note it
                if(i%a == 0){
                    aBool = true;
                }
                // if b is a factor note it
                if(i%b == 0){
                    bBool = true;
                }
                
                // if a and b werer both factors note it
                if(aBool && bBool){
                    result.push(i);
                }
            }
            // return all the numbers that have both factors a and b
            return result;
        }
        // console.log("10: multiples");
        // console.log(multiples(3,5)); // returns [15, 30, 45, 60, 75, 90]
        // console.log(multiples(7,12)); // returns [84]



        // 11: blackjack
        // takes an array and determins the result of a blackjack game
        function blackjack(cardAray){
            // card value object
            // note that the default for the value of an A will be 11
            let cardValues = {
                1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7,
                8:8, 9:9, 10:10,
                "K":10, "Q":10, "J":10, "A":11
            };

            // keep track of a running total of aces (that are being valued at 11 points)
            // keep a running total of total points
            let aceCount = 0;
            let pointCount = 0;

            // iterate over the cardAray
            for(let i = 0; i < cardAray.length; i++){
                // keep track of how many aces we have found
                // note that this count represents the number of acces
                // that contribute 11 points
                if(cardAray[i] == 'A'){
                    aceCount = aceCount + 1;
                }
                // if the card is a valid card
                // add the appropriate points to a running total
                if(cardAray[i] in cardValues){
                    pointCount = pointCount + cardValues[cardAray[i]];
                }
                // if we are overr 21 and have had some acces
                // treat the points for 1 of the A to be 1 point instead
                // update the aceCount
                if((pointCount>21) && (aceCount>0)){
                    pointCount = pointCount - 10;
                    aceCount = aceCount - 1;
                }
            }

            // ifs that return the results of the game
            if(pointCount > 21){
                return "bust";
            }
            if(pointCount == 21){
                return "blackjack";
            }
            if(pointCount < 21){
                return pointCount;
            }

        }
        // console.log("11: blackjack");
        // console.log(blackjack(['J', 3, 4, 5, 6])); // returns "bust"
        // console.log(blackjack(['J', 'Q', 'A'])); // returns "blackjack"
        // console.log(blackjack(['J', 3, 4, 'A'])); // returns 18
        // console.log(blackjack(['K', 'A'])); // returns "blackjack"



        // 12: divisors
        // return factors of input
        function divisors(theNumber){
            let resultArray = [];
            for(let i = 0; i <= theNumber; i++){
                if(theNumber%i == 0){
                    resultArray.push(i);
                }
            }
            return resultArray;
        }
        // console.log("12: divisors");
        // console.log(divisors(9)); // returns [1, 3, 9]
        // console.log(divisors(17)); // returns [1, 17]
        // console.log(divisors(92)); // returns [1, 2, 4, 23, 46, 92]



        // 13: hamming
        // if two strings are of the same length
        // count the number of characters that share the same positions
        // utherwise return false
        function hamming(stringOne, stringTwo){
            // retun false if the two strings are not of the same length
            if(stringOne.length != stringTwo.length){
                return false;
            }
            else{
                // start a count for matching characters
                let matchiangCount = 0;
                // iterate on matching character locations
                // if the characters match add to the counter
                for(let i = 0; i < stringTwo.length; i++){
                    if(stringOne[i] == stringTwo[i]){
                        matchiangCount = matchiangCount + 1;
                    }
                }
                return matchiangCount;
            }
        }
        // console.log("13: hamming");
        // console.log(hamming('yatin','thang')); // returns 0
        // console.log(hamming('hello','hello')); // returns 5
        // console.log(hamming('hello','hewwo')); // returns 3
        // console.log(hamming('hello','helloo')); // returns false



        // 14: pokemon
        // takes an array of counts per day
        // return an array that returns a running total off all counts
        // of that day and of lower days
        function pokemon(catchArray){
            // variables for running total array
            // as well as a running total count
            let runningTotalCatchArray = [];
            let runningCount = 0;

            // as we go through the array
            // update the runningCount
            // and append that runningCount to the
            // array keeping track of the running total thus far
            for(let i = 0; i < catchArray.length; i++){
                runningCount = runningCount + catchArray[i];
                runningTotalCatchArray.push(runningCount);
            }

            return runningTotalCatchArray;
        }
        // console.log("14: pokemon");
        // console.log(pokemon([1, 2, 5, 1, 3])); // returns [1, 3, 8, 9, 12]



        // 15: find
        // make a function like Array.indexOf()
        // should be like find(Array, number)
        function find(numberArray, targetNumber){
            for(let i = 0; i < numberArray.length; i++){
                if(numberArray[i] == targetNumber){
                    return i;
                }
            }
            return "Not found";
        }
        // console.log("15: find");
        // console.log(find([1,2,3,4], 3)); // returns 2
        // console.log(find([4,4,4,4], 4)); // returns 0
        // console.log(find([1,2,2,4], 3)); // returns 'Not found'



        // 16: Map
        // map an array of values from an array to a resulting array
        // based on a passed function
        function map(inputArray, funFunction){
            let exportArray = [];
            for(let i = 0; i < inputArray.length; i++){
                exportArray.push(funFunction(inputArray[i]));
            }
            return exportArray;
        }
        // console.log("16: Map");
        // console.log(map([1,2,3],function(a){return a})); // returns [1, 2, 3]
        // console.log(map([3,2,1],function(a){return a+2})); // returns [5, 4, 3]
        // console.log(map([0,2,4],function(a){return a*4})); // returns [0, 8, 16]



        // 17: filter
        // return a subset array of elements that return true from
        // a passed function
        function filter(inputArray, funFunction){
            let exportArray = [];
            for(let i = 0; i < inputArray.length; i++){
                if(funFunction(inputArray[i])){
                    exportArray.push(inputArray[i]);
                }
            }
            return exportArray;
        }
        // console.log("17: filter");
        // console.log(filter([1,2,3,4], function(a){return a%2===0})); // returns [2, 4]
        // console.log(filter([1,2,3,4], function(a){return a%2===1})); // returns [1, 3]

        

        // 18: sprint
        // return the name of the runner with the fastest run time
        // input is an array of objects in the form {'name': someName, 'time': someTime}
        // a smaller time indicates a faster runner
        function sprint(objectArray){
            // keep track of the fastest runner as well as their time
            // asuming that no one can have a run time of 0 seconds
            let fastestRunner = "";
            let fastestTime = 0;
            for(let i = 0; i < objectArray.length; i++){
                // store the current runner object in a variable
                // this is for readability
                let runner = objectArray[i];

                // if the current fastestTime is 0
                // take the current runner as the fastest
                // otherwise compare the current runner's time
                // with what the current run time is
                // update where apropriate
                if(fastestTime == 0){
                    fastestTime = runner['time'];
                    fastestRunner = runner['name'];
                }
                else if(fastestTime > runner['time']){
                    fastestTime = runner['time'];
                    fastestRunner = runner['name'];
                }
            }
            return fastestRunner;
        }
        // console.log("18: sprint");
        // console.log(sprint([{'name':'jo','time':1},{'name':'job','time':2},{'name':'jon','time':3}])); // returns 'jo'
        // console.log(sprint([{'name':'ann','time':3},{'name':'tina','time':1},{'name':'dog','time':2}])); // returns 'tina'



        // 19: scrabble
        // return the value of a scrable play
        // a string of the word playyed will be passed
        // as well as an object of the point value of the letters played in the word
        function scrabble(playedWord, letterValueObject){
            // keep a running total of the points
            let pointTotal = 0;
            // for each letter in playedWord
            // add up all the points
            // based on the letterValueObject
            for(let i = 0; i < playedWord.length; i++){
                pointTotal = pointTotal + letterValueObject[playedWord[i]];
            }
            return pointTotal;
        }
        // console.log("19: scrabble");
        // console.log(scrabble('abc',{'a':1,'b':2,'c':3})); // returns 6
        // console.log(scrabble('banana',{'a':1,'b':2,'n':3})); // returns 11



    };
})();