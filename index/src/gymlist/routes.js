const {Router} = require ('express');
const controller = require('./controller');

const router = Router ();

router.get("/",  controller.getGymlist);
router.post("/", controller.addintogymlist);
router.get("/:id", controller.getGymlistinfobyid);
router.put("/:id", controller.UpdateItem);
router.delete("/:id", controller.removeItem);


module.exports = router;
