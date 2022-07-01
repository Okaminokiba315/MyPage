$("#wolf").on('click', function() {
    window.location = "https://saweria.co/balqislumbun";
});

$("#facebook").on('click', function() {
    window.location = "https://www.facebook.com/profile.php?id=100081495700599/";
});

$("#twitter").on('click', function() {
    window.location = "https://twitter.com/Okaminokiba3154";
});
$("#deviantArt").on('click', function() {
    window.location = "https://www.deviantart.com/okaminokiba315";
});
$("#pixiv").on('click', function() {
    window.location = "https://www.pixiv.net/en/users/27821523";
});
$("#gmail").on('click', function() {
    window.location = "mailto:okaminokiba315@gmail.com";
});
$("#takeMe").on('click', function() {
    window.location = "https://balqislumbun.github.io/tickleshibe/";
});
$("#takeMe1").on('click', function() {
    window.location = "https://okaminokiba315.github.io/MillionPatPat/";
});

let opened = false;

function openData() {
    if (opened == false) {
        document.getElementById("containerdata").style.display = 'block';
        opened = true;
    } else {
        opened = false;
        document.getElementById("containerdata").style.display = 'none';
    }

}

function openData1() {
    if (opened == false) {
        document.getElementById("containerdata1").style.display = 'block';
        opened = true;
    } else {
        opened = false;
        document.getElementById("containerdata1").style.display = 'none';
    }

}

function openData2() {
    if (opened == false) {
        document.getElementById("containerdata2").style.display = 'block';
        opened = true;
    } else {
        opened = false;
        document.getElementById("containerdata2").style.display = 'none';
    }

}