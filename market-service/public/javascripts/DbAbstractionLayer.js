var mongodb = require('mongodb');

var connected = false;
var db = null;

mongodb.MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }).then(connection => {
    connected = true;
    db = connection.db('super-e-market');
    console.log("DB Connection Success");
}).catch(error => {
    console.log("Error Connecting to Database");
});

async function queryDealsCollection() {
    if (connected) {
        // get data
        let jsonResponse = {
            "handsetCards": [],
            "webCards": []
        };

        const dealsCollectionArray = await db.collection('DEALS').find().toArray();

        dealsCollectionArray.forEach(element => {
            let handsetElement = {}
            handsetElement['imageName'] = element['imageName'];
            handsetElement['title'] = element['title'];
            handsetElement['cols'] = element['handsetCols'];
            handsetElement['rows'] = element['handsetRows'];
            jsonResponse.handsetCards.push(handsetElement);

            let webElement = {}
            webElement['imageName'] = element['imageName'];
            webElement['title'] = element['title'];
            webElement['cols'] = element['webCols'];
            webElement['rows'] = element['webRows'];
            jsonResponse.webCards.push(webElement);
        });

        return jsonResponse;

    } else {
        return null;
    }
}

module.exports = { queryDealsCollection };