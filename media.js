function enlarge() {
    photoNum = parseInt(document.getElementById("photoNum").value)
    document.getElementById(photoNum).style.maxHeight = 25%;
    document.getElementById(photoNum).style.maxWidth = 25%;
}
