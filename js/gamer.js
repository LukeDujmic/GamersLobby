var navNum = [1,2,3,4,5];   //this is an array dedicated to comparing to the variable 'k' to determine the position of the links in the nav
var navAdvanced = true; // this checks if the user has the advanced navigation enabled or not, which is managed by the button in the top left of the navigation area
var k = 0;  //this variable will check the current link element that is active on the special carousel navigation system
// adding event listeners for the navigation buttons
document.getElementById("leftButton").addEventListener('click', navLeft);
document.getElementById("rightButton").addEventListener('click', navRight);

function loadStyle() //loads if the nav was advanced or not
{
    if (navAdvanced != null)
    {
        navAdvanced = JSON.parse(localStorage.getItem('navAdvanced'));
    }   
    if (navAdvanced == null)
    {
        navAdvanced = true;
    }
    //running the styles based on user saved data.
    if (navAdvanced == true)       // if the navigation is in simple form, it adds all the styles and event listeners BACK to the links so they have that special carousel effect
    {
        document.getElementById("linkArea").style.height = "20em";
        navAdvanced = true;
        document.getElementById("buttonArea").classList.remove("hidden");
        document.getElementById("buttonArea").classList.add("shown");
        document.getElementById("leftButton").addEventListener('click', navLeft);
        document.getElementById("rightButton").addEventListener('click', navRight);
        // changing individual styles
        for (var i = 0; i < 5; i++)     //this for loop adds the individual styles back to each link element.
        {
            document.getElementsByClassName("linkImages")[i].style.display = "block";
            document.getElementsByClassName("links")[i].style.position = "absolute";
            document.getElementsByClassName("links")[i].style.margin = "0em";
            document.getElementsByClassName("links")[i].style.height = "12.5em";
            document.getElementsByClassName("links")[i].style.transition = "0s";
        }
        document.getElementsByClassName("links")[0].classList.add('link1');
        document.getElementsByClassName("links")[1].classList.add('link2');
        document.getElementsByClassName("links")[2].classList.add('link3');
        document.getElementsByClassName("links")[3].classList.add('link4');
        document.getElementsByClassName("links")[4].classList.add('link5');
        console.log("Advanced Nav");
        setTimeout(transitionDelay, 100);
    }
    else if (navAdvanced == false)   //makes the navigation bar go in a simple form for user options
    {
        document.getElementById("linkArea").style.height = "auto";
        k = 0;  // both k and the navNum array is reset so that no mixups happen when switching between nav modes
        navNum = [1,2,3,4,5];
        navAdvanced = false;   // this boolean changes if the navigation bar is advanced or not, which is necessary for checking THIS function
        document.getElementById("buttonArea").classList.add("hidden");
        document.getElementById("buttonArea").classList.remove("shown");
        document.getElementById("leftButton").removeEventListener('click', navLeft);
        document.getElementById("rightButton").removeEventListener('click', navRight);
        // changing individual styles
        for (var i = 0; i < 5; i++)
        {
            document.getElementsByClassName("linkImages")[i].style.display = "none";
            document.getElementsByClassName("links")[i].style.position = "relative";
            document.getElementsByClassName("links")[i].style.margin = "0.2em";
            document.getElementsByClassName("links")[i].style.height = "5em";
            document.getElementsByClassName("links")[i].style.transition = "0s";

            document.getElementsByClassName("links")[i].classList.remove('link1');
            document.getElementsByClassName("links")[i].classList.remove('link2');
            document.getElementsByClassName("links")[i].classList.remove('link3');
            document.getElementsByClassName("links")[i].classList.remove('link4');
            document.getElementsByClassName("links")[i].classList.remove('link5');
        }
        console.log("Simple Nav");
        setTimeout(transitionDelay, 100);   // this creates a delay for the visuals so that it doesnt look akward
    }
}

function saveStyle()    //saving the navAdvanced variable so it can be applied on other pages or if the user refreshes in some way.
{
    localStorage.setItem('navAdvanced', JSON.stringify(navAdvanced));
}

