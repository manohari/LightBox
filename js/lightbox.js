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
		imgEle.src = this.imageArray[i]+'.jpg';
		imgEle.className = 'thumbnail';
		imgEle.addEventListener('click', _this.createOverlay);
		imgDiv.appendChild(imgEle);
	}
	
   
};


Lightbox.prototype.createOverlay = function() {
	var thumbnail,imageTag,overlay;
	thumbnail = this;
    overlay = document.createElement('div');
  	overlay.className = 'overlayElement';
  	document.body.appendChild(overlay);
    imageTag = document.createElement('img');
    imageTag.className = 'overlayImage';
    imageTag.src = thumbnail.src;
  	overlay.appendChild(imageTag);
  	overlay.addEventListener('click',function(){
    document.body.removeChild(overlay)  });
	
};

