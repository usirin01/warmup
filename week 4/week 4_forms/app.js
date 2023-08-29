function nicknameFunction(){
    if (document.getElementById("yesNick").checked)
    {
        document.getElementsById("nick").style.displa = "inline"

        document.getElementById("nickname").setAttribute("required",true);
    }
    else
    {
        document.getElementById("nickname").removeAttribute("required");
        document.getElementById("nick").style.display = "none";

    }
}