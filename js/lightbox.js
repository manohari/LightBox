function Lightbox(divId,imageArray) {
	this.divId = divId;
	this.imageArray = imageArray;
	this.init();
}

Lightbox.prototype.init = function() {
	var docFrag,i,parentDiv,newDiv,imgEle,imgDiv,imgLength,attributes,_this=this;
	
	imgLength = this.imageArray.length;
	parentDiv = document.getElementById(this.divId);
	newDiv = document.createElement('div');
	newDiv.className = 'set';
	newDiv.id = 'set';
	parentDiv.appendChild(newDiv);
	attributes = {
			'className':'single'
		}	
	for (i = 0; i < imgLength; i+= 1) {				
		imgDiv = document.createElement('div');
		imgDiv.className = 'single';
		imgDiv.id = 'single';
		newDiv.appendChild(imgDiv);
		imgEle = document.createElement('img');
		imgEle.src = this.imageArray[i];
		imgEle.className = 'thumbnail';
		imgEle.addEventListener('click', _this.createOverlay);
		imgDiv.appendChild(imgEle);
	}
};
Lightbox.prototype.createOverlay = function() {
	var thumbnail,imageTag,overlay,imageDiv,closeDiv,anchorEle,textNode;
	thumbnail = this;
    overlay = document.createElement('div');
  	overlay.className = 'overlayElement';
  	document.body.appendChild(overlay);  	
  	imageDiv = document.createElement('div');
  	imageDiv.className = 'lightbox';
  	document.body.appendChild(imageDiv);
    imageTag = document.createElement('img');
    imageTag.src = thumbnail.src;
  	imageDiv.appendChild(imageTag);
  	closeDiv = document.createElement('div');
  	closeDiv.className = 'close';
  	imageDiv.appendChild(closeDiv);
  	anchorEle = document.createElement('a');
  	anchorEle.className = 'closeCss';
  	anchorEle.href = '#';
  	textNode = document.createTextNode('X');
  	anchorEle.appendChild(textNode);
  	closeDiv.appendChild(anchorEle);
  	anchorEle.addEventListener('click',function(){
    	document.body.removeChild(imageDiv);
    	document.body.removeChild(overlay);
    });
	
};

