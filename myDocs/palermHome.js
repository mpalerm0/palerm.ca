//makes my subheadings bounce around, theyll all stay within center half of total screen 


document.addEventListener('DOMContentLoaded', function() {
    var elements = document.body.querySelectorAll('body > *');
    var positionedElements = [];

    elements.forEach(function(element) {

        var foundSpot = false;

        while (!foundSpot) {
            var x = window.innerWidth/4+ Math.random() * (window.innerWidth -(window.innerWidth/2));
            var y = window.innerHeight/4+ Math.random() * (window.innerHeight -(window.innerHeight/2));

            element.style.position = 'absolute';
            element.style.left = x + 'px';
            element.style.top = y + 'px';

            var rect1 = element.getBoundingClientRect();
            var overlap = positionedElements.some(function(posEl) {
                var rect2 = posEl.getBoundingClientRect();
                return !(rect1.right < rect2.left || 
                         rect1.left > rect2.right || 
                         rect1.bottom < rect2.top || 
                         rect1.top > rect2.bottom);
            });

            if (!overlap) {
                positionedElements.push(element);
                foundSpot = true;
            }
        }
    });
});
