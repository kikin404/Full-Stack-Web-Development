const text = document.getElementById("otazky")
let otevren = false;
let otazky = ["jedna","dva"];
function buy_button(){
    window.open ( "https://creatortadeas.gumroad.com/l/psilny?price=59&wanted=true",
         "_blank"
    );
};

function answer(){
     for (let i = 0; i < otazky.length; i++) {
            text.innerText +=  otazky[i] + '\n';
    }
    if (otevren){
        text.innerHTML = "";
        otevren = false
        return;
    }
    otevren = true;
}