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


let users1 = [
    {
        id: 1,
        name: "Jagadeesh",
        age: 21,
        hairColor: "black",
        hobbies: ["coding", 'singing', 'reading']
    },
    {
        id: 2,
        name: "June",
        age: 21,
        hairColor: "black",
        hobbies: ["coding", 'singing', 'reading']
    },
    {
        id: 3,

        name: "John",
        age: 21,
        hairColor: "black",
        hobbies: ["coding", 'singing', 'reading']
    },


]



const products = [
    {
        id: 1,
        name: "laptop",
        price: '$200',
        description: "A 15 inch portable screen with computing functionality",
        rating: 5

    },
    {
        id: 2,
        name: "fan",
        price: '$50',
        description: "A motor with 3 wings that sweeps air ",
        rating: 3.5

    },
    {
        id: 3,
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
    let id = parseInt(req.params.id);

    console.log(id);
    const user = users1.find(user => {
        return user.id == id
    })
    console.log(user);
    res.json(user)
}
)





app.get("/api/users", (req, res) => {
    console.log("hello");
    res.setHeader('Content-Type', 'application/json');
    res.json(users1);
});


app.get("/api/products", (req, res) => {
    res.json(products)
})


app.get("/api/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id)
    console.log("hello")
    const product = products.find(product => {
        return product.id == id
    })
    console.log(product)
    res.json(product)
})


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

