(function(document) {
    var metas = document.getElementsByTagName('meta'),
        changeViewportContent = function(content) {
            for (var i = 0; i < metas.length; i++) {
                if (metas[i].name == "viewport") {
                    metas[i].content = content;
                }
            }
        },
        initialize = function() {
            changeViewportContent("width=device-width, minimum-scale=1.0, maximum-scale=1.0");
        },
        gestureStart = function() {
            changeViewportContent("width=device-width, minimum-scale=0.25, maximum-scale=1.6");
        },
        gestureEnd = function() {
            initialize();
        };


    if (navigator.userAgent.match(/iPhone/i)) {
        initialize();

        document.addEventListener("touchstart", gestureStart, false);
        document.addEventListener("touchend", gestureEnd, false);
    }

    const images = document.querySelectorAll('.image-container img');


        images.forEach((image) => {
  
  image.addEventListener('mouseenter', () => {
    // Scale the image when hovered over
    image.style.transform = 'scale(1.2)';
    image.style.transition = 'transform 0.3s ease';
  });

  // Add event listener for mouse leave
  image.addEventListener('mouseleave', () => {
    // Reset the image scale when mouse leaves
    image.style.transform = 'scale(1)';
    image.style.transition = 'transform 0.3s ease';
  });
});
})(document);
