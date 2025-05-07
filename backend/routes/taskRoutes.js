const express = require ('express');
const { getAllTasks, setTask, updateTask, deleteTask } = require('../controllers/taskControllers');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')



/* 

Below commented code is ... writing the controller code here only. 

router.post('/', (req, res) => {
    console.log(`Create/Post Request >>> Path `, req.route.path)
    res.status(200).json({message : 'Create/Post Tasks from Task Routes'});
})

router.get('/', (req, res) => {
    console.log(`Read/Get Request >>> Path `, req.route.path)
    res.status(200).json({message : 'Read/Get All Tasks from Task Routes'});

})

router.put('/:id', (req, res) => {
    console.log(`Update/Put Request >>> Path `, req.route.path)
    res.status(200).json({message : `Update/Put Task for ${req.params.id} updated `});
})

router.delete('/:id', (req, res) => {
    console.log(`Delete/delete Request >>> Path `, req.route.path)
    res.status(200).json({message : `Delete/delete Task for ${req.params.id} deleted `});
})


*/

/* Below code is with controller which is handling in separate file */

/* --> With Controller */

router.get('/', protect, getAllTasks);   
router.post('/', protect, setTask);
router.put('/:id', protect, updateTask);
router.delete('/:id', protect, deleteTask);

module.exports = router;
