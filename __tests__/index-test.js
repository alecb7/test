jest
    .dontMock('fs')
    .dontMock('jquery');

var $ = require('jquery');
var html = require('fs').readFileSync('./index.html').toString();

describe('index', function() {
    
    it('gives list class to names list', function() {
   
        document.documentElement.innerHTML = html;
        
        expect($('#names').hasClass('list-group')).toBeTruthy();
    });
});