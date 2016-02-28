function FPSController(FPS, update_function) {
    var FRAMES_SAVED = 60;
    var frames = [];
    var frame_count = 0;
    var lastFPS = FPS;

    var run = function() {
        setTimeout(run, 1000 / FPS);

        frame_count++;

        frames.push( (new Date()).getTime() );
        if(frames.length > FRAMES_SAVED) frames.shift();

        update_function();
    };

    this.run = run;

    this.getFrame = function() {
        return frame_count;
    };

    this.getFPS = function() {
        return 1000 * frames.length/(frames[frames.length - 1] - frames[0]);
    };

    this.getSlowFPS = function() {
        if(frame_count % 10 == 0) {
            lastFPS = this.getFPS();
        }

        return lastFPS;
    };

    this.getTargetFPS = function() {
        return FPS;
    };

    this.toString = function() {
        return JSON.stringify(frames);
    };
};
