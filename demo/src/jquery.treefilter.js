// Endless tree structured UL > LI > UL 
var treeFilter = function(el, options) {

	var defaults = {
		offsetLeft : 20,
		searcher : null,
		expanded : false,
		multiSelect : false
	};

	// Public Variables
	var plugin = this;

	plugin.settings = {};

	// Main Function
	var init = function() {
		plugin.settings = $.extend({}, defaults, options);
		plugin.el = el;

		// set class names to tags
		el.addClass("tf-tree");
		el.find("li").addClass("tf-child-true");
		el.find("li").css("padding-left", plugin.settings.offsetLeft);
		el.find("li div:only-child").parent().removeClass("tf-child-true");
		el.find("li div:only-child").parent().addClass("tf-child-false");

		// if the list has a checkbox, block event bubbling.
		el.find("input[type=checkbox]").click(function(e) {
			e.stopPropagation();
		});

		// set click event.
		el.find("li.tf-child-true").children("div").click(function(e) {
			$(this).parent().toggleClass("tf-open");
		});

		// toggle effect when multiselect enabled.
		el.find("li.tf-child-false").click(function() {
			if (plugin.settings.multiSelect != true) {
				el.find("li.tf-selected").removeClass("tf-selected");
			}
			$(this).toggleClass("tf-selected");
		});

		if (plugin.settings.searcher) {
			searcher();
		}
	};

	// PUBLIC FUNCTION
	plugin.openAll = function() {
		plugin.el.find("li.tf-child-true").parent().addClass("tf-open");
	};
	plugin.closeAll = function() {
		plugin.el.find("li.tf-child-true").parent().removeClass("tf-open");
	};

	// PRIVATE FUNCTION
	// fired when type on search input field.
	var searcher = function() {
		$(plugin.settings.searcher).keyup(function() {
			if ($(this).val().length == 0) {
				plugin.el.find(".tf-search-result").removeClass("tf-search-result");
				// memory("out", plugin.table);
			} else {
				plugin.closeAll();
				plugin.el.find("li.tf-open").removeClass("tf-open");
				plugin.el.find("li.tf-search-result").removeClass("tf-search-result");
				plugin.el.find("li:containsIN('" + $(this).val() + "')").addClass("tf-search-result");
				plugin.el.find("li.tf-search-result").parent().addClass("tf-search-result");
			}
		});
	};

	init();
};