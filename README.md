jqSwipe
========

**Deprecated** - please use: https://github.com/yairEO/touchy

Adds minimal swipe special event for touch-enabled devices.
by minimal, I mean it just knows which direction the finger went across the screen, without caring
about the velocity, acceleration or basicly anything else than the direction.

Weight: ~1.6kb (with comments, uncompressed)

## Test page (QR [URL](http://htmlpreview.github.com/?https://github.com/yairEO/jqSwipe/blob/gh-pages/test.html)):
![QR URL](https://lh3.googleusercontent.com/-IAHRFq5opc8/UUoQJ6MNQ_I/AAAAAAAAC_k/am_hzGkiEZE/s250/qrcode.png)

## How to use:
    <script>
       $('div').on('swipe', function(e, Dx, Dy){
           // Dx == 1 means right
           // Dx == -1 means left
           // Dy == 1 means top
           // Dy == -1 means bottom
	   });
    </script>