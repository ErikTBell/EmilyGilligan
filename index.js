var songList = [];
var rockSongs = ["'Another One Bites the Dust'|another_one","'Piano Man'|piano_man","'Sympathy for the Devil'|sympathy",
"'Devil Went Down to Georgia'|devil_went","'House of the Rising Sun'|house_rising", "'California Dreamin'|california",
"'Dancing Days'|dancing_days","'Ghost Riders in the Sky'|ghost_riders","'Material Girl'|material_girl",
"'Pinball Wizard'|pinball","'Folsom Prison Blues'|folsom","'Hotel California'|hotel","'Freebird'|freebird",
"'Born on the Bayou'|bayou"];

var folkSongs = ["'Yellow Rose of Texas'|yellow_rose","'Amazing Grace'|amazing","'Gilligan's Island'|gilligans",
"'America the Beautiful'|america","'Supercalifragilistic'|supercali","'I'd Like to Teach the World to Sing'|teach_world",
"'Marine Corps Hymn'|marine_corp","'Yankee Doodle'|yankee","'Oh Susannah'|oh_susanna","'Greensleeves'|greensleeves",
"'I've Been Working on the Railroad'|working","'Beverly Hillbillies'|beverly","'Love Me Tender'|love_me",
"'Clementine'|clementine","'The Ship Titanic'|titanic"];

var xmasSongs= ["'God Rest Ye Merry Gentlemen'|god_rest","'Auld Lang Syne'|auld_lang",
"'Good King Wenceslaus'|good_king", "'Frosty the Snowman'|frosty","'O Little Town of Bethlehem'|little_town"]

songList= songList.concat(rockSongs);
songList= songList.concat(folkSongs);
songList= songList.concat(xmasSongs);
var numSongs = songList.length;
var numCombos= numSongs * numSongs;

// var n1 = Math.random();
// n1 = Math.floor(n1 * numSongs);
// var n2 = Math.random();
// n2 = Math.floor(n2 * numSongs);
//
// var songPic1 = songList[n1];
// const parseMe1 = songPic1.split('|');
// var songTitle1 = parseMe1[0];
// var picture1 = parseMe1[1];
//
// var songPic2 = songList[n2];
// const parseMe2 = songPic2.split('|');
// var songTitle2 = parseMe2[0];
// var picture2 = parseMe2[1];
//   var thispic1 = "images/" + picture1 + ".png";
//     var thispic2 = "images/" + picture2 + ".png";

$(".howMany").text(numSongs + " songs and " + numCombos + " remixes.");

// Heres where the button clicks

$(".gogoGadget").click(function(){
  var n1 = Math.random();
  n1 = Math.floor(n1 * numSongs);
  var n2 = Math.random();
  n2 = Math.floor(n2 * numSongs);

  var songPic1 = songList[n1];
  const parseMe1 = songPic1.split('|');
  var songTitle1 = parseMe1[0];
  var picture1 = parseMe1[1];

  var songPic2 = songList[n2];
  const parseMe2 = songPic2.split('|');
  var songTitle2 = parseMe2[0];
  var picture2 = parseMe2[1];
    var thispic1 = "images/" + picture1 + ".png";
      var thispic2 = "images/" + picture2 + ".png";
  $(".random1-text").text("Your First song is" + songTitle1);
$(".random1-image").attr("src",thispic2);
  $(".random2-text").text("Your Second song is" + songTitle2);
  $(".random2-image").attr("src",thispic1);
  // alert("Yes it works");
});

$(".mailMe").click(function(){
  $("#sendLink").slideUp();
});
