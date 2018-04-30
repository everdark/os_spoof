var codeToInject = 'Object.defineProperty(navigator,"platform", { \
  get: function () { return "MacIntel"; }, \
  set: function (a) {} \
 });';
var script = document.createElement('script');
script.appendChild(document.createTextNode(codeToInject));
(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);
