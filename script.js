function changeImage() {
    var temp=document.getElementById("pic1").src;
    document.getElementById("pic1").src=document.getElementById("pic2").src;
    document.getElementById("pic2").src=temp;
}