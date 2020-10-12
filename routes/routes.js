// import other routes
const userRoutes = require('./users');
const campaignRoutes = require('./campaign')
const campaignsummariesRoutes = require('./campaignsummaries')
const campaignconfigRoutes = require('./campaignconfig')
const programdetailRoutes = require('./programdetails')
const programesRoutes = require('./programes')
const programcatagoriesRoutes = require('./programcatagories')
const jobsRoutes = require('./jobs')
const productsRoutes = require('./products')
const productfilterRoutes = require('./productfilter')
const dealfilterRoutes = require('./dealfilter')
const demofilterRoutes = require('./demofilter')
const currencyfilterRoutes = require('./currencyfilter')
const clientsRoutes = require('./clients')
const positionsRoutes = require('./positions')
const broadcastersRoutes = require('./broadcasters')
const salesareasRoutes = require('./salesareas')
const spotlengthsRoutes = require('./spotlengths')
const demographsRoutes = require('./demographs')
const stationpricesRoutes = require('./stationprices')
const emptyRoutes = require('./empty')
const deliverycurrenciesRoutes = require('./deliverycurrencies')
const clashcategoriesRoutes = require('./clashcategories')
const productcategoriesRoutes = require('./productcategories')


const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.render('index.html');
	    console.log("main entry");
    });

    // // other routes
    userRoutes(app, fs);
    campaignRoutes(app, fs);
    campaignsummariesRoutes(app, fs);
    campaignconfigRoutes(app, fs);
    programdetailRoutes(app, fs);
    programesRoutes(app, fs);
    programcatagoriesRoutes(app, fs);
    jobsRoutes(app, fs);
    productsRoutes(app, fs);
    productfilterRoutes(app, fs);
    dealfilterRoutes(app, fs);
    demofilterRoutes(app, fs);
    currencyfilterRoutes(app, fs);
    clientsRoutes(app, fs);
    positionsRoutes(app, fs);
    broadcastersRoutes(app, fs);
    salesareasRoutes(app, fs);
    spotlengthsRoutes(app, fs);
    demographsRoutes(app, fs);
    stationpricesRoutes(app, fs);
    emptyRoutes(app, fs);
    deliverycurrenciesRoutes(app, fs);
    clashcategoriesRoutes(app, fs);
    productcategoriesRoutes(app, fs);

};

module.exports = appRouter;
