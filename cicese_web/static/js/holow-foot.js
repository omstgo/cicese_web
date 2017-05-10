/* Instantiate the MPLSelectionWidget class. */
/* The IDs given should match those used in the template above. */
(function() {
	if (jQuery.ui !== undefined) {
		$("#display_area4578042206cf40ec9be6771bc5f0c599").resizable({
			resize: function(event, ui) {
				$("#widget_area4578042206cf40ec9be6771bc5f0c599").width($(this).parent().width()-ui.size.width);
			}
		});
		$("#widget_area4578042206cf40ec9be6771bc5f0c599").resizable();
	}
    var widget_ids = new Array(1);
    
    widget_ids[0] = "_anim_widget4578042206cf40ec9be6771bc5f0c599_Date";
    
    var dim_vals = ['2015-01-01T00:00:00.000000000'];
    var keyMap = {"('2015-01-01T00:00:00.000000000',)": 0, "('2015-02-01T00:00:00.000000000',)": 1, "('2015-03-01T00:00:00.000000000',)": 2, "('2015-04-01T00:00:00.000000000',)": 3, "('2015-05-01T00:00:00.000000000',)": 4, "('2015-06-01T00:00:00.000000000',)": 5, "('2015-07-01T00:00:00.000000000',)": 6, "('2015-08-01T00:00:00.000000000',)": 7, "('2015-09-01T00:00:00.000000000',)": 8, "('2015-10-01T00:00:00.000000000',)": 9, "('2015-11-01T00:00:00.000000000',)": 10, "('2015-12-01T00:00:00.000000000',)": 11, "('2016-01-01T00:00:00.000000000',)": 12};
    var notFound = "<h2 style='vertical-align: middle>No frame at selected dimension value.<h2>";
    function create_widget() {
        setTimeout(function() {
            anim4578042206cf40ec9be6771bc5f0c599 = new MPLSelectionWidget(frame_data, "4578042206cf40ec9be6771bc5f0c599", widget_ids,
				keyMap, dim_vals, notFound, false, "default",
				true, "./json_figures/", false);
        }, 0);
    }
    


    create_widget();
    


})();