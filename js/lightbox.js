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
	var imageTag,overlay,imageDiv,closeDiv,anchorEle,_this=this,next,prev,navDiv,leftDiv,rightDiv;
    overlay = document.createElement('div');
  	overlay.className = 'overlayElement';
  	overlay.id = 'overlayElement';
  	document.body.appendChild(overlay);  	
  	
  	//image Div
  	imageDiv = document.createElement('div');
  	imageDiv.className = 'lightbox';
  	imageDiv.id = 'lightbox';
  	document.body.appendChild(imageDiv);
  	
  	//leftdiv
  	leftDiv = document.createElement('div');
  	leftDiv.className = 'leftNav';
  	leftDiv.addEventListener('mouseover',function(){_this.showLeftNavigation();});
  	imageDiv.appendChild(leftDiv);
  	prev = document.createElement('a');
  	prev.className = 'prev';
  	prev.id = 'prev';
  	prev.style.display = 'none';
  	prev.href = '#';
  	prev.appendChild(document.createTextNode("<"));  
  	prev.addEventListener('click',function(){_this.prev(this);});
  	leftDiv.appendChild(prev);
  	
  	//rightDiv
  	rightDiv = document.createElement('div');
  	rightDiv.className = 'rightNav';
  	rightDiv.addEventListener('mouseover',function(){_this.showRightNavigation();});
  	imageDiv.appendChild(rightDiv);
  	next = document.createElement('a');
  	next.className = 'next';
  	next.id = 'next';
  	next.style.display = 'none';
  	next.href = '#';
  	next.appendChild(document.createTextNode(">"));  	
  	next.addEventListener('click',function(){_this.next(this);});
  	rightDiv.appendChild(next);
  	
    imageTag = document.createElement('img');
    imageTag.src = imgObj.src;
  	imageDiv.appendChild(imageTag);  
  	
  	closeDiv = document.createElement('div');
  	imageDiv.appendChild(closeDiv);
  	anchorEle = document.createElement('a');
  	anchorEle.href = '#';
  	anchorEle.appendChild(document.createTextNode('X'));
  	anchorEle.addEventListener('click',function(){_this.close();});
  	closeDiv.appendChild(anchorEle);  	
};

Lightbox.prototype.close = function() {
	if (typeof(document.getElementById('overlayElement')) != 'undefined' && document.getElementById('overlayElement') != null) {
  		document.body.removeChild(document.getElementById('overlayElement'));
	}
	if (typeof(document.getElementById('lightbox')) != 'undefined' && document.getElementById('lightbox') != null) {
  		document.body.removeChild(document.getElementById('lightbox'));
	}	
};

Lightbox.prototype.prev = function(obj) {	
	var _this = this;
	console.log(this);
	
}
Lightbox.prototype.next = function() {
}


Lightbox.prototype.showLeftNavigation = function() {
	if (typeof(document.getElementById('prev')) != 'undefined' && document.getElementById('prev') != null) {
		document.getElementById('prev').style.display = 'block';
		document.getElementById('next').style.display = 'none';
	}
}
Lightbox.prototype.showRightNavigation = function() {
	if (typeof(document.getElementById('next')) != 'undefined' && document.getElementById('next') != null) {
		document.getElementById('next').style.display = 'block';
		document.getElementById('prev').style.display = 'none';
	}
}
