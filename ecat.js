var question_bank = [["1) If A = [2 3 4 5] \"2 3 are 1 row elements and 4 5 are 2 row elements\", what is the determinant of matrix A?\n","A) −2\n","B) −3\n","C) 7\n","D) 10\n","E) Skip\n","A"],["2) The function f(x) = x^3 - 3x^2 + 4 has a critical point at x =2. What is the nature of this Critical Point? \n","A) Local Maximum\n","B) Local Minimum\n","C) Saddle Point\n","D) Cannot be determined\n","E) Skip\n","B"],["3) A ball is thrown vertically upward with a velocity of 20m/s. What will be its velocity after 2s?(Take g = 10m/s^2)\n","A) 10 m/s\n","B) 0 m/s\n","C) -10 m/s\n","D) -20 m/s\n","E) Skip\n","B"],["4) A circuit consists of a resistor, inductor, and capacitor in series. At resonance, which of the following is true?\n","A) The impedance is maximum\n","B) The current is minimum\n","C) The power factor is 0\n","D) The impedance is minimum\n","E) Skip\n","D"],["5) Choose the correct synonym for the word \"Eloquent\":\n","A) Silent\n","B) Fluent\n","C) Confused\n","D) Dull\n","E) Skip\n","B"],["6) Identify the sentence with correct grammar:\n","A) If I was a bird, I will fly.\n","B) If I were a bird, I would fly.\n","C) If I were a bird, I will fly.\n","D) If I was a bird, I would fly.\n","E) Skip\n","B"],["7) Which of the following addressing modes allows the operand to be specified indirectly using a register?\n","A) Immediate Addressing\n","B) Direct Addressing\n","C) Indirect Addressing\n","D) Indexed Addressing\n","E) Skip\n","C"],["8) What is the time complexity of the binary search algorithm in the worst case scenario?\n","A) O(1)\n","B) O(n)\n","C) O(log n)\n","D) O(n^2)\n","E) Skip\n","C"],["9) Which of the following sorting algorithms has the worst-case time complexity of O(n log n)?\n","A) Bubble Sort\n","B) Quick Sort\n","C) Selection Sort\n","D) Insertion Sort\n","E) Skip\n","B"],["10) In object-oriented programming, what is the main purpose of polymorphism?\n","A) To create multiple objects\n","B) To use the same Function name for different functionalities\n","C) To store different data types in a single variable\n","D) To declare multiple variables of the same type\n","E) Skip\n","B"]]
// var  skip = [];
var data = "";
var options = "";
function remove(){
    $(".header").css("display","none");
    $(".questions").css("display","block");
}

function save_option(n){
    option = document.getElementById(n);
    option = option.value;
    save_data(option);
}

function save_data(n){
    data = n;
    return data;
}

function Save_Option(){
    options = options+data;
    // alert(options);
    current_id = options.length;
    current_id = ".d"+current_id.toString();
    $(current_id).css({"display":"none"});
    next_id = (options.length)+1;
    next_id = ".d"+next_id.toString();
    $(next_id).css({"display":"block"});
}

function Submit(){
    console.log("stop");
}