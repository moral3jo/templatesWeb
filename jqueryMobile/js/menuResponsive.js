$( document ).on( "pagecreate", function( event, ui ) {
	var page = $( this );
	
	$( ".jqm-navmenu-panel ul" ).listview();

	//menu
	$( "#btnMenu" ).on( "click", function() {
		$( "#navmenuleft" ).panel( "open" );
		
	});
	//buscar
	$( "#btnBuscar" ).on( "click", function() {
		page.find( "#navmenuright" ).panel( "open" );
	});
	
});
