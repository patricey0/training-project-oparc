const Incident = require(`../models/incident`);

module.exports = {
    findAll: async (_, response) => {
        const incidents = await Incident.findAll();
        response.render(incidents);
    }
};