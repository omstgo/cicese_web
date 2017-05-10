	    function init_slider() {
        // Slider JS Block START
        function loadcssfile(filename){
            var fileref=document.createElement("link")
            fileref.setAttribute("rel", "stylesheet")
            fileref.setAttribute("type", "text/css")
            fileref.setAttribute("href", filename)
            document.getElementsByTagName("head")[0].appendChild(fileref)
        }
        loadcssfile("https://code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css");
        /* Check if jQuery and jQueryUI have been loaded
           otherwise load with require.js */
        var jQuery = window.jQuery,
            // check for old versions of jQuery
            oldjQuery = jQuery && !!jQuery.fn.jquery.match(/^1\.[0-4](\.|$)/),
            jquery_path = '',
            paths = {},
            noConflict;
        var jQueryUI = jQuery.ui;
        // check for jQuery
        if (!jQuery || oldjQuery) {
            // load if it's not available or doesn't meet min standards
            paths.jQuery = jQuery;
            noConflict = !!oldjQuery;
        } else {
            // register the current jQuery
            define('jquery', [], function() { return jQuery; });
        }
        if (!jQueryUI) {
            paths.jQueryUI = "https://code.jquery.com/ui/1.10.4/jquery-ui.min"
        } else {
            define('jQueryUI', [], function() { return jQuery.ui; });
        }
        paths.underscore = "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min";
        var jquery_require = {
            paths: paths,
            shim: {
                "jQueryUI": {
                    exports:"$",
                    deps: ['jquery']
                },
                "underscore": {
                    exports: '_'
                }
            }
        }
        require.config(jquery_require);
        require(["jQueryUI", "underscore"], function(jUI, _){
            if (noConflict) $.noConflict(true);
            var vals = ['2015-01-01T00:00:00.000000000', '2015-02-01T00:00:00.000000000', '2015-03-01T00:00:00.000000000', '2015-04-01T00:00:00.000000000', '2015-05-01T00:00:00.000000000', '2015-06-01T00:00:00.000000000', '2015-07-01T00:00:00.000000000', '2015-08-01T00:00:00.000000000', '2015-09-01T00:00:00.000000000', '2015-10-01T00:00:00.000000000', '2015-11-01T00:00:00.000000000', '2015-12-01T00:00:00.000000000', '2016-01-01T00:00:00.000000000'];
            var next_vals = {};
            if (false && vals.constructor === Array) {
                var min = parseFloat(vals[0]);
                var max = parseFloat(vals[vals.length-1]);
                var step = 1;
                var labels = [min];
            } else {
                var min = 0;
                if (false) {
                    var max = Object.keys(vals).length - 1;
                } else {
                    var max = vals.length - 1;
                }
                var step = 1;
				var labels = ['2015-01-01', '2015-02-01', '2015-03-01', '2015-04-01', '2015-05-01', '2015-06-01', '2015-07-01', '2015-08-01', '2015-09-01', '2015-10-01', '2015-11-01', '2015-12-01', '2016-01-01'];
            }
			function adjustFontSize(text) {
				var width_ratio = (text.parent().width()/8)/text.val().length;
				var size = Math.min(0.9, Math.max(0.6, width_ratio))+'em';
				text.css('font-size', size);
			}
            var slider = $('#_anim_widget4578042206cf40ec9be6771bc5f0c599_Date');
			slider.slider({
                animate: "fast",
                min: min,
                max: max,
                step: step,
                value: min,
                dim_vals: vals,
                dim_labels: labels,
                next_vals: next_vals,
                slide: function(event, ui) {
                    var vals = slider.slider("option", "dim_vals");
                    var next_vals = slider.slider("option", "next_vals");
                    var labels = slider.slider("option", "dim_labels");
                    if (false) {
					    var dim_val = ui.value;
					    if (vals.constructor === Array) {
						   var label = ui.value;
						} else {
						   var label = labels[ui.value];
						}
                    } else {
                        var dim_val = vals[ui.value];
						var label = labels[ui.value];
                    }
					var text = $('#textInput4578042206cf40ec9be6771bc5f0c599_Date');
					text.val(label);
					adjustFontSize(text);
                    anim4578042206cf40ec9be6771bc5f0c599.set_frame(dim_val, 0);
                    if (Object.keys(next_vals).length > 0) {
                        var new_vals = next_vals[dim_val];
                        var next_widget = $('#_anim_widget4578042206cf40ec9be6771bc5f0c599_');
                        update_widget(next_widget, new_vals);
                    }
                }
            });
            slider.keypress(function(event) {
                if (event.which == 80 || event.which == 112) {
                    var start = slider.slider("option", "value");
                    var stop =  slider.slider("option", "max");
                    for (var i=start; i<=stop; i++) {
                        var delay = i*50;
                        $.proxy(function doSetTimeout(i) { setTimeout($.proxy(function() {
                            var val = {value:i};
                            slider.slider('value',i);
                            slider.slider("option", "slide")(null, val);
                        }, slider), delay);}, slider)(i);
                    }
                }
                if (event.which == 82 || event.which == 114) {
                    var start = slider.slider("option", "value");
                    var stop =  slider.slider("option", "min");
                    var count = 0;
                    for (var i=start; i>=stop; i--) {
                        var delay = count*50;
                        count = count + 1;
                        $.proxy(function doSetTimeout(i) { setTimeout($.proxy(function() {
                            var val = {value:i};
                            slider.slider('value',i);
                            slider.slider("option", "slide")(null, val);
                        }, slider), delay);}, slider)(i);
                    }
                }
            });
			var textInput = $('#textInput4578042206cf40ec9be6771bc5f0c599_Date')
			textInput.val(labels[0]);
			adjustFontSize(textInput);
        });
		}
        $(document).ready(init_slider)
        // Slider JS Block END
