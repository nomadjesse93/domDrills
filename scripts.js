window.addEventListener('DOMContentLoaded', function () {
    

    let div = document.createElement("div")
    div.className = ("container-header")
    document.body.appendChild(div)

    let h1 = document.createElement("h1")
    let text1 = document.createTextNode("This is an h1")
    h1.className = ("h1")
    h1.appendChild(text1)
    div.appendChild(h1)

    let h2 = document.createElement("h2")
    let text2 = document.createTextNode("This is an h2")
    h2.className = ("h2")
    h2.appendChild(text2)
    div.appendChild(h2)

    let h3 = document.createElement("h3")
    let text3 = document.createTextNode("This is an h3")
    h3.className = ("h3")
    h3.appendChild(text3)
    div.appendChild(h3)

    let h4 = document.createElement("h4")
    let text4 = document.createTextNode("This is an h4")
    h4.className = ("h4")
    h4.appendChild(text4)
    div.appendChild(h4)

    let h5 = document.createElement("h5")
    let text5 = document.createTextNode("This is an h5")
    h5.className = ("h5")
    h5.appendChild(text5)
    div.appendChild(h5)

    let h6 = document.createElement("h6")
    let text6 = document.createTextNode("This is an h6")
    h6.className = ("h6")
    h6.appendChild(text6)
    div.appendChild(h6)


    let header = document.createElement("h2")
    let htext = document.createTextNode("Click to change!")
    header.appendChild(htext)
    div.appendChild(header);

    let color = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'cyan', 'black'];

    function getRandomColor() {
        let randomColor = color[Math.floor(Math.random() * color.length)];
        return randomColor;
    }

    header.addEventListener('click', function () {
        let randomColor = getRandomColor();
        header.style.color = randomColor;
    });

    let btn = document.createElement("button")
    let btext = document.createTextNode("Click to add new list item")
    btn.appendChild(btext)
    div.appendChild(btn)
    btn.className = "listbutton"

    let ul = document.createElement('ul')
    div.appendChild(ul)


    let i = 1


    function addToList() {

        let li = document.createElement('li')
        ul.appendChild(li)
        let litext = document.createTextNode("This is list item " + (i) + " ");
        li.appendChild(litext)
        i = (i) + 1

        li.addEventListener('click', function () {
            let randomColor = getRandomColor();
            li.style.color = randomColor;
        });

        li.addEventListener("dblclick",function(){
            this.remove();
        });
    }

    btn.addEventListener("click", function () {
        addToList()

    });


 

});

