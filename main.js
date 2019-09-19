(function(){
    window.onload = function(){
        console.log("did i connect")

        // 1sum
        function sum(a,b){
            return a + b;
        }
        console.log("1:sum(a,b)");
        console.log(sum(5, 9)); // return 14
        console.log(sum(5, 4)); // return 9

        // 2avg
        // average of three 
        function avg(a,b,c){
            return  (a+b+c)/3;
        }
        console.log("2:avg(a,b,c)");
        console.log(avg(1, 5, 9)); // returns 5
        console.log(avg(4, 4, 4)); // returns 4
        console.log(avg(10, 4, 1)); // returns 5

        // 3greaterThan
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

    };
})();