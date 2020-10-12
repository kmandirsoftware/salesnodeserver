
var cors = require('cors');
var corsOptions = {
	origin: 'http://localhost:4200',
	optionsSuccessStatus: 204
}
const campaignsummariesRoutes = (app, fs) => {

    // variables
    const dataPath = './data/campaignsummaries.json';

    // helper methods
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }

            callback();
        });
    };

    // Options
    app.options('/CampaignSummaries/', cors(corsOptions), (req, res) => {
	    console.log("options");
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            //res.send(JSON.parse(data));
		 res.status(204);
        });
    });


    // READ
    app.get('/CampaignSummaries', cors(corsOptions), (req, res) => {
	    console.log("get");
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });

    // CREATE
    app.post('/CampaignSummaries', cors(corsOptions), (req, res) => {
	    console.log("post");
	    console.log(req.body);
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });

    });


    // UPDATE
    app.put('/CampaignSummaries/:id', (req, res) => {

        readFile(data => {

            // add the new user
            const campaignId = req.params["id"];
            data[campaignId] = req.body;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`campaign id:${campaignId} updated`);
            });
        },
            true);
    });


    // DELETE
    app.delete('/CampaignSummaries/:id', (req, res) => {

        readFile(data => {

            // add the new user
            const campaignId = req.params["id"];
            delete data[campaignId];

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`campaign id:${campaignId} removed`);
            });
        },
            true);
    });
};

module.exports = campaignsummariesRoutes;
