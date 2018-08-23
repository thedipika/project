window.onload = function () {
    //Let's create a function that will scale an element with the desired ratio
    //Specify the element id, desired width, and height
    function keepAspectRatio(id, width, height) {
        var aspectRatioDiv = document.getElementById(id);
        aspectRatioDiv.style.width = window.innerWidth;
        aspectRatioDiv.style.height = (window.innerWidth / (width / height)) + "px";
    }

    //run the function when the window loads
    keepAspectRatio("aspectRatio", 16, 9);

    //run the function every time the window is resized
    window.onresize = function (event) {
        keepAspectRatio("aspectRatio", 16, 9);
    }
}