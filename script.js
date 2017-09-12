// JavaScript Document

window.onload = function() {

	var tabs = document.querySelectorAll("#tabs li");
	var blocks = document.querySelectorAll(".blocks");	
	
	var i, j;
		
	for(i = 0; i < tabs.length; i++) {
				
		tabs[i].onclick = function() {
			
			var relBlock = document.getElementById(this.getAttribute("rel"));
			var activeBlock = document.querySelector("#blocks-wrapper .active");
			var activeTab = document.querySelector("#tabs-wrapper .active");
			
			if(this.className !== "active")
			{
				activeTab.className = activeTab.className.replace("active", "");
				this.className += "active";
				
				activeBlock.className = activeBlock.className.replace(" active", "");
				relBlock.className += " active";
			}
						
		};
											
	}			

};