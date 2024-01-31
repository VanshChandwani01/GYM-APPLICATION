const pool = require('../../../db');
const queries = require('./queries');

const getGymlist = (req,res)=>{
    pool.query(queries.getGymlist,(error,results) =>  {
        if(error) throw error;
        res.status(200).json(results.rows);

    });
};

const getGymlistinfobyid= (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getGymlistinfobyid,[id], (error,results) =>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
//adding items to database
const addintogymlist = (req,res) =>{
    const {item_id, item_name} = req.body;
    //check  if that item already exists
    pool.query(queries.checkItemExists, [item_name], (error,results) =>{
        if (results.rows.length){
            res.status(400).send("Item alredy exists.");
        }
        
        pool.query(queries.addItem,[item_id, item_name], (error,results) => {
        if (error) throw error;
        res.status(201).send("Item added sucessfully!");
        
        })
    } );
};
//delete item from database
const removeItem = (req,res) =>{
    const id = parseInt(req.params.id);



    pool.query(queries.getGymlistinfobyid, [id], (error,results) => {
        const noItemFound = !results.rows.length;
        if (noItemFound) { 
            res.status(400).send("Item does not exsist in the database!");
    }
        
        
        pool.query(queries.removeItem, [id], (error,results) => {
            if (error) throw error;
            res.status(200).send("Item removed sucessfully.");
        })
    });
};

// updte items by id 

 const UpdateItem = (req,res) => {
    const id = parseInt(req.params.id);
    const { item_name } = req.body;

   pool.query(queries.getGymlistinfobyid ,[id], (error,results) => {
        const noItemFound = !results.rows.length;
        if (noItemFound) {
            res.status(400).send("Item does not exists, try adding it first");
        }

        pool.query (queries.UpdateItem, [item_name, id], (error,results) => {
            if (error ) throw error;
            res.status(200).send ("Item updated sucessfully")

        });

    });
};

module.exports = {
    getGymlist,
    getGymlistinfobyid,
    addintogymlist,
    removeItem,
    UpdateItem,
    
};
