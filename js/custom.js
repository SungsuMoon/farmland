var spreadsheetID = "1LN0dGJOy_aQYfLlhe8ZJV9NGHCy18Pj3doA-RRR_8-s";

 // Make sure it is public or set to Anyone with link can view
var url = "https://spreadsheets.google.com/feeds/cells/" + spreadsheetID + "/od6/public/basic?alt=json";

function getCellData(IdToAppend, cellNumber){
$.getJSON(url, function(data) {
    var entry = data.feed.entry;
    $(entry).each(function(){
        // Column names are name, age, etc.
        //entry.parseJSON
        if(this.title.$t==cellNumber){
            $('#'+IdToAppend).prepend(this.content.$t);
        }


        //$('.results').prepend('<h2>'+this.title.$t+'</h2><p>'+'</p>');
  });
});
}

function getImageData(IdToAppend, cellNumber){
$.getJSON(url, function(data) {
    var entry = data.feed.entry;
    $(entry).each(function(){
        // Column names are name, age, etc.
        //entry.parseJSON
        if(this.title.$t==cellNumber){
            $('#'+IdToAppend).attr("src", this.content.$t);
        }


        //$('.results').prepend('<h2>'+this.title.$t+'</h2><p>'+'</p>');
  });
});
}

getCellData("special-crop-name", "B2");
getImageData("special-crop-image", "C2");
getCellData("special-crop-detail", "D2");
getCellData("special-crop-unit", "E2");
getCellData("special-crop-price", "F2");

getCellData("first-crop-name", "B3");
getImageData("first-crop-image", "C3");
getCellData("first-crop-detail", "D3");
getCellData("first-crop-unit", "E3");
getCellData("first-crop-price", "F3");

getCellData("second-crop-name", "B4");
getImageData("second-crop-image", "C4");
getCellData("second-crop-detail", "D4");
getCellData("second-crop-unit", "E4");
getCellData("second-crop-price", "F4");

getCellData("third-crop-name", "B5");
getImageData("third-crop-image", "C5");
getCellData("third-crop-detail", "D5");
getCellData("third-crop-unit", "E5");
getCellData("third-crop-price", "F5");

getCellData("fourth-crop-name", "B6");
getImageData("fourth-crop-image", "C6");
getCellData("fourth-crop-detail", "D6");
getCellData("fourth-crop-unit", "E6");
getCellData("fourth-crop-price", "F6");

getCellData("fifth-crop-name", "B7");
getImageData("fifth-crop-image", "C7");
getCellData("fifth-crop-detail", "D7");
getCellData("fifth-crop-unit", "E7");
getCellData("fifth-crop-price", "F7");

getCellData("sixth-crop-name", "B8");
getImageData("sixth-crop-image", "C8");
getCellData("sixth-crop-detail", "D8");
getCellData("sixth-crop-unit", "E8");
getCellData("sixth-crop-price", "F8");