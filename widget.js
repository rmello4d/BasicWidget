WAF.define('BasicWidget', function() {

	//Defining the base architecture based on the waf-core/widget class
	var widget = WAF.require('waf-core/widget');

	// Creating the Basic Container widget 
	var BasicWidget = widget.create('BasicWidget');
    
	// Creating a basic widget with an SPAN tag instead of the DIV
	BasicWidget.tagname = 'span';

	return BasicWidget;
});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html
