var express = require('express');
var dbAbstractionLayer = require('../public/javascripts/DbAbstractionLayer');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // setTimeout(() => {

    //     let jsonResponse = {
    //         "handsetCards": [
    //             { imageName: 'offer1', title: '10% off on personal cares', cols: 2, rows: 1 },
    //             { imageName: 'offer2', title: 'Flash sales in Footwears', cols: 2, rows: 1 },
    //             { imageName: 'offer3', title: 'Extended warranty for Apple Products', cols: 2, rows: 1 },
    //             { imageName: 'offer4', title: '5% discount for groceries', cols: 2, rows: 1 }
    //         ],
    //         "webCards": [
    //             { imageName: 'offer1', title: '10% off on personal cares', cols: 2, rows: 1 },
    //             { imageName: 'offer2', title: 'Flash sales in Footwears', cols: 1, rows: 1 },
    //             { imageName: 'offer3', title: 'Extended warranty for Apple Products', cols: 1, rows: 2 },
    //             { imageName: 'offer4', title: '5% discount for groceries', cols: 1, rows: 1 }
    //         ]
    //     };
    //     res.json(jsonResponse);

    // }, 3000);

    // call queryDealsCollection func here...
    dbAbstractionLayer.queryDealsCollection().then(response => {
        setTimeout(() => {
            res.json(response);
        }, 3000);
    }).catch(error => {
        res.status(500).json({});
    });
});

module.exports = router;