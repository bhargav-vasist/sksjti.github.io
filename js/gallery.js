$(document).ready(function() {
    var userAgent, ieReg, ie;
    userAgent = window.navigator.userAgent;
    ieReg = /msie|Trident.*rv[ :]*11\./gi;
    edgeReg = /.*Edge/gi; 
    ie = ieReg.test(userAgent) | edgeReg.test(userAgent);
    if(ie) {
        $(".card").each(function() {
           var container = $(this),
               imgUrl = container.find("img").prop("src");
            if(imgUrl) {
                container.find("img").css("display", "none");
                container.css('backgroundImage', 'url(' + imgUrl + ')').addClass("ie-image");
            }
        });
    }

    $(".image-expand").on("click", function() {


        var current = $(this);
        var imagePath = current.find("img").prop("src");

        imagePath = imagePath.replace("thumbnails", "images");

        var parentDiv = document.createElement("div");
        parentDiv.setAttribute("class", "image-container");
        var img = document.createElement("img");
        img.setAttribute("src", imagePath);
        img.setAttribute("class", "gallery-image");

        var imgBtn = document.createElement("div");
        imgBtn.setAttribute("class", "image-buttons");

        var left = document.createElement("span");
        left.innerHTML = "&lt;";

        var right = document.createElement("span");
        right.innerHTML = "&gt;";

        var quit = document.createElement("span");
        quit.innerHTML = "&times;";

        quit.setAttribute("class", "quit");

        imgBtn.appendChild(left);
        imgBtn.appendChild(right);
        imgBtn.appendChild(quit);

        parentDiv.appendChild(imgBtn);
        parentDiv.appendChild(img);
        $('body').append(parentDiv);

        $(left).on("click", function() {
            var prev = current.prev().find("img").prop("src");
            console.log(prev);
            if(prev != undefined) {
                prev = prev.replace("thumbnails", "images");
                img.setAttribute("src", prev);
                current = current.prev();
            } else {
                console.log("Image Not Found");
            }
        });

        $(right).on("click", function() {
            var next = current.next().find("img").prop("src");
            console.log(next);
            if(next != undefined) {
                next = next.replace("thumbnails", "images");
                img.setAttribute("src", next);
                current = current.next();
            } else {
                console.log("Image Not Found");
            }
        });

        $(quit).on("click", function() {
            $(".image-buttons");
            $(".gallery-image").remove();
            $(".image-container").remove();
        });    
    });
});