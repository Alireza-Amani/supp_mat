(function (global) {
  // a namespace for our utility
  let ajaxUtils = {};

  // Returns an HTTP request object
  function getRequestObject() {
    if (window.XMLHttpRequest) {
      return new XMLHttpRequest();
    } else {
      global.alert("Ajax is not supported bro!");
      return null;
    }
  }

  //   Make an Ajax get request
  ajaxUtils.sendGetRequest = function (requestUrl, responseHandler) {
    var request = getRequestObject();
    request.onreadystatechange = function () {
      handleResponse(request, responseHandler);
    };
    request.open("GET", requestUrl, true);
    request.send(null); // for POST only!
  };

  function handleResponse(request, responseHandler) {
    if (request.readyState == 4 && request.status == 200) {
      responseHandler(request);
    }
  }

  // expose util 
  global.$ajaxUtils = ajaxUtils;
})(window);

// alert("Alarm!");
