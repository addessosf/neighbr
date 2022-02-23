const axios = require('axios');
const {
  createErrand,
  getAllErrands,
  getErrand,
  getErrandById,
} = require('../db/services/errandService.js');

module.exports.getAllErrands = async (req, res) => {
  await getAllErrands((err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.send(data);
    }
  });
};

module.exports.addErrand = (req, res) => {
  createErrand(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.send(data);
    }
  });
};

module.exports.getErrandById = async (req, res) => {
  const { errandId } = req.params;
  await getErrandById(errandId, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.send(data);
    }
  });
};