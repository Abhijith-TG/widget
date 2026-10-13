
const button = document.createElement("button");
const panel = document.createElement("div");
const textArea = document.createElement("textarea")
const submitBtn = document.createElement("button")

let flag = true

button.id = "widgetBtn";
panel.className = "feedback-panel"
submitBtn.className = "feedback-submit"

submitBtn.textContent = "Submit"

document.body.appendChild(button)
document.body.appendChild(panel)
panel.appendChild(textArea)
panel.appendChild(submitBtn)

button.onclick=()=>{
    flag = !flag
    panel.style.display = flag ? "none": "block"
}

