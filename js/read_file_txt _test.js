function readSingleFile()
{
  var arr = [""];
  debugger
  var f = new XMLHttpRequest();
    f.open("GET", file, false);
    f.onreadystatechange = function ()
    {
        if(f.readyState === 4)
        {
            if(f.status === 200 || f.status == 0)
            {
                var res= f.responseText;
                alert(res); //to see if contents are read
                arr.push(res);
            }
        }
    }
    f.send(null);
    var matches = arr.filter(function(item){
        return item.name.indexOf() > -1;  
      }).map(function(item) {
        return `<li>${item.name}</li>`;
      }).join('');
    document.getElementById("mylist").innerHTML = matches || `<li>No results </li>`;
    console.dir(matches);
}