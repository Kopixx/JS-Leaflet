let query = "https://gbfs.citibikenyc.com/gbfs/en/station_information.json"

d3.json(query).then(function(data) {
    console.log(data);
});