const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Players']
    const result = await mongodb.getDatabase().db().collection('player').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags=['Players']
    const documentId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('player').find({_id:documentId});
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    });
};

const createDocument = async (req, res) => {
    //#swagger.tags=['Players']
    const document = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        height: req.body.height,
        weight: req.body.weight,
        birthday: req.body.birthday,
        goals: req.body.goals,
        nationalTeam: req.body.nationalTeam,
        club: req.body.club
    };
    const response = await mongodb.getDatabase().db().collection('player').insertOne(document);
    if(response.acknowledged){
        res.status(204).send();
    }
    else{
        res.status(500).json(response.error || 'Some error ocurred while creating the player.')
    }
};


const updateDocument = async (req, res) => {
    //#swagger.tags=['Players']
    const documentId = new ObjectId(req.params.id);
    const document = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        height: req.body.height,
        weight: req.body.weight,
        birthday: req.body.birthday,
        goals: req.body.goals,
        nationalTeam: req.body.nationalTeam,
        club: req.body.club
    };
    const response = await mongodb.getDatabase().db().collection('player').replaceOne({_id:documentId}, document);
    if(response.modifiedCount > 0){
        res.status(204).send();
    }
    else{
        res.status(500).json(response.error || 'Some error ocurred while modifying the player.')
    }
};

const deleteDocument = async (req, res) => {
    //#swagger.tags=['Players']
    const documentId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('player').deleteOne({_id: documentId});
    if(response.deletedCount > 0){
        res.status(204).send();
    }
    else{
        res.status(500).json(response.error || 'Some error ocurred while deleting the player.')
    }
};



module.exports = {
    getAll,
    getSingle,
    createDocument,
    updateDocument,
    deleteDocument
};