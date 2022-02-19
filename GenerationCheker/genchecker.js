function Generation() {
    var yearvalue = document.getElementById("yearbox").value
    if (yearvalue <= 1945) {
        document.getElementById("Final").innerHTML = "Silent"
        
    }
    if (yearvalue <= 1964) {
        document.getElementById("Final").innerHTML = "Boomer"
        
    }
    else if (yearvalue <= 1980) {
        document.getElementById("Final").innerHTML = "Generation X"
        
    }
    else if (yearvalue <= 1996) {
        document.getElementById("Final").innerHTML = "Milenials"
        
    }
    else if (yearvalue <= 2012) {
        document.getElementById("Final").innerHTML = "Generation Z"
        
    }
    
}