// rotating the carousel nav system right
function navRight()
{
    for (k = 0; k < navNum.length; k++)
    {
        document.getElementsByClassName('links')[k].classList.remove("link"+navNum[k]+"");  // gets the link elements that have the class 'links' and removes the current link number style from it
        navNum[k] -= 1;     // subtracts 1 from the value of the individual numbers in the navNUm array, which gets reset back to 5 if it goes less than 0.  
        if (navNum[k] < 1)
        {
            navNum[k] = 5;
        }
        document.getElementsByClassName('links')[k].classList.add("link"+navNum[k]+""); //this adds the special position style back to a specific link element.  
        //For example, the products link may be in the position 1 (the link box in the front of the carousel), which means it gets the 'link1' class to make it bigger and in the front.
    }
    
}
// rotating the carousel nav system left
function navLeft()
{
    for (k = 0; k < navNum.length; k++)
    {
        document.getElementsByClassName('links')[k].classList.remove("link"+navNum[k]+""); 
        navNum[k] += 1;// adds 1 to the value of the individual numbers in the navNUm array, which gets reset back to 0 if it goes greater than 5.  
        if (navNum[k] > 5)
        {
            navNum[k] = 1;
        }
        document.getElementsByClassName('links')[k].classList.add("link"+navNum[k]+"");
    }
    
}

// changing the nav from advanced to simple and vice versa
function changeNav()
{
    if (navAdvanced == false)       // if the navigation is in simple form, it adds all the styles and event listeners BACK to the links so they have that special carousel effect
    {
        document.getElementById("linkArea").style.height = "20em";
        navAdvanced = true;
        document.getElementById("buttonArea").classList.remove("hidden");
        document.getElementById("buttonArea").classList.add("shown");
        document.getElementById("leftButton").addEventListener('click', navLeft);
        document.getElementById("rightButton").addEventListener('click', navRight);
        // changing individual styles
        for (var i = 0; i < 5; i++)     //this for loop adds the individual styles back to each link element.
        {
            document.getElementsByClassName("linkImages")[i].style.display = "block";
            document.getElementsByClassName("links")[i].style.position = "absolute";
            document.getElementsByClassName("links")[i].style.margin = "0em";
            document.getElementsByClassName("links")[i].style.height = "12.5em";
            document.getElementsByClassName("links")[i].style.transition = "0s";
        }
        document.getElementsByClassName("links")[0].classList.add('link1');
        document.getElementsByClassName("links")[1].classList.add('link2');
        document.getElementsByClassName("links")[2].classList.add('link3');
        document.getElementsByClassName("links")[3].classList.add('link4');
        document.getElementsByClassName("links")[4].classList.add('link5');
        console.log("Advanced Nav");
        setTimeout(transitionDelay, 100);
    }
    else if (navAdvanced == true)   //makes the navigation bar go in a simple form for user options
    {
        document.getElementById("linkArea").style.height = "auto";
        k = 0;  // both k and the navNum array is reset so that no mixups happen when switching between nav modes
        navNum = [1,2,3,4,5];
        navAdvanced = false;   // this boolean changes if the navigation bar is advanced or not, which is necessary for checking THIS function
        document.getElementById("buttonArea").classList.add("hidden");
        document.getElementById("buttonArea").classList.remove("shown");
        document.getElementById("leftButton").removeEventListener('click', navLeft);
        document.getElementById("rightButton").removeEventListener('click', navRight);
        // changing individual styles
        for (var i = 0; i < 5; i++)
        {
            document.getElementsByClassName("linkImages")[i].style.display = "none";
            document.getElementsByClassName("links")[i].style.position = "relative";
            document.getElementsByClassName("links")[i].style.margin = "0.2em";
            document.getElementsByClassName("links")[i].style.height = "5em";
            document.getElementsByClassName("links")[i].style.transition = "0s";

            document.getElementsByClassName("links")[i].classList.remove('link1');
            document.getElementsByClassName("links")[i].classList.remove('link2');
            document.getElementsByClassName("links")[i].classList.remove('link3');
            document.getElementsByClassName("links")[i].classList.remove('link4');
            document.getElementsByClassName("links")[i].classList.remove('link5');
        }
        console.log("Simple Nav");
        setTimeout(transitionDelay, 100);   // this creates a delay for the visuals so that it doesnt look akward
    }
}

function transitionDelay()      //this function is run between the navigation style changes so that the link boxes dont stretch and reposition weirdly as they are transitioning.
{
    for (var i = 0; i < 5; i++)
    {
        document.getElementsByClassName("links")[i].style.transition = "0.2s";
    }
}
function alertCheck()   //checking form submission (for the contact page)
{
    alert("Thanks for expressing your question and/or concern!  We will get back to you as soon as possible!")
}

