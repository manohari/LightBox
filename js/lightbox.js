function Lightbox(divId,imageArray) {
	this.divId = divId;
	this.imageArray = imageArray;
	this.init();
}

Lightbox.prototype.init = function() {
	var i,parentDiv,newDiv,imgEle,imgDiv,imgLength,_this=this;
	
	imgLength = this.imageArray.length;
	parentDiv = document.getElementById(this.divId);
	newDiv = document.createElement('div');
	newDiv.className = 'set';
	newDiv.id = 'set';
	parentDiv.appendChild(newDiv);
	for (i = 0; i < imgLength; i+= 1) {				
		imgDiv = document.createElement('div');
		imgDiv.className = 'single';
		imgDiv.id = 'single';
		newDiv.appendChild(imgDiv);
		imgEle = document.createElement('img');
		imgEle.src = this.imageArray[i];
		imgEle.className = 'thumbnail';
		imgEle.addEventListener('click', function() { _this.createOverlay(this); });
		imgDiv.appendChild(imgEle);
	}
};
Lightbox.prototype.createOverlay = function(imgObj) {
	var imageTag,overlay,imageDiv,closeDiv,anchorEle,_this=this,next,prev,navDiv;
    overlay = document.createElement('div');
  	overlay.className = 'overlayElement';
  	overlay.id = 'overlayElement';
  	document.body.appendChild(overlay);  	
  	imageDiv = document.createElement('div');
  	imageDiv.className = 'lightbox';
  	imageDiv.id = 'lightbox';
  	document.body.appendChild(imageDiv);
    imageTag = document.createElement('img');
    imageTag.src = imgObj.src;
  	imageDiv.appendChild(imageTag);  	
  	/*navDiv = document.createElement('div');
  	navDiv.className = 'lbnav';
  	imageDiv.appendChild(navDiv);*/
  	next = document.createElement('a');
  	next.className = 'next';
  	next.style.display = 'none';
  	next.href = '#';
  	next.appendChild(document.createTextNode(">"));
  	next.addEventListener('click',function(){_this.next();});
  	imageDiv.appendChild(next);
  	prev = document.createElement('a');
  	prev.className = 'prev';
  	prev.style.display = 'none';
  	prev.href = '#';
  	prev.appendChild(document.createTextNode("<"));  	
  	prev.addEventListener('click',function(){_this.prev();});
  	imageDiv.appendChild(prev);
  	closeDiv = document.createElement('div');
  	closeDiv.className = 'close';
  	imageDiv.appendChild(closeDiv);
  	anchorEle = document.createElement('a');
  	anchorEle.className = 'closeCss';
  	anchorEle.href = '#';
  	anchorEle.appendChild(document.createTextNode('X'));
  	anchorEle.addEventListener('click', function() { _this.close(); });
  	closeDiv.appendChild(anchorEle);  	
};
Lightbox.prototype.close = function() {
	console.log('here');
	if (typeof(document.getElementById('overlayElement')) != 'undefined' && document.getElementById('overlayElement') != null) {
  		document.body.removeChild(document.getElementById('overlayElement'));
	}
	if (typeof(document.getElementById('lightbox')) != 'undefined' && document.getElementById('lightbox') != null) {
  		document.body.removeChild(document.getElementById('lightbox'));
	}	
};

Lightbox.prototype.prev = function() {
	console.log('prev');
}
Lightbox.prototype.next = function() {
	console.log('next');
}
