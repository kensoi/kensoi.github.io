var resolveDict = {}
resolveDict[undefined] = "https://kensoi.github.io"
resolveDict[null] = "https://kensoi.github.io"
resolveDict['KNSUSER'] = "https://vk.com/id517114114"
resolveDict['KENSOI'] = "https://vk.com/id517114114"
resolveDict['LINAED8'] = "https://vk.com/id517114114"
resolveDict['NSF2FRT'] = "https://vk.com/club195953234"
resolveDict['CNBTTUT'] = "https://vk.com/canarybot"
resolveDict['AAARRRE'] = "https://vk.com/testcanarybot"
resolveDict['1'] = "https://vk.com/id517114114"
resolveDict['2'] = "https://vk.com/club195953234"
resolveDict['3'] = "https://vk.com/canarybot"
resolveDict['4'] = "https://vk.com/testcanarybot"
resolveDict['4'] = "https://vk.com/tildabot"
resolveDict['GITHUB'] = "https://github.com/kensoi"
resolveDict['JSTKDDN'] = "https://vk.com/jstkddn"
resolveDict['OPEN-CLOUD'] = "https://drive.google.com/drive/folders/1Lh5jXPR9IHGoBQgC9C0nRUTxvW5ubagt"

function getAllUrlParams(url) {
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  var obj = {};

  if (queryString) {
    queryString = queryString.split('#')[0];
    var arr = queryString.split('&');

    for (var i=0; i<arr.length; i++) {
      var a = arr[i].split('=');
      var paramNum = undefined;
      var paramName = a[0].replace(/\[\d*\]/, function(v) {paramNum = v.slice(1,-1); return '';});

      var paramValue = typeof(a[1])===null ? null : a[1];

      paramName = paramName.toUpperCase();
      paramValue = paramValue.toUpperCase();

      if (obj[paramName]) {
        if (typeof obj[paramName] === 'string') {obj[paramName] = [obj[paramName]];}
        if (typeof paramNum === null) {obj[paramName].push(paramValue);}
        else {obj[paramName][paramNum] = paramValue;}
      }
      else {obj[paramName] = paramValue;}
    }
  }

  return obj;
}
  
  
function resolve(num = null) {
  var link = 'https://kensoi.github.io'
  if (!num) {
      var num = getAllUrlParams().R
  }

  link = resolveDict[num]
  if (num != undefined) {
    location.href = link
  }
  else {
    location.href = 'https://kensoi.github.io'
  }
}
