window.onload = function() {
  if (document.getElementsByClassName('ttlLarge2')) {
    var body = document.getElementsByClassName('ttlLarge2')['0']
    let linkToArchive = document.createElement('a')
    const mansionName = body.textContent.split('(')[0]

    // https://qiita.com/nulltypo/items/4e5c494971955c767531 で書き直す

    // https://www.homes.co.jp/archive/b-942730/u-37356073/
    google(mansionName).then((result) => {
      console.log(result)
      linkToArchive.textContent = "Lifull Home's Archiveへのリンク"
      linkToArchive.href = result
      linkToArchive.target = '_blank'
      body.append(linkToArchive)
    })
  }
};

async function google(mansionName) {
  // google custom search API使うようにしたい
  // google custom searchがつながらない https://cse.google.com/cse/all
  // const apiKey = '' apiKeyアップロードしないよう注意
  // GET https://www.googleapis.com/customsearch/v1?key=AIzaSyCPw2LX1rdsRBE_VAUiKCIpGwVRpaZk2ZU&cx=017576662512468239146:omuauf_lfve&q=コンフォリア文京&siteSearch=https://www.homes.co.jp/archive
  // const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=017576662512468239146:omuauf_lfve&siteSearch=https://www.homes.co.jp/archive&q=${mansionName}`);

  const response = await fetch(`https://www.google.com/search?q=site%3Ahttps%3A%2F%2Fwww.homes.co.jp%2Farchive+${mansionName}`);
  const text = await response.text();
  return text.match(/<div class="r"><a href="(.*?)"/)[1]

  // const jsdom = require("jsdom");
  // const { JSDOM } = jsdom;
  // const dom = await new JSDOM(text);
  // console.log(dom.window.document.querySelector(".r").textContent);
}
