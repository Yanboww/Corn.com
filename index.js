let bg = document.getElementById("mode")
let body = document.getElementById("main")
let exit = document.getElementById("exit")
exit.addEventListener("click", exitSite)
bg.addEventListener("click",changeBg)
let userNameSection = document.getElementById("user-name")
userNameSection.innerHTML="Username: " + localStorage.getItem("user")
let pfps = []
async function getFirst4()
{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const j = await response.json()
    const arr = []
    for(let i = 1; i < 4; i++)
    {
        arr.push(j[i])
    }
    return arr
}
getFirst4()
.then(async response =>
{
    console.log("success")
    for(let i = 0; i < response.length; i++)
    {
        let result = JSON.stringify(response[i].body)
        console.log(JSON.stringify(response[i].title))
        console.log(result)
        let div = document.createElement("div")
        let img = document.createElement("img")
        let title = document.createElement("p")
        let userName = document.createElement("p")
        const uN = await fetch("https://jsonplaceholder.typicode.com/users/"+(i+1))
        const uNJ = await uN.json()
        userName.id="user"
        userName.innerHTML = "@" + JSON.stringify(uNJ.username)
        let p = document.createElement("p")
        p.innerText = result;
        img.id="pfp"
        title.id="title"
        title.innerText=JSON.stringify(response[i].title)
        const imgData = await fetch("https://unsplash.it/1920/1080?random")
        if(ImageData.status == 200){
            console.log("success image")
        }
        else{
            console.log("failed image")
        }
        const obj = await imgData.blob()
        img.src = URL.createObjectURL(obj)
        let chat = document.createElement("img")
        chat.src = "img/chat.png"
        chat.id="posted-btns"
        let heart = document.createElement("img")
        heart.src = "img/love.png"
        heart.id="posted-btns"
        let retweeet = document.createElement("img")
        retweeet.src = "img/retweet.png"
        retweeet.id="posted-btns"
        div.appendChild(img)
        div.appendChild(userName)
        div.appendChild(title)
        div.appendChild(p)
        if(i == 1){
            let imgPost = document.createElement("img")
            imgPost.id="posted-img"
            imgPost.src="img/corn-pfp-others.jpg"
            div.appendChild(imgPost)
        }
        div.appendChild(chat)
        div.appendChild(heart)
        div.appendChild(retweeet)
        if(i == 2)
        {
            const commentU = await fetch("https://jsonplaceholder.typicode.com/users/"+(i+2))
            const commentUJ = await commentU.json()
            let commentUP = document.createElement("p")
            commentUP.id = "user"
            commentUP.innerText = "@" + JSON.stringify(commentUJ.username)
            div.appendChild(commentUP)
            const commentC = await fetch("https://jsonplaceholder.typicode.com/comments/3")
            const commentCJ = await commentC.json()
            let commentCP = document.createElement("p")
            commentCP.id = "comment-body"
            commentCP.innerText= JSON.stringify(commentCJ.body)
            div.appendChild(commentCP)

        }
        div.id="posts"
        document.body.appendChild(div)
    }
})
.then(response =>{
    console.log("failed")
})

function changeBg()
{
    if(body.style.backgroundColor === "darkslategrey"){
        body.style.backgroundColor="white"
        body.style.color="black"
        bg.style.backgroundImage = 'url("img/light-mode.png")'
    } 
    else{
        body.style.backgroundColor="darkslategrey"
        body.style.color="white"
        bg.style.backgroundImage = 'url("img/dark-mode.png")'
    }
    localStorage.setItem("mode", body.style.backgroundColor)
    localStorage.setItem("font-color", body.style.color)
    
}

if(localStorage.getItem("mode"))
{
    body.style.backgroundColor = localStorage.getItem("mode")
    body.style.color = localStorage.getItem("font-color")
}

function exitSite()
{
    location.replace("index.html")
    localStorage.removeItem("user")
}