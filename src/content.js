window.onload = function() {
  // Yahoo!不動産
  if (document.getElementsByClassName('ttlLarge2')['length'] != 0) {
    var body = document.getElementsByClassName('ttlLarge2')['0']
    let linkToArchive = document.createElement('a')
    const mansionName = body.textContent.split('(')[0]

    // 1. manifest.jsonにbackground.js追加して、ファイルも追加
    // 2. https://qiita.com/nulltypo/items/4e5c494971955c767531
    // 3. manifest.jsonに  "permissions": ["<all_urls>"], 追加する。https://groups.google.com/a/chromium.org/forum/#!topic/chromium-extensions/aVn9F6S_z68
    chrome.runtime.sendMessage(
      {contentScriptQuery: "lifullHomes", mansionName: mansionName},
      (result) => {
        linkToArchive.textContent = "Lifull Home's Archiveへのリンク"
        linkToArchive.href = result
        linkToArchive.target = '_blank'
        body.append(linkToArchive)
      }
    );

    // https://www.homes.co.jp/archive/b-942730/u-37356073/
    // google(mansionName).then((result) => {
    //   // console.log(result)
    //   linkToArchive.textContent = "Lifull Home's Archiveへのリンク"
    //   linkToArchive.href = result
    //   linkToArchive.target = '_blank'
    //   body.append(linkToArchive)
    // })
  }

  // Lifull Home's
  if (document.getElementById('chk-bkh-name')) {
    var body = document.getElementById('chk-bkh-name')
    let linkToArchive = document.createElement('a')
    const mansionName = body.textContent
    console.log(mansionName)

    chrome.runtime.sendMessage(
      {contentScriptQuery: "lifullHomes", mansionName: mansionName},
      (result) => {
        linkToArchive.textContent = "Lifull Home's Archiveへのリンク"
        linkToArchive.href = result
        linkToArchive.target = '_blank'
        linkToArchive.style.cssText = 'color: white;'
        body.append(linkToArchive)
      }
    );
  }

  // Suumo
  if (document.getElementsByClassName('section_h1-header-title')['length'] != 0) {
    var body = document.getElementsByClassName('section_h1-header-title')['0']
    let linkToArchive = document.createElement('a')
    const mansionName = body.textContent
    console.log(mansionName)

    chrome.runtime.sendMessage(
      {contentScriptQuery: "lifullHomes", mansionName: mansionName},
      (result) => {
        linkToArchive.textContent = "Lifull Home's Archiveへのリンク"
        linkToArchive.href = result
        linkToArchive.target = '_blank'
        body.append(linkToArchive)
      }
    );
  }

  // athome list
  // if (document.getElementsByClassName('p-property__title--building')['length'] != 0) {
  //   for (let body of document.getElementsByClassName('p-property__title--building')) {
  //     // var body = document.getElementsByClassName('p-property__title--building')['0']
  //     let linkToArchive = document.createElement('a')
  //     const mansionName = body.textContent

  //     chrome.runtime.sendMessage(
  //       {contentScriptQuery: "lifullHomes", mansionName: mansionName},
  //       (result) => {
  //         linkToArchive.textContent = "Lifull Home's Archiveへのリンク"
  //         linkToArchive.href = result
  //         linkToArchive.target = '_blank'
  //         body.append(linkToArchive)
  //       }
  //     );
  //   }
  // }

  // athome detail
  if (document.querySelectorAll('.heading .name')['length'] != 0) {
    var body = document.querySelectorAll('.heading .name')['0']
    let linkToArchive = document.createElement('a')
    const mansionName = body.textContent.split(' ')[0]

    chrome.runtime.sendMessage(
      {contentScriptQuery: "lifullHomes", mansionName: mansionName},
      (result) => {
        linkToArchive.textContent = "Lifull Home's Archiveへのリンク"
        linkToArchive.href = result
        linkToArchive.target = '_blank'
        linkToArchive.style.cssText = 'color: white;'
        body.append(linkToArchive)
      }
    );
  }
};

// async function google(mansionName) {
//   const response = await fetch(`https://www.google.com/search?q=site%3Ahttps%3A%2F%2Fwww.homes.co.jp%2Farchive+${mansionName}`);
//   const text = await response.text();
//   return text.match(/<div class="r"><a href="(.*?)"/)[1]
// }
