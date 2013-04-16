function Lightbox(divId) {
	console.log('here');
	this.init();
}


Lightbox.prototype.init = function() {
	//this.enable();
    return this.build();
};

Lightbox.prototype.enable = function() {
	var _this = this;
  	return $('body').on('click', 'a[rel^=lightbox], area[rel^=lightbox]', function(e) {
    _this.start($(e.currentTarget));
    return false;
  });
};

Lightbox.prototype.build = function() {
	var $lightbox;
    overlay = this.createOverlay();      
};

Lightbox.prototype.createOverlay = function() {
	var docFrag;
	this.targetElement = document.body;
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

