
const TodoModel = require("../models/Todo")

const todoController = {
    getAllTodo: async (req, res) => {
        try {
            const todo = await TodoModel.find({})
            res.status(200).json({
                success: true,
                data: todo
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })

        }
    },
    addNewTodo: async (req, res) => {
        try {
            const newTodo = new TodoModel({
                ...req.body,

            })
            await newTodo.save()
            res.status(201).json({
                success: true,
                message: "todo created successfullyyu",
                data: newTodo
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })

        }
    },
    updateTodoById: async (req, res) => {
        try {
            const { id } = req.params;
            let updateData = { ...req.body };
            const updatedTodo = await TodoModel.findByIdAndUpdate(
                id,
                updateData,
                { new: true }
            );
            if (!updatedTodo) {
                return res.status(404).json({
                    success: false,
                    message: 'BELEtdodo yoxdu'
                });

            }

            res.status(200).json({
                success: true,
                message: "Todo updated successfully",
                data: updatedTodo
            });
        } catch (error) {

            console.log("UPDATE todo ERROR:", error);

            res.status(500).json({
                success: false,
                message: error.message
            });
        }

    },
    deleteTodoById: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedTodo = await TodoModel.findByIdAndUpdate(id)
            if (!deletedTodo) {
                return res.status(404).json({
                    success: false,
                    message: "Todo not found"
                });

            }
            res.status(200).json({
                success: true,
                message: "Todo deleted successfully",
                data: deletedTodo
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })

        }
    }
}


module.exports=todoController;