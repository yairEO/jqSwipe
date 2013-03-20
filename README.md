jqSwipe
========

Adds minimal swipe special event for touch-enabled devices.
by minimal, I mean it just knows which direction the finger went across the screen, without caring
about the velocity, acceleration or basicly anything else than the direction.

Weight: ~1.6kb (with comments, uncompressed)

## How to use:
    <script>
       $('div').on('swipe', function(e, Dx, Dy){
           // Dx == 1 means right
           // Dx == -1 means left
           // Dy == 1 means top
           // Dy == -1 means bottom
	   });
    </script>