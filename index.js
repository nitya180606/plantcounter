let countel = document.getElementById("count-el")
let saveel = document.getElementById("save-el")
let count = 0
function increment() {
    count = count + 1
    countel.textContent=count 
}

function save() {
    let countStr = count + " - "
    saveel.textContent += countStr
    countel.textContent = 0
    count=0
}