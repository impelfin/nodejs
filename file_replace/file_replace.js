var fs = require('fs');
var readline = require('readline');

const srcFile = "data.txt";
const destFile = "result.txt";

BBB = "https://movie.daum.net/ranking/reservation"

fs.exists(srcFile, function (exists) {
    var array = fs.readFileSync(srcFile).toString().split("\n");
    for (i=0; i<3; i++) {
        if (i==0) {
            str = array[i].replace('AAA', '"' + BBB + '"')
            fs.writeFile(destFile, str + "\n", err => {
                if (err) {
                  console.error(err)
                  return
                }
            })
            // console.log(str)
        } else {
            fs.writeFile(destFile, array[i] + "\n", { flag: 'a+' }, err => {
                if (err) {
                  console.error(err)
                  return
                }
            })
            // console.log(array[i])
        }
    }
});

fs.readFile(destFile, 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
  })