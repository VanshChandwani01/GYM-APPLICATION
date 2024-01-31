const getGymlist= "SELECT * FROM equipment_list"
const getGymlistinfobyid = "SELECT * FROM equipment_list WHERE item_id=$1";
const checkItemExists = "SELECT i FROM equipment_list i WHERE i.item_name = $1";
const addItem = "INSERT INTO equipment_list (item_id, item_name) VALUES ($1, $2)";
const removeItem = "DELETE FROM equipment_list WHERE item_id = $1";
const UpdateItem = "UPDATE  equipment_list SET item_name = $1 WHERE item_id = $2" ;

module.exports={
    getGymlist,
    getGymlistinfobyid,
    checkItemExists,
    addItem,
    removeItem,
    UpdateItem,
 
};
