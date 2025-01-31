const buttons = document.querySelectorAll("button")
const body = document.querySelector("body")
buttons.forEach(button=>{
    button.addEventListener("click",(e)=>{
        console.log(e.target.id)
        switch (e.target.id) {
            case "blue":
                body.style.backgroundColor="blue"
                break;
            case "black":
                body.style.backgroundColor="black"
                break;
            case "green":
                body.style.backgroundColor="green"
                break;
            case "white":
                body.style.backgroundColor="white"
                break;
            case "yellow":
                body.style.backgroundColor="yellow"
                break;
            case "pink":
                body.style.backgroundColor="pink"
                break;
            default:
                break;
        }
    })
})
