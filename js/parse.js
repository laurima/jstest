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
            testData(data);
            //updateHeatmap(data);
        }
    });
}

function updateHeatmap(file) {
    var courses = document.getElementById("")

}

function calculateVotes() {
  
}

function testData(data) {
    console.log("testData function", data);
    var companies = [];
    var courses = [];
    var votes = [];
    var results = [courses, votes];
    var length = data.length;
    var columnLenght = data[0].length;

    //Print company name
    console.log(data[2][1]);

    for (i = 0; i < length; i++) {
        //Get company names
        companies[i] = data[i][1];

        console.log("1. loop", data[i]);
        for (j = 0; j < length; j++) {
            console.log("2. loop", data[j][i]);
            for (k = 11; k < columnLenght; k++) {
                //if (data[j][k] != "") {
                    //console.log("3. loop" + k);
                    //console.log(data[j][k]);
                    results[i][k]++;
                    //results[i][i] = results[i][i] + " && " + data[j][k];
                //}
            }
            //results[i] = results[i] + " & " + data[j][i];
            /*for (k = 1; k < length; k++) {
              companies.push[data[k][j]];
                console.log("3. loop", data[k][j]);
            }*/
        }
    }
    console.log("companies", companies)
    console.log("key valye pair", results)

}
