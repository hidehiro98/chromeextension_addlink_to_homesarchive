chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.contentScriptQuery == "yahoo") {
      var url = "https://www.google.com/search?q=site%3Ahttps%3A%2F%2Fwww.homes.co.jp%2Farchive+" + request.mansionName;
      // fetch(url, {mode: 'no-cors'})
      fetch(url)
          .then(response => response.text())
          .then(text => text.match(/<div class="r"><a href="(.*?)"/)[1])
          .then(url => sendResponse(url))
          .catch(error => console.log('error'))
      return true;  // Will respond asynchronously.
    }
  });
