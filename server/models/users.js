// 1. Model(s)
// The model is a JS file that contains all the functions that interact with the database

//const data = require('../data/products.json');
// We will no longer use dummy data instead we will use the data from the MongoDB
const jwt = require('jsonwebtoken');
const { connect, ObjectId } = require('./mongo');

const { env } = require('process');
// this is to get the secret key from the .env file

const COLLECTION_NAME = 'users';

// Once connected to the DB all functions are async 

async function collection() {
    const db = await connect();
    return db.collection(COLLECTION_NAME);
}

// function getProducts() {
//   return data.products;
// }
// look how each function was changed to a more general function so it can be used for any database

async function getAll(page, pageSize) { // This can be changed as needed
    const col = await collection();
    const items = await col.find().skip((page - 1) * pageSize).limit(pageSize).toArray();
    const total = await col.countDocuments();
    return { items, total };
}

// function getProductById(id) {
//     return data.products.find(product => product.id === id);
// }

async function getById(id) {
    const col = await collection();
    const item = await col.findOne({ _id: ObjectId(id) });
    return item;
}

// function addProduct(product) {
//     product.id = data.products.length + 1;
//     data.products.push(product);
// }

async function add(user) {
    const col = await collection();
    const result = await col.insertOne(user);
    user._id = result.insertedId;
    return item;
}

// function updateProduct(product) {
//     const index = data.products.findIndex(p => p.id === product.id);
//     data.products[index] = product;
// }

async function update(user) {
    const col = await collection();
    const result = await col.updateOne({ _id: ObjectId(user._id) }, { $set: user }, { returnDocument: 'after' });
    return result.value;
}

// function deleteProduct(id) {
//     const index = data.products.findIndex(p => p.id === id);
//     data.products.splice(index, 1);
// }

async function deleteItem(id) {
    const col = await collection();
    const result = await col.deleteOne({ _id: ObjectId(id) });
    return result.deletedCount;
}

// function searchProducts(searchTerm) {
//     return data.products.filter(product => {
//         return  product.title.toLowerCase().includes(searchTerm.toLowerCase())  ||
//             product.description.toLowerCase().includes(searchTerm.toLowerCase())  ||
//             product.brand.toLowerCase().includes(searchTerm.toLowerCase());
//     });
// }

async function search(seachTerm, page = 1, pageSize = 30) {
    const col = await collection();
    const query = {
        $or: [
            { name: { $regex: searchTerm, $options: 'i' } },
            { email: { $regex: searchTerm, $options: 'i' } },
        ]
    }

    const items = await col.find(query).skip((page - 1) * pageSize).limit(pageSize).toArray();
    const total = await col.countDocuments(query);
    return { items, total };
}


// This function is to load data into the DB
async function seed() {
    const col = await collection();
    const result = await col.insertMany(data);
    return result.insertedCount;
}


async function login(email, password) {
    const col = await collection();
    const user = await col.findOne({ email });

    if (!user) {
        throw new Error('User not found');
    }

    if (user.password !== password) {
        throw new Error('Invalid password');
    }

    const cleanUser = { ...user, password: undefined };
    const token = await generateTokenAsync(cleanUser, '1d'); // 1d stands for the duration of the token in this case 1 day

    return { user: cleanUser, token };
}

function generateTokenAsync(user, expiresIn) { // As professor explain here we are cerating our own async function
    return new Promise((resolve, reject) => {
        jwt.sign(user, process.env.JWT_SECRET ?? "", { expiresIn }, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
}

function verifyTokenAsync(token){
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET ?? "", (err, user) => {
            if (err) {
                reject(err);
            } else {
                resolve(user);
            }
        });
    });
}

async function oAuthLogin(provider, accessToken) {
    // validate the access token
    // if valid, return the user
    // if not, create a new user
    // return the user
}


module.exports = {
    // getProducts,
    // getProductById,
    // addProduct,
    // updateProduct,
    // deleteProduct,
    // searchProducts
    getAll,
    getById,
    add,
    update,
    deleteItem,
    search,
    seed,
    generateTokenAsync,
    verifyTokenAsync,
    login,
    oAuthLogin
};

const data = [
    {
        "name": "John Doe",
        "email": "john@doe.com",
        "password": "123456",
        "photo": "https://robohash.org/hicveldicta.png?size=50x50&set=set1",
        "role": "admin",
    },
    {
        "name": "Jane Doe",
        "email": "jane@doe.com",
        "password": "123456",
        "photo": "https://robohash.org/autemquidemvoluptatem.png?size=50x50&set=set1",
        "role": "user",
    },
]