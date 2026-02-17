const header = document.getElementsByTagName("h1")[0]

const headerText = `Chase's First Website (Heart Exclamation)`

const colors = [
    "red", "orange", "yellow", "green", "blue", "purple"
]

for (let i = 0; i < headerText.length; i++) {
    const letter = document.createElement("span")
    letter.innerText = headerText[i]
    header.append(letter)
    letter.style.color = colors[i%6]
}