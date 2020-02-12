let songNames = []

$("#add").click(function(){
    let song = $("#song").val();
    songNames.push(song);
    $("#songs").append(song)
})

let artists = []
$("#add").click(function(){
    let artist = $("#artist").val();
    artists.push(artist);
    $("#artists").append(artist);
})

let songLength = []
$("#add").click(function(){
    let length = $("#length").val();
    songLength.push(length);
    $("#lengths").append(length);
})











