$(document).ready(function () {
    var userAgent, ieReg, edgeReg, ie;
    userAgent = window.navigator.userAgent;
    ieReg = /msie|Trident.*rv[ :]*11\./gi;
    edgeReg = /.*Edge/gi;
    if (ieReg.test(userAgent) || edgeReg.test(userAgent)) {
        $(".card").each(function (index, element) {
            var container = $(element),
                imgUrl = container.find("img").prop("src");
            if (imgUrl) {
                container.find("img").css("display", "none");
                container.css('backgroundImage', 'url(' + imgUrl + ')').addClass("ie-image");
            }
        });
    }
    
    //Adding Links
    //-------------------------------------------------------
    
    var ul = $("<ul>");
    ul.addClass("list-unstyled");
    var count = 0;
    $("h2.img-cat").each(function (index, element) {
        $(element).attr("id", $(element).attr("class") + (count++));
        var anchor = $("<a>");
        var li = $("<li>");
        anchor.html($(element).text());
        anchor.attr("href", "#" + $(element).attr("id"));
        li.css({"display": "inline-block", "padding": "10px 20px 10px 0px"});
        li.append(anchor);
        ul.append(li);
    });
    $("#links").append(ul);
    //-------------------------------------------------------

    $(".image-expand").on("click", function (e) {

        $("html").css("overflow", "hidden");                    //Check for reliability
        
        var current = $(this);
        var imagePath = current.find("img").prop("src");

        imagePath = imagePath.replace("thumbnails", "images");

        var parentDiv = $("<div>");
        parentDiv.attr("class", "image-container");
        var img = $("<img>");
        
        img.attr({src: imagePath, class: "gallery-image"});

        var left = $("<span>");
        left.attr("class", "image-buttons left");
        left.html("&lt;");

        var right = $("<span>");
        right.attr("class", "image-buttons right");
        right.html("&gt;");

        var quit = $("<span>");
        quit.attr("class", "image-buttons quit");
        quit.html("&times;");
        
        var spinContainer = $("<div>");
        spinContainer.attr("class", "spin-container");
        
        var spinner = $("<div>");
        spinner.attr("class", "spinner");

        spinContainer.append(spinner);
        
        parentDiv.append(left);
        parentDiv.append(right);
        parentDiv.append(quit);

        parentDiv.append(img);
        parentDiv.append(spinContainer);
        $('body').append(parentDiv);
        
        
        img.on('load', function (e) {
            $(".spin-container").remove();
        });

        $(left).on("click", function (e) {
            var prev = current.prev().find("img").prop("src");
            if (prev !== undefined) {
                
                var spinContainer = $("<div>");
                spinContainer.attr("class", "spin-container");

                var spinner = $("<div>");
                spinner.attr("class", "spinner");

                spinContainer.append(spinner);
                
                parentDiv.append(spinContainer);
                prev = prev.replace("thumbnails", "images");
                img.attr("src", prev);
                current = current.prev();
            }
        });

        $(right).on("click", function (e) {
            var next = current.next().find("img").prop("src");
            if (next !== undefined) {
                var spinContainer = $("<div>");
                spinContainer.attr("class", "spin-container");

                var spinner = $("<div>");
                spinner.attr("class", "spinner");

                spinContainer.append(spinner);
                
                parentDiv.append(spinContainer);
                next = next.replace("thumbnails", "images");
                img.attr("src", next);
                current = current.next();
            }
        });

        $(quit).on("click", function (e) {
            $(".image-container").remove();
            $("html").css("overflow", "auto");      //Check for reliability
        });
    });
});