The typewriter effect.
=================

### Why yet another plugin for something that simple?
Most plugins similar to this one have the same basic functionality: type text/html at a certain speed and fire a callback once done.
While working on a project of mine, I needed some more advanced stuff. Like the ability to pause, resume and stop the typewriter. 
Also, when typing something longer than a view characters, you'll notice everything is being typed at an inhuman constant speed.
To compensate for that, this plugin has the ability to randomize the interval between keystrokes.

### Caret
This plugin does not provide methods for simulating a caret. There are simply too many ways to mimic a caret.
It could be a plain text underscore or vertical bar, it could be a span element or it could be an image. 
Should it blink? At what speed? Should it be visible longer than it is invisible? How about a small fade? 
Too many variables that differ per usecase to be covered by this plugin.

You can create your own caret by placing it right after the typewriter target:
``` html
<span id="typeMe"></span>
<span id="caret">|</span>

<script>
  // A simple blink
  setInterval(function() {
    $("#caret").toggle();
  }, 600);
  
  $("#typeMe").typewriter("Some text. I don't know.");
</script>
```


#$.fn.typewriter(text, options)
Creates a typewriter object for the first matching element in the set.
###Arguments
- `text`: The text to type. Duh.
- `options`: An object containing the options and callbacks to control the typewriter:
  - `delay`: Interval between the simulated keystrokes (in milliseconds). *[default: 60]*
  - `initialDelay`: How much time to wait before doing anything (in milliseconds). *[default: 0]*
  - `createPaused`: Whether the typewriter should be created in a paused state. *[default: false]*
  - `html`: Whether the `text` argument should be interpreted as HTML or not. Has no use on input and textarea elements. *[default: false]*
  - `randomizeDelay`: Whether the interval between keystrokes should be randomized to mimic a real person typing. The random times are based on the `delay` option, so the average typing speed remains the same. *[default: false]*
  - `onType`: Gets called after each keystroke. *[default: $.noop]*
  - `onComplete`: Gets called when the typewriter has reached the end of the string. This can only be once in the lifetime of the typewriter object. *[default: $.noop]*
  - `onPause`: Notifies when the typewriter pauses. *[default: $.noop]*
  - `onResume`: Notifies when the typewriter resumes. *[default: $.noop]*
  - `onStop`: Notifies when the typewriter stops. This can only be once in the lifetime of the typewriter object. *[default: $.noop]*
 
###Return value
A typewriter object described in the next section. 


#Typewriter
##Properties
- `options`: A shallow clone of the options object passed into the $.fn.typewriter function. The object is augmented with the default values.
- `target`: A jQuery object referencing the element to which the typewriter is typing in.
- `typing`: Indicating whether the typewriter is currently typing.
- `paused`: Indicating whether the typewriter is currently paused.

##Methods
- `pause()`: Pauses the typewriter.
- `resume()`: Resumes the typewriter.
- `stop()`: Stops the typewriter.


#Example
Todo...


#License
# License

**Copyright (c) 2013, Dave Bakker**  
**All rights reserved.**  

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

