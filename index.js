/* here we 👉 case1: recognise clicked letters using mouse🖱️ and play⏯️ music🎹.
1️⃣declared variable(noofdrumbtns) for the number of elements --> using querySelectorAll which selects all elements with class drum and a .length function to get the length.

2️⃣ for loop is used for to add a eventlistener 🦻 so when we any keyword or letter is clicked it gets to know.
in for loop♾️(no semi-colon requried at 🔚) we declared a variable i which constantly get incremented and checks the condition (i<noofdrumbtns) and excute the following statements.

3️⃣ addEventListener()-->it takes 2 parameters ➡️event,function() , in addEventListener when we are passing a function as parameter we should not❌use ()!!! bsz it directly excetues the function before the function called

4️⃣ sound() is a function in which we declared buttonhtml variable to take the innerHTML as value wusing this keyword means when a user clicked any letter then it returns the value to buttonhtml so we can play respective music based on user click.and this sound() calls the makesound() function and gives the buttonhtml as parameter.
💡 this 1st code it just take the input html and give respective sounds when user click using mouse 🖱️*/
var noofdrumbtns = document.querySelectorAll(".drum").length;
for(var i=0;i<noofdrumbtns;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",sound);
    function sound(){
        var buttonhtml = this.innerHTML;
        makesound(buttonhtml);    
    }
}
/*👉 case2:recognise the keys pressed on keyboard⌨️ 
5️⃣ addEventListener is added to the enter document, it takes all key pressed and an anonymous function which takes event as input parameter and call a function makesound() with event.key -->("w/k/j/any letter")*/
document.addEventListener("keypress",function(event)
{
    makesound(event.key);
});
/*👉 case3: Play ⏯️ music🎵 sounds 🔊 for the recognised letter for both(🖱️and⌨️) 
6️⃣ defined a function makesound() with one input where key=buttonhtml(from sound() )or key=event.key (from anonymous function) , this function uses switch case for various conditions

7️⃣ Switch statement uses key as value and tries to match the key with each case, if its matched then respective sound for that key is play using Audio object*/
function makesound(key){
    switch (key) {
        case "w":
            var w= new Audio("sounds/crash.mp3");
            w.play();
            break;
        case "a":
            var a= new Audio("sounds/kick-bass.mp3");
            a.play();
            break;
        case "s":
            var s = new Audio("sounds/snare.mp3");
            s.play();
            break;
        case "d":
            var d= new Audio("sounds/tom-1.mp3");
            d.play();
            break;
        case "j":
            var j= new Audio("sounds/tom-2.mp3");
            j.play();
            break;
        case "k":
            var k= new Audio("sounds/tom-3.mp3");
            k.play();
            break;
        case "l":
            var l= new Audio("sounds/tom-4.mp3");
            l.play();
            break;    
        default:
            console.log("pls press only the letters displayed");
            break;
    }

}
