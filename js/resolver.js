var resolveDict = {}
resolveDict[undefined] = "https://kensoi.github.io"
resolveDict[null] = "https://kensoi.github.io"
resolveDict['KNSUSER'] = "https://vk.com/id517114114"
resolveDict['NSF2FRT'] = "https://vk.com/crubbukket"
resolveDict['CNBTTUT'] = "https://vk.com/canarybot"
resolveDict['AAARRRE'] = "https://vk.com/testcanarybot"

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
    link = resolveDict[num]
    location.href = link

}