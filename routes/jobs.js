
const jobsRoutes = (app, fs) => {

    // variables
    const dataPath = './data/jobs.json';

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

    // READ
    app.get('/BatchJobs', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });

    // CREATE
    app.post('/BatchJobs', (req, res) => {

        readFile(data => {
            const newName = Object.keys(data).length + 1;

            // add the new user
            data[newName.toString()] = req.body;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send('new program added');
            });
        },
            true);
    });


    // UPDATE
    app.put('/BatchJobs/:id', (req, res) => {

        readFile(data => {

            // add the new user
            const nameId = req.params["id"];
            data[campaignId] = req.body;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`Name id:${nameId} updated`);
            });
        },
            true);
    });


    // DELETE
    app.delete('/BatchJobs/:id', (req, res) => {

        readFile(data => {

            // add the new user
            const nameId = req.params["id"];
            delete data[nameId];

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`name id:${nameId} removed`);
            });
        },
            true);
    });
};

module.exports = jobsRoutes;
