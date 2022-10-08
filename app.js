var theme = document.querySelector("input[name=theme]");


if( localStorage.getItem("dark") !== undefined )
{
    if(localStorage.getItem("dark") === "false")
    theme.checked = false;
    else
    theme.checked = true;
}


changeTheme();


theme.addEventListener("change",(e)=>{
    changeTheme();
})

function changeTheme(){

    let card = document.getElementsByClassName("card");
    let cardGroup = document.getElementsByClassName("card-group");

    if(theme.checked)
    {
       for( let i = 0; i < card.length; i++)
       card[i].style.color = "white";

       for( let i = 0; i < cardGroup.length; i++)
       cardGroup[i].style.backgroundColor = "black";

       document.getElementById("text").style.color = "white";
       document.getElementById("text").style.backgroundColor = "black";
       document.getElementById("main").style.backgroundColor = "black";
       localStorage.setItem("dark",true);
    }
    else
    {
        for( let i = 0; i < card.length; i++)
       card[i].style.color = "black";

       for( let i = 0; i < cardGroup.length; i++)
       cardGroup[i].style.backgroundColor = "white";

       
       document.getElementById("text").style.color = "black";
       document.getElementById("text").style.backgroundColor = "white";
       document.getElementById("main").style.backgroundColor = "white";
       localStorage.setItem("dark",false);
    }

}