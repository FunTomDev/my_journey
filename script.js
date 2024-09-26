function openMenu(){

    document.body.classList.toggle("overflow-hidden")
    let mainHeader = document.querySelector(".main-header")

    mainHeader.classList.toggle("menu-opened")

}

let closeViewBox = document.querySelector(".close-view")

closeViewBox.addEventListener("click", function(){

    console.log("close view box clicked!")

    closeViewBox.classList.toggle("opaque")
    
    setTimeout(() => {
        closeViewBox.classList.toggle("invisible")
    }, 300);
    
})

let workContainer = document.querySelectorAll(".work-container")

workContainer.forEach((element) => {

    element.addEventListener("click", (e) => {

        contentTitle = document.querySelector(".content-title")
        contentAuthorName = document.querySelector(".content-author .author-name")
        contentAuthorImage = document.querySelector(".content-author .author-image")

        console.log(e.currentTarget.querySelector(".author-name").innerHTML)

        contentTitle.innerHTML = e.currentTarget.querySelector(".work-image").alt
        contentAuthorName.innerHTML = e.currentTarget.querySelector(".author-name").innerHTML
        contentAuthorImage.src = e.currentTarget.querySelector(".author-image").src

        closeViewBox.querySelector(".content-image").src = e.currentTarget.querySelector(".work-image").src.replace("previews", "works").replace("webp", "jpg")

        closeViewBox.classList.toggle("invisible")

        setTimeout(() => {

            closeViewBox.classList.toggle("opaque")
            
        }, 10);
        

    })

})