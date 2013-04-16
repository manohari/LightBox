function Lightbox(divId,imageArray) {
	this.divId = divId;
	this.imageArray = imageArray;
	this.init();
}

Lightbox.prototype.init = function() {
	var docFrag,i,parentDiv,newDiv,imgEle,imgDiv,imgLength,attributes;
	imgLength = this.imageArray.length;
	parentDiv = document.getElementById(this.divId);
	newDiv = this.createElement('div', {
		'class':'set',
		'id' :'set'
	});
	parentDiv.appendChild(newDiv);
	attributes = {
			'class':'single',
			'id' :'single'
	}	
	for (i = 0; i < imgLength; i+= 1) {			
				
		imgDiv = this.createElement('div', attributes);
		newDiv.appendChild(imgDiv);
		imgEle = this.createElement('img', {
		'src':this.imageArray[i]+'.jpg'
		});
		imgDiv.appendChild(imgEle);		
		
	}		
	 this.build();   
};
Lightbox.prototype.build = function() {
	var $lightbox;
    overlay = this.createOverlay();      
};
Lightbox.prototype.createOverlay = function() {
	var docFrag;
	docFrag = document.createDocumentFragment();
	docFrag.appendChild(this.createElement('div', {
		'id':'lightboxOverlay'
	}));
	docFrag.appendChild(this.createElement('div', {
		'id':'lightbox'
	}));
	docFrag.appendChild(this.createElement('div', {
		'id':'lb-outerContainer'
	}));
	docFrag.appendChild(this.createElement('div', {
		'id':'lb-Container'
	}));
	docFrag.appendChild(this.createElement('div', {
		'id':'lb-Container'
	}));
	docFrag.appendChild(this.createElement('img', {
		'id':'lb-image'
	}));
	
	document.body.appendChild(docFrag);
	
};

Lightbox.prototype.createElement = function (htmlEntity,attributes) {
	var elVar, ind;
    elVar = document.createElement(htmlEntity);
    if(attributes) {
        for (ind in attributes) {
            elVar[ind] = attributes[ind];
        }
    }
    return elVar;
};

