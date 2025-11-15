const dom = document.body.querySelector(".projectContainer")

class Project{
    constructor(projectName, projectDescription,image, projectLink){
        this.projectName = projectName
        this.projectDescription=projectDescription
        this.image = image
        if(image==""){
            this.image = "assets/images/placeholder.png"
        }
        this.projectLink=projectLink
        this.cardEl = null
    }
    
    card() {      
        //formating text
        const text = this.projectDescription?.trim() ?? "";
        const excerpt = text.length > 120 ? text.slice(0, 120) + "…" : text;  
        //card content
        let cardContent
            cardContent = `
            <h4>${this.projectName}</h4>
            <img src="${this.image}" alt="${this.projectName}">
            <p>${excerpt}</p>
            <a href="${this.projectLink}" target="_blank"> Check the project </a>
            `   //making a div
       
        const card = document.createElement("div")
        //projectCard init
        card.setAttribute("class","projectCard");
        card.innerHTML = cardContent
        card.addEventListener("mouseover", (e)=>{
            card.getElementsByClassName("projectCard").tooltip = `${this.projectDescription}`
        })
        
        document.body.querySelector(".projectContainer").appendChild(card)
        this.cardEl = card
    }
    changeBorderColor(color){
        if(this.cardEl!=null){
            const image = this.cardEl.querySelector("img");
            if(image){
                image.style.border = `10px solid ${color}`
                image.style.borderRadius = "20px"
            }
        }    
    }
}

let p1 = new Project("Real News App",
    "An Android news reading app built with Jetpack Compose, using modern Android development tools. \
     The app fetches and displays news articles and offers user-friendly features such as Reader Mode, \
     Text-to-Speech (Listen to articles),Save Articles, Open Article in WebView",
    "assets/images/1.png",
    "https://github.com/shashank-iiitdelhi/NewsApp")

let p2 = new Project(
    "XMart",
    "A database management system where users can browse products, add them to their cart and complete orders,\
     and manages can track and manage their inventory. Built using HTML, CSS, BootStrap, JavaScript, Flask and Jinja",
    "",
     "https://github.com/XenoRaj/Dbms_Project_Emart"
)
let p3 = new Project(
    "Stick Hero Platformer Game",
    "A database management system where users can browse products, add them to their cart and complete orders,\
     and manages can track and manage their inventory. Built using HTML, CSS, BootStrap, JavaScript, Flask and Jinja",
    "",
     "https://github.com/XenoRaj/Dbms_Project_Emart"
)
p1.card()
p2.card()
p1.changeBorderColor('#ff0404ff')
p2.changeBorderColor('#078a18ff')