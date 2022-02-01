function getCSV() {
  const input = document.getElementById("jsonData").value;

  const jsonData = JSON.parse(input.substr(input.indexOf("{")));

  let csvContent = "data:text/csv;charset=utf-8,";

  jsonData.list.forEach((el) => {
    csvContent = csvContent + el.name + ", " + el.id + "\n";
  });

  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "data.csv");
  document.body.appendChild(link); // Required for FF

  link.click(); // This will download the data file named "my_data.csv".
}
