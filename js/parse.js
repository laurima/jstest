function getFile(file) {
    console.log("name : " + file.name);
    parseFile(file);
}

// Parse local CSV file
function parseFile(file) {
    console.log("parsing file to json");
    Papa.parse(file, {
        complete: function(results) {
            var data = results.data

            console.log("Finished:", data);
        }
    });
}
