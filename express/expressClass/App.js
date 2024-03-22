const express=require( 'express');   //imported express
const app = express()  //express nu initializtion, instance
const port=6000;
// middleware
app.use(express.json())    //middleware for parsing



//api-

app.get('/',(req,res)=>{
    res.json("hello world")
})

// http methods , get,post update,delete

// creete
// var name="freena";
// var place="pkd";

// Update
app.put('/update/:id', (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        
        // Assuming you have some data storage mechanism
        // For demonstration, let's assume you have an array of objects called 'data'
        const index = data.findIndex(item => item.id === id);

        if (index !== -1) {
            // Update the item with new data
            data[index] = { ...data[index], ...newData };
            res.json({ message: "Item updated successfully", updatedItem: data[index] });
        } else {
            res.status(404).json({ message: "Item not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Delete
app.delete('/delete/:id', (req, res) => {
    try {
        const id = req.params.id;

        // Assuming you have some data storage mechanism
        // For demonstration, let's assume you have an array of objects called 'data'
        const index = data.findIndex(item => item.id === id);

        if (index !== -1) {
            // Remove the item from the array
            data.splice(index, 1);
            res.json({ message: "Item deleted successfully" });
        } else {
            res.status(404).json({ message: "Item not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Assuming 'data' is your data storage mechanism (e.g., an array of objects)
const data = [];

// Create
app.post('/create', (req, res) => {
    try {
        const newData = req.body;
        data.push(newData);
        res.json({ message: "Item created successfully", newItem: newData });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Get
app.get('/get', (req, res) => {
    try {
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Run port
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});


