function readSingleFile()
{
  var arr = [""];
  var fs = require("fs");
  fs.readFile("channels_playlist.txt", function(text){
      var textByLine = text.split("\n")
      arr.push(textByLine);
  });
      var matches = arr.filter(function(item){
        return item.name.indexOf() > -1;  
      }).map(function(item) {
        return `<li>${item.name}</li>`;
      }).join('');
      document.getElementById("mylist").innerHTML = matches || `<li>No results </li>`;
      console.dir(matches);
}