function convertData() {
    var input = document.querySelector("#input").value;
    
    // check if input is in CSV format
    if (input.includes(",")) {
      var values = input.split(",");
      var lastItem = (values.length - 1);
    
      if (values[lastItem] === "") {
        values.splice(-1, 1);
      }
      
      document.querySelector("#output").value = values.join("\n");
    } 
    // check if input is in LSV format
    else if (input.includes("\n")) {
      var values = input.split("\n");
      var lastItem = (values.length - 1);
      
      if (values[lastItem] === "") {
        values.splice(-1, 1);
      }
      
      document.querySelector("#output").value = values.join(",");
    }
  }
  
  document.querySelector("#convert").addEventListener("click", function () {
    convertData();
  });
  