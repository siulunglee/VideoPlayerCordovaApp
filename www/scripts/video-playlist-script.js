//// Playlist Javascript Code for Video.js

function playMovie() {
    var video = document.getElementsByTagName("video")[0];
    
    video.play();
}

function doPlayList(listID, playerID) {
    var player = document.getElementById(playerID);
    var video = document.getElementsByTagName("video")[0];
    video.src = null;
    video.setAttribute("data-count", 0);

    video.addEventListener("ended", function (e) {
        e.preventDefault();
        var s = video.getElementsByTagName("source")[0];
        var c = parseInt(video.getAttribute("data-count")) + 1;


        var item = document.getElementById("video" + c);
        if (item === null) {
            item = document.getElementById("video0");
            c = 0;
        }

        
        s.src = item.getAttribute("data-loc");
        s.type = item.getAttribute("data-type");

        video.setAttribute("data-count", c);
        video.setAttribute('autoplay', "autoplay");

        console.log("ended movie and data-source is: " + c);
        console.log("movie comes up is: " + s.src);
        video.src = s.src;

        video.load();
        video.play();
        
        playMovie();
    });

    var list = document.getElementById(listID);
    var items = list.getElementsByTagName("li");

    //console.log(items.length);

    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        item.id = "video" + i;

        //console.log(item.id);

        item.addEventListener("click", function (e) {
            e.preventDefault();

            var p = document.getElementById("videoplayer");
            var myvideo = document.getElementsByTagName("video")[0];
            var s = document.getElementsByTagName("source")[0];
            var videoLoc = this.getAttribute("data-loc");
            console.log(videoLoc);
            //console.log(this.id.substr(5));
            //s.src = videoLoc;

            s.setAttribute("type", this.getAttribute("data-type"));
            myvideo.setAttribute("data-count", this.id.substr(5));
            myvideo.setAttribute("autoplay", "autoplay");
            myvideo.src = videoLoc;
            //console.log("src: " + p.getElementsByTagName("source")[0].src);
            myvideo.load();
            myvideo.play();
        });
    }
}

document.onready = doPlayList("playlist", "videoplayer");