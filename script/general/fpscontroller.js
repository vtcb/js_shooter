/** FPS Controller
 *
 * Calls a callback function at a controlled rate.
 *
 * FPS     : Frames Per Second.
 *           Rate of which the callback function wiil be called.
 * callback: Callback function.
 * args    : Arguments for the callback function.
 */
var FPSController = function(FPS, callback, args) {
    var FRAMES_SAVED = 60;
    var frames = [];
    var frame_count = 0;
    var lastFPS = FPS;

    return {
        run          : function run() {
            setTimeout(run, 1000 / FPS);

            frame_count++;

            frames.push( (new Date()).getTime() );
            if(frames.length > FRAMES_SAVED) frames.shift();

            callback(args);
        },

        getFrame     : function() {
            return frame_count;
        },

        getFPS       : function() {
            return 1000 * frames.length/(frames[frames.length - 1] - frames[0]);
        },

        getSlowFPS   : function() {
            if(frame_count % 10 == 0) {
                lastFPS = this.getFPS();
            }

            return lastFPS;
        },

        getTargetFPS : function() {
            return FPS;
        }
    };
};
