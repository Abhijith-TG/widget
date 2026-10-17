



export const Toast = (shadow,content)=>{
    const toast = document.createElement('div')
    shadow.appendChild(toast)
    toast.className = "toast"
    toast.textContent = content

    setTimeout(()=>{
        toast.remove()
    },2000)
}

