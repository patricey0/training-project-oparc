const Incident = require(`../models/incident`);

module.exports = {
    incidentsPage: async (_, response) => {

        try {
            const incidents = await Incident.findAll();
            console.log(incidents);
            response.render('index', {title: `Maintenant O'Parc`, incidents: incidents});
        } catch (error) {
            response.send(error);
        }
        
    }
};