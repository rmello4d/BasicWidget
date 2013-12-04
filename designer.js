(function(BasicWidget) {

	// adding the list of attributes available in your property panel
	BasicWidget.addAttributes([{
 		'name':'data-width',
		'description':'Width',
  		'defaultValue': '250px'
	},{
 		'name':'data-height',
   		'description':'Height',
 		'defaultValue': '250px'
	}]);  
      
	// adding the action when we Resize the widget, so we will also update the 
	// property panel to reflect the current size of the widget  
	BasicWidget.on('Resize', function(event) {
		this.studioCss('height', event.size.height);
		this.studioCss('width', event.size.width); 
		this.studioVal('data-width', event.size.width + 'px');
		this.studioVal('data-height', event.size.height + 'px');	 	
		this.studioPanelRefresh();
	});
    
	// adding the action when the widget is displayed in the Wakanda Studio 
	BasicWidget.on('Display', function (attributes) {
		//display width and height
		this.studioCss('width', attributes['data-width']); 	
		this.studioCss('height', attributes['data-height']); 		  
	});

});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3870.html.studioCss('height', attributes['data-height']); 		  
	});

})();

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3870.html