/**
 * jQuery Plugin to add basic "swipe" support on touch-enabled devices
 * 
 * @author Yair Even Or
 * @version 1.0.0 (March 20, 2013)
 */
(function($){ 
	//if( 'ontouchstart' in document.documentElement )
	$.event.special.swipe = {
		setup: function(){
			$(this).bind('touchstart', $.event.special.swipe.handler);
		},

		teardown: function(){
			$(this).unbind('touchstart', $.event.special.swipe.handler);
		},

		handler: function(event){
			var args = [].slice.call( arguments, 1 ), // clone arguments array, remove original event from cloned array
				touches = event.originalEvent.touches,
				startX, startY,
				deltaX = 0, deltaY = 0,
				that = this;

			event = $.event.fix(event);

			if( touches.length == 1 ){
				startX = touches[0].pageX;
				startY = touches[0].pageY;
				this.addEventListener('touchmove', onTouchMove, false);
			}
				
			function cancelTouch(){
				that.removeEventListener('touchmove', onTouchMove);
				startX = startY = null;
			}	
			 
			function onTouchMove(e){
				e.preventDefault();

				var Dx = startX - e.touches[0].pageX,
					Dy = startY - e.touches[0].pageY;

				if( Math.abs(Dx) >= 20 ){
					cancelTouch();
					deltaX = (Dx > 0) ? -1 : 1;
				}
				else if( Math.abs(Dy) >= 20 ){
					cancelTouch();
					deltaY = (Dy > 0) ? 1 : -1;
				}
				
				event.type = "swipe";
				args.unshift(event, deltaX, deltaY); // add back the new event to the front of the arguments with the delatas
				return ($.event.dispatch || $.event.handle).apply(that, args);
			}
		}
	};
})(window.jQuery || window.Zepto);