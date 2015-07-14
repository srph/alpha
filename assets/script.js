/**
 * Append anchors to the headings, like Github.
 */
;(function(headings) {
  for ( var i = 0 ; i < headings.length; i++ ) {
    (function(heading) {
      // we'll assume that headings only contain text.
      var span = document.createElement('span');
      span.innerText = heading.innerText;

      var anchor = document.createElement('a');
      anchor.href = '#' + heading.id;
      anchor.innerText = '#';
      anchor.appendChild(span);

      heading.innerText = null;
      heading.appendChild(anchor);
      addClass(heading, 'anchor-heading');
    })(headings[i]);
  }

  function addClass(el, className) {
    var classList = el.className.split(' ');

    if ( classList.indexOf(className) === -1 ) {
      classList.push(className);
      el.className = classList.join(' ');
    }
  }
})(document.querySelectorAll(
  '.content-section > h1:not(.special-heading):not(.example-heading), ' +
  '.content-section > h2:not(.special-heading):not(.example-heading), ' +
  '.content-section > h3:not(.special-heading):not(.example-heading), ' +
  '.content-section > h4:not(.special-heading):not(.example-heading), ' +
  '.content-section > h5:not(.special-heading):not(.example-heading)'
));