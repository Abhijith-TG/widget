import { Toast } from "./toast.js"

const host = document.createElement("div")

document.body.appendChild(host)

const shadow  = host.attachShadow({mode:"open"})
const style = document.createElement("style")


style.textContent= `

 *{
font-family:Arial, sans-serif;
}
#widgetBtn{
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: none;
  border-radius: 100%;
  background: #4670e5;
  color: white;
  font-size: 10px;
  cursor: pointer;
  transition: 300ms;
  display: flex;
  height: 20px;
  width: 20px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

}

#widgetBtn:hover{
    background: #2f28b7;
    cursor: pointer;
}
#widgetBtn:active{
    background: #4f46e5;
}



.feedback-panel {
  position: fixed;
  right: 24px;
  bottom: 65px;
  width: 200px;
  padding: 10px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgb(0 0 0 / 12%);
}

.feedback-panel textarea {
  box-sizing: border-box;
  width: 100%;
  min-height: 110px;
  margin: 12px 0;
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font: inherit;
  resize: vertical;
  font-size: 10px;
}

.feedback-submit {
  width: 100%;
  padding: 5px;
  border: none;
  border-radius: 8px;
  background: #4f46e5;
  color: white;
  cursor: pointer;
  font-size: 12px;
}

.feedback-panel[hidden] {
  display: none;
}

.feedback-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.toast{
  width: 200px;
  height: 30px;
  background-color: rgb(4, 62, 15);
  color: white;
  display: flex;
  padding: 5px;
  border-radius: 5px;
  font-size: 10px;
  position: fixed;
  top: 10px;
  right: 10px;
  transition: 100ms;
}
`
shadow.append(style)
const button = document.createElement("button");
const panel = document.createElement("div");
const textArea = document.createElement("textarea")
const submitBtn = document.createElement("button")



button.id = "widgetBtn";
panel.className = "feedback-panel"
submitBtn.className = "feedback-submit"


button.textContent = "?"
submitBtn.textContent = "Submit"
textArea.placeholder = "feedback..."
panel.hidden = true;

shadow.appendChild(button)
shadow.appendChild(panel)
panel.appendChild(textArea)
panel.appendChild(submitBtn)

button.onclick=()=>{
    panel.hidden = !panel.hidden;
}

submitBtn.addEventListener('click',()=>{
    if(textArea.value.trim()===''){
        alert("Atleast add data !")
        return;
    }
    submitBtn.disabled= true
    button.disabled = true
    submitBtn.textContent = "Submitting..."
    setTimeout(()=>{

        textArea.value=""
        Toast(shadow,"Feedback submitted successfully !")
        
        submitBtn.disabled= false
        submitBtn.textContent = "Submit"
        button.disabled = false

    },1000)
})
