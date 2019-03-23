$(document).ready(function(){
    var previosId = "null";
    $(".menu-icon").on("click", function(){
        $("nav ul").toggleClass("showing");
    });
    fetch("./navigation.json")
        .then(function(resp) {
            return resp.json();
            console.log(resp.json());
        })
        .then(function(city) {
            for(var i = 0; i < city.cities.length;i++) {
                var title = document.createElement('li');
                var node = document.createTextNode(city.cities[i].label);
                var id = title.setAttribute("id", city.cities[i].section);
                title.appendChild(node);
                var element = document.getElementById("nav");
                element.appendChild(title);
                console.log(title);
            }

            $("li").click(function(){
                var id = event.target.id;
                if(previosId != "null") {
                    $('#' + previosId).css("color","gray");
                    $('#' + previosId).css("borderBottom", "none");
                    $('#' + previosId).mouseenter(function(){
                        $(this).css("color", "blue");
                    });
                    $('#' + previosId).mouseleave(function(){
                        $(this).css("color", "gray");
                    });
                }
                $('#' + id).css("color","black");
                $('#' + id).css("borderBottom", "1px solid black");
                previosId = id;
            });


        })

});

