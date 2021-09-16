const express = require('express');

module.exports = {
    getdata: (req, res) => {
        if (req.query.country == undefined) {
            res.send("ERROR: The country was undefined. Please specify the country in the URL as such: http://website.com/get-country?country=1")
        }
        
        else if (Object.keys(req.query).length > 1) {
            let x = (req.query.country - 1);
            otherprop = Object.keys(req.query).filter((name)=>name != "country")[0]
            // otherval = req.query.otherprop;
            var countries = require('./countries.json')[x][otherprop];
            return res.status(200).json({ returned_data: countries })
        }
        
        else {
            let x = (req.query.country - 1);
            var countries = require('./countries.json')[x];
            return res.status(200).json({ returned_data: countries })
        }
    }
}
