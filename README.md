h1. jQuery Form Utils

Packages various useful Javascript form and other UI utils into Rails 3 assets for the asset pipeline. 
This gem makes it much easier to use these javascript enhancements in a Rails 3 app :)

h3. In-field labels

$(document).ready(function(){
  $("label").inFieldLabels();
});

$("label").inFieldLabels({ optionName:value });</pre>

fadeOpacity: Value between 0.1 and 1.0. When a field is focussed, its label is animated to this opacity. Defaults to 0.5

fadeDuration: Time in milliseconds When an animation occurs, it uses this setting to determine duration. Defaults to 300.

h3. Highlight active form fields

See http://www.keyframesandcode.com/resources/javascript/jQuery/demos/highlight-demo.html

Highlights the part of the form currently in focus.

h3. Tipsy

See http://onehackoranother.com/projects/jquery/tipsy/

Simple, flexible tooltips plugin

h3. Autotab

http://www.mathachew.com/sandbox/jquery-autotab/

Auto-tab between form fields when field is complete

$(document).ready(function() {
	$('#area_code, #number1, #number2').autotab_magic().autotab_filter('numeric');
});

.autotab_magic(): Automatically assign tabbing rules to all selected elements.

Example
-------
$(document).ready(function() {
    $(':input').autotab_magic();
    // OR
    $('#area_code, #number1, #number2').autotab_magic();
});

.autotab_filter(string): Apply the specified filter to an element.

Example
-------
$(document).ready(function() {
    $('#area_code, #number1, #number2').autotab_filter('numeric');
    $('#key1, #key2, #key3, #key4, #key5').autotab_filter('alpha');
});

Options
-------
all (default): Any character
text: Any character except numbers 0 through 9
alpha: A through Z
numeric: 0 through 9
number: Identical to numeric
alphanumeric: A through Z and 0 through 9
custom: A custom regular expression to be used along with the pattern setting.

.autotab_filter(settings): Apply the key/value pairs to configure filter options to an element.

Example
$(document).ready(function() {
    $('#area_code, #number1, #number2').autotab_filter({
        format: 'alphanumeric',
        uppercase: true
    });
});

Settings
--------
format: The filtering method of the text field. Available filtering options are listed above.
uppercase: Converts any text to uppercase.
lowercase: Converts any text to lowercase.
nospace:  Removes any spaces.
pattern:  A regular expression pattern to use for custom formats.

.autotab(settings): Apply the key/value pairs to configure auto-tab and filter options to an element. Filtering settings are optional.

Example
-------
$(document).ready(function() {
    // This example achieves the same result as Step 3 under Basic Usage.
    $('#area_code').autotab({ target: 'number1', format: 'numeric' });
    $('#number1').autotab({ target: 'number2', format: 'numeric', previous: 'area_code' });
    $('#number2').autotab({ previous: 'number1', format: 'numeric' });
});

Settings
--------
All listed settings under .autotab_filter()
maxlength: Determines the maximum number of characters allowed in a text field. Passing maxlength will override the hardcoded maxlength attribute in the HTML.

target: The text field to auto-tab to when the maxlength has been reached on the current text field.

previous: The text field to auto-tab to when the Backspace key has been pressed in an empty text field. You can also press and hold Backspace to continue auto-tabbing in reverse.

h3. Custom inputs (radio and checkboxes)


We start with basic HTML for each input that follows web standards conventions:
assigned a unique id and value to each input
paired the input with a label element
included a "for" attribute on each label that references the preceding input's id
Each radio button input also needs a common name attribute to group it with a set.

<form>	
	<fieldset>
		<legend>Which genres do you like?</legend>

		<input type="checkbox" name="genre" id="check-1" value="action" />
		<label for="check-1">Action / Adventure</label>
		
		. . .
	</fieldset>		
	<fieldset>
		<legend>Caddyshack is the greatest movie of all time, right?</legend>

		<input type="radio" name="opinions" id="radio-1" value="1" />
		<label for="radio-1">Totally</label>

		. . .
	</fieldset>
</form>

Pairing the inputs and labels correctly is essential to how this plugin works. As stated in the HTML spec, "When a LABEL element receives focus, it passes the focus on to its associated control." Browsers have standardized this behavior so that when you click a label, the click is passed on to the input — in other words, the label and input act as a single element when marked up this way. Because we don't have to interact with the input directly, we can hide it from view with CSS and apply styles to the label to make it look like a customized checkbox or radio button.

When the page loads, the plugin script finds each input/label pair and wraps it in a div. Each wrapper div is assigned a class to it based on the type of input it contains:

<div class="custom-checkbox">
	<input id="check-3" type="checkbox" value="epic" name="genre"/>
	<label class="" for="check-3">Epic / Historical</label>
</div>

Use:

$('input').customInput();

Customize images for radio and checkbox

.custom-checkbox label { background: url(/assets/custom_input/checkbox.gif) no-repeat; }
.custom-radio label { background: url(/assets/custom_input/radiobutton.gif) no-repeat; }

h3. Message

Easily display feedback messages as an unobstrusive overlay. The message fades away automatically after some time, avoiding the need to click an “ok” button or something similar. The user can speed up hiding of the message by moving the mouse or clicking anywhere.

The interaction is based on Aza Raskin’s Humanized Message.

See http://bassistance.de/jquery-plugins/jquery-plugin-message/

h3. Justify labels

justifyLabels('form#login');

h3. Validation engine

See https://github.com/posabsolute/jQuery-Validation-Engine

h2. Contributing to Jquery Form Utils
 
* Check out the latest master to make sure the feature hasn't been implemented or the bug hasn't been fixed yet.
* Check out the issue tracker to make sure someone already hasn't requested it and/or contributed it.
* Fork the project.
* Start a feature/bugfix branch.
* Commit and push until you are happy with your contribution.
* Make sure to add tests for it. This is important so I don't break it in a future version unintentionally.
* Please try not to mess with the Rakefile, version, or history. If you want to have your own version, or is otherwise necessary, that is fine, but please isolate to its own commit so I can cherry-pick around it.

h2. Copyright

Copyright (c) 2012 Kristian Mandrup. See LICENSE.txt for
further details.

