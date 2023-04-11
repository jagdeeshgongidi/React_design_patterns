import express from 'express';
const app = express();

app.use(express.static("dist"))
app.use(express.json())

let currentUser = {
    name: "John doe",
    age: 54,
    hairColor: "Red",
    hobbies: ["coding", 'singing', 'reading']
}


let users = [
    {
        name: "Jagadeesh",
        age: 21,
        hairColor: "black",
        hobbies: ["coding", 'singing', 'reading']
    },
    {
        name: "June",
        age: 21,
        hairColor: "black",
        hobbies: ["coding", 'singing', 'reading']
    },
    {
        name: "John",
        age: 21,
        hairColor: "black",
        hobbies: ["coding", 'singing', 'reading']
    },


]



const products = [
    {
        name: "laptop",
        price: '$200',
        description: "A 15 inch portable screen with computing functionality",
        rating: 5

    },
    {
        name: "fan",
        price: '$50',
        description: "A motor with 3 wings that sweeps air ",
        rating: 3.5

    },
    {
        name: "Phone",
        price: '$100',
        description: "A small device that can cause so many problems",
        rating: 1

    },
]


app.get("/api/current-user", (req, res) => {
    res.json(currentUser)
})
app.get("/api/users/:id", (req, res) => {
    const { id } = req.params;
    res.json(users.find(user => user.id === id))
}
)


app.post("/api/users/:id", (req, res) => {
    const { id } = req.params;
    const { user: updatedUser } = req.body;
    users = users.map(user => user.id === id ? updatedUser : user)
    res.json(users.find(user => user.id === id))
})


app.get("/api/users", (req, res) => {
    console.log("hello");
    res.setHeader('Content-Type', 'application/json');
    res.json(users);
});


app.get("/api/products", (req, res) => {
    res.json(products)
})


app.get("/api/products/:id", (req, res) => {
    const { id } = req.params;
    res.json(products[id])
})


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

