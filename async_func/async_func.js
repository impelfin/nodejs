var request=require("request")

function getHeaders(url) {
	return new Promise(resolve => {
		request(url, (err, res) => {
        // console.log(res.headers)
        resolve(res.headers)
      })	
	})
}

(async () => {
	console.log(await getHeaders("http://www.daum.net"))
}) ()