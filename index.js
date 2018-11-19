const tooltip = document.createElement('div');
tooltip.innerHTML = 'Copied!';
tooltip.className = 'tooltip';

function selectCode(el) {
  if ((el.target.className == 'cmd') || (el.target.nodeName == 'PRE')) {
    var range = document.createRange();
    if (el.target.className == 'cmd') {
      range.selectNode(el.target);
    } else if (el.target.nodeName == 'PRE') {
      range.selectNode(el.target.querySelector('.cmd'));
    }
    sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    document.execCommand('copy');
    if (el.target.className == 'cmd') {
      el.target.parentNode.parentNode.parentNode.append(tooltip);
    } else if (el.target.nodeName == 'PRE') {
      el.target.parentNode.append(tooltip);
    }
    setTimeout(function() { tooltip.remove() }, 800);
  }
}