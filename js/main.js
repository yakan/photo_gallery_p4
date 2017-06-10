// run lightGallery jquery plugin
$(document).ready(function() {
  $(".grid").lightGallery({
    selector: ".cell",
    download: false,
    thumbnail: false
  });
});

//run automatic search function
function autoSearch() {
  var input, filter;
  //get the input field as $object
  input = $('input[type=search]');
  // case insensitivity
  filter = input.val().toLowerCase();
  //get the anchor elements as an array of objects
  var anchorsGallery = $('div[data-lightbox=gallery]');
  //get the number of anchors gallery on page
  var numOfAnchors = anchorsGallery.length;

  //loop gallery on page
  for (var i = 0; i < numOfAnchors; i++) {
    //get the data-title attribute (caption) and set the caption insensitive
    var dataTitle =
    document.getElementsByClassName('cell')[i].getAttribute('data-title').toLowerCase();
    // match data title with search input or filter
    if (dataTitle.indexOf(filter) == -1) {
      $(anchorsGallery[i]).hide('1000');
    } else {
      $(anchorsGallery[i]).show('1000');
    }
  }
}
