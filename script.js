document.addEventListener("DOMContentLoaded", function() {
    function css(e, styles) {
        for (const property in styles)
        e.style[property] = styles[property];
    }

    let github = document.querySelector("#github");
    css(github, {backgroundColor: "#303841", minHeight: "150px", textAlign: "center", color: "white", fontSize: "30px", fontFamily: "'Raleway', sans-serif",});

    let p = document.createElement("p");
    p.textContent = "My Github";
    css(p, {paddingTop: "20px"})
    github.appendChild(p);

    let btn = document.createElement("button");
    btn.onclick = function(){
        window.open("https://github.com/zedgamer9128", "_blank");
    }
    css(btn, {display: "flex", margin: "0 auto 0 auto"})
    btn.style.backgroundColor = "#0b6d65";
    let btnp = document.createElement("p");
    btnp.style.margin = "-5px 0 0 5px";
    btnp.style.height = "40px"
    btn.style.padding = "5px 5px 5px 0";
    btnp.style.color = "white";
    btnp.textContent = "Github";
    let img = new Image();
    img.src="GitHub-Mark-Light-32px.png";
    img.style.margin = "1px 0 0 5px"
    btn.appendChild(img);
    btn.appendChild(btnp);
    github.appendChild(btn);
})