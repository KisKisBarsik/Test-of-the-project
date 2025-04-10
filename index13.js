function searchButtonFunction() { 

    var searchInput = document.getElementById("searchInput").value.toLowerCase()

    if (searchInput === "gaming pc") {
        
        window.location.href = "./smallDataBaseGaming.html"

    } else if (searchInput == "gaming") {

        window.location.href = "./smallDataBaseGaming.html"

    } else if (searchInput === "3d modeling") {

        window.location.href = "./smallDataBaseModeling.html"

    } else if (searchInput === "3d") {

        window.location.href = "./smallDataBaseModeling.html"

    } else if (searchInput === "modeling") {

        window.location.href = "./smallDataBaseModeling.html"

    } else if (searchInput === "work") {

        window.location.href = "./smallDataBaseWork.html"

    } else if (searchInput === "education") {

        window.location.href = "./smallDataBaseWork.html"

    }

}