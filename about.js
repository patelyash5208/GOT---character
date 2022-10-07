var aboutTheme = document.querySelector("input[name=aboutTheme]");


    if( localStorage.getItem("dark") !== undefined )
{
    if(localStorage.getItem("dark") === "false")
    aboutTheme.checked = false;
    else
    aboutTheme.checked = true;
}

changeTheme();

aboutTheme.addEventListener("change",(e)=>{

    changeTheme();
})

function changeTheme(){

    let background = document.getElementById("aboutMain");
    let text = document.getElementById("aboutText");

    if(aboutTheme.checked)
    {
      background.style.backgroundColor = "black";
      text.style.color = "white";
      localStorage.setItem("dark",true);
    }
    else
    {
        background.style.backgroundColor = "gray";
        text.style.color = "black";
        localStorage.setItem("dark",false);
    }


}