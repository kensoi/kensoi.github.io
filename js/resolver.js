var resolveDict = {}
resolveDict['undefined'] = "file:///E:/dev/kensoi.github.io/redir.html"
resolveDict[null] = "file:///E:/dev/kensoi.github.io/redir.html"
resolveDict['1'] = "https://vk.com/id517114114"
resolveDict['2'] = "https://vk.com/crubbukket"
resolveDict['3'] = "https://vk.com/canarybot"
resolveDict['4'] = "https://vk.com/testcanarybot"

function getAllUrlParams(url) {
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
    var obj = {};
  
    if (queryString) {
      queryString = queryString.split('#')[0];
      var arr = queryString.split('&');
  
      for (var i=0; i<arr.length; i++) {
        var a = arr[i].split('=');
        var paramNum = undefined;
        var paramName = a[0].replace(/\[\d*\]/, function(v) {
          paramNum = v.slice(1,-1);
          return '';
        });
  
        var paramValue = typeof(a[1])===null ? null : a[1];
  
        paramName = paramName.toLowerCase();
        paramValue = paramValue.toLowerCase();
  
        if (obj[paramName]) {
          if (typeof obj[paramName] === 'string') {
            obj[paramName] = [obj[paramName]];
          }
          if (typeof paramNum === null) {
            obj[paramName].push(paramValue);
          }
          else {
            obj[paramName][paramNum] = paramValue;
          }
        }
        else {
          obj[paramName] = paramValue;
        }
      }
    }
  
    return obj;
  }
function resolve(num = null) {
    if (!num) {
        var num = getAllUrlParams().r
    }
    var link = 'https://kensoi.github.io'
    if ((!num) && (num != 'undefined')) {
      link = resolveDict[num]
      console.log(num)
      console.log(link)
      location.href = link
    } 

}