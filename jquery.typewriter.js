/*
Copyright (c) 2013, Dave Bakker
All rights reserved.

Homepage and license at: http://github.com/DaveBakker/jquery-typewriter
*/

(function($){
    $.fn.typewriter = function(text, options) {
        text += "";

        options = $.extend({}, {
            html: false,
            initialDelay: 0,
            delay: 60,
            randomizeDelay: false,
            createPaused: false,
            onType: $.noop,
            onComplete: $.noop,
            onStop: $.noop,
            onPause: $.noop,
            onResume: $.noop,
        }, options);

        var stop = false;
        var paused = options.createPaused;

        var target = $();
        if (this.length) target = $(this[0]);

        var typewriter = {
            typing: false,
            paused: paused,
            options: options,
            target: target,
            stop: function() {
                stop = true;
                typewriter.typing = true;
                options.onStop();
            },
            pause: function() {
                if (!paused) {
                    paused = true;
                    typewriter.paused = true;
                    options.onPause();
                }
            },
            resume: function() {
                if (paused) {
                    paused = false;
                    typewriter.paused = false;
                    options.onResume();
                }
            }
        };

        if (target.length) return typewriter;

        typewriter.typing = true;

        var charIndex = 0;

        var contentFunction = options.html ? "html" : "text";

        var elementType = target.prop("tagName").toLowerCase();
        if (elementType === "input" || elementType === "textarea") contentFunction = "val";

        setTimeout(function() {

            function timeout() {

                if (stop) return;

                var delay = options.delay;

                if (!paused) {

                    if (options.html) {
                        if (text.charAt(charIndex) === "<") {
                            charIndex = text.indexOf(">", charIndex);

                        } else if (text.charAt(charIndex) === "&") {
                            charIndex = text.indexOf(";", charIndex);
                        }
                    }


                    target.empty()[contentFunction]( text.substr(0, charIndex+1) );

                    options.onType();

                    if (options.randomizeDelay) {
                        if (!$.trim(text.charAt(charIndex))) {
                            if (Math.random() > 0.7) delay *= 10;
                        } else {
                            delay *= Math.random()*2;
                        }
                    }

                    charIndex++;
                    
                    if (charIndex >= text.length) {
                        typewriter.typing = false;
                        options.onComplete();

                        return;
                    }
                }
                console.log(delay);
                setTimeout(timeout, delay);
            }

            timeout();

        }, options.initialDelay);

        return typewriter;

    };
}(jQuery));
