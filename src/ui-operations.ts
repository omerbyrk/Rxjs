
const box = document.getElementById("box");
setInterval(() => box.classList.toggle("box-dark"), 250);

const operations = {
    addItemToOutput: (val: any) => {
        var node = document.createElement("li");
        var textNode = document.createTextNode(val);
        node.appendChild(textNode);
        document.getElementById("output").appendChild(node);
    },
    setBoxPosition: (x: number, y: number) => {
        box.style.left = (x - (box.clientWidth / 2)) + "px";
        box.style.top = (y - 50) + "px";
    }
}

export default operations;