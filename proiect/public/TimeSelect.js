let timeSelect=0;
let Movie=document.getElementById("title");
let filmList=document.getElementById("FilmlList");
let movieSched=["15:00","16:00","17:45"];
let DuneSched=["16:30","21:45"]
let Mitty=["17:25","19:30","21:45"]

function OpenCheckOut(){

    window.open("./NumarBilete.html");
    
}

function movieDIv(movieTitle,movieGenra,movieSchedule,imageSRC)
{
let flimFlex = document.createElement("div")
let posterImage=document.createElement("img")
let filmDescriptionList=document.createElement("ul")
let filmTitleItem=document.createElement("li")
let filmAttributesItem=document.createElement("li")
let filmTimeBoxItem=document.createElement("li")
let filmTimeBox=document.createElement("div");

flimFlex.classList.add("flex","items-center")
posterImage.setAttribute("src",imageSRC)
posterImage.classList.add("h-auto", "w-36", "m-7", "md:w-56")
filmTitleItem.classList.add("text-3xl","font-BarlowSemiCondensed", "font-bold", "mb-4","text-slate-700")
filmAttributesItem.classList.add("text-2xl","mb-4", "font-BarlowSemiCondensed","text-slate-700")
filmTimeBox.classList.add("flex","gap-3")
filmTitleItem.innerHTML=movieTitle
filmAttributesItem.innerHTML=movieGenra

flimFlex.append(posterImage);
flimFlex.append(filmDescriptionList)
filmDescriptionList.append(filmTitleItem)
filmDescriptionList.append(filmAttributesItem)
filmDescriptionList.append(filmTimeBoxItem)
filmTimeBoxItem.append(filmTimeBox)



for(let i=0;i<movieSchedule.length;i++){
    let timeItem=document.createElement("button")
    timeItem.classList.add("bg-red-400", "border-2", "border-slate-700", "p-2", "border-opacity-70", "font-BarlowSemiCondensed", "font-bold", "flex-wrap", "hover:scale-110", "hover:ease-in", "duration-200")
     filmTimeBox.appendChild(timeItem)
     timeItem.innerHTML=movieSchedule[i]

}

document.body.appendChild(flimFlex)
}



movieDIv("Dunkrik","Thriller, Action",movieSched,"MoviePoster1.jpg");
movieDIv("Dune","Action, Adventure, Drama, Sci-Fi",DuneSched,"https://i.pinimg.com/564x/09/12/ec/0912ec51fe6f3d35180fee06c06954bc.jpg")
movieDIv("The Secret Life of Walter Mitty ","Comedy ",Mitty,"https://i.pinimg.com/564x/8e/1a/bd/8e1abd90357b53f641c19427d5755155.jpg")

