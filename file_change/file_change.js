var fs = require('fs');
var readline = require('readline');

const srcFile = "data.txt";
const destFile = "result.txt";

const data = { 
  resultCode : "ok", 
  cntParam : 3, 
  baseUrl : "https://movie.daum.net/ranking/reservation",
  items : { 
      item :
        [ 
          "div", "thumb_cont", 
          "a", "link_txt", 
          "span", "txt_grade", 
          "span", "txt_num", 
          "span", "txt_info"
        ]
    }
}

console.log(JSON.stringify(data))
console.log("-------------------------")
// console.log(JSON.stringify(data.resultCode))
// console.log("-------------------------")
// console.log(JSON.stringify(data.cntParam))
// console.log("-------------------------")
// console.log(JSON.stringify(data.baseUrl))
// console.log("-------------------------")
// console.log(JSON.stringify(data.items))
// console.log("-------------------------")
// console.log(JSON.stringify(data.items.item))

fs.exists(srcFile, function (exists) {
var array = fs.readFileSync(srcFile).toString().split("\n");
  for (i=0; i<array.length; i++) {
    var str = array[i]

    if (i==0) {
      if (str.includes("A1"))
        str = str.replace("A1", '"' + data.baseUrl + '"')
      fs.writeFileSync(destFile, "# result.txt \n" + str + "\n", err => {
        if (err) {
          console.error(err)
          return
        }
      })
    } else {
      if (str.includes("B2"))
        str = str.replace("B2", '"' + data.items.item[0] + '"')
      if (str.includes("C3"))
        str = str.replace("C3", '"' + data.items.item[1] + '"') 
      if (str.includes("D4"))
        str = str.replace("D4", '"' + data.items.item[2] + '"') 
      if (str.includes("E5"))
        str = str.replace("E5", '"' + data.items.item[3] + '"') 
      if (str.includes("F6"))
        str = str.replace("F6", '"' + data.items.item[4] + '"') 
      if (str.includes("G7"))
        str = str.replace("G7", '"' + data.items.item[5] + '"')
      if (str.includes("H8"))
        str = str.replace("H8", '"' + data.items.item[6] + '"') 
      if (str.includes("I9"))
        str = str.replace("I9", '"' + data.items.item[7] + '"') 
      if (str.includes("J10"))
        str = str.replace("J10", '"' + data.items.item[8] + '"') 
      if (str.includes("K11"))
        str = str.replace("K11", '"' + data.items.item[9] + '"') 

      fs.writeFileSync(destFile, str + "\n", { flag: 'a+' }, err => {
        if (err) {
          console.error(err)
          return
        }
      })
    }
  }
})

fs.readFile(destFile, 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})