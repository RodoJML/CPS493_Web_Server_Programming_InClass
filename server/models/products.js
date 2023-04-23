// 1. Model(s)
// The model is a JS file that contains all the functions that interact with the database

const data = require('../data/products.json');
// We will no longer use dummy data instead we will use the data from the MongoDB

const { connect, ObjectId } = require('./mongo');
const COLLECTION_NAME = 'products';

// Once connected to the DB all functions are async 

async function collection(){
    const db = await connect();
    return db.collection(COLLECTION_NAME);
}

// function getProducts() {
//   return data.products;
// }
// look how each function was changed to a more general function so it can be used for any database

async function getAll(page = 1, pageSize = 30){ // This can be changed as needed
    const col = await collection();
    const items = await col.find().skip((page-1) * pageSize).limit(pageSize).toArray();
    const total = await col.countDocuments();
    return { items, total };
}

// function getProductById(id) {
//     return data.products.find(product => product.id === id);
// }

async function getById(id){
    const col = await collection();
    const items = await col.findOne({ _id: ObjectId(id) });
    return item;
}

// function addProduct(product) {
//     product.id = data.products.length + 1;
//     data.products.push(product);
// }

async function add(product){
    const col = await collection();
    const result = await col.insertOne(product);
    product._id = result.insertedId;
    return item;
}

// function updateProduct(product) {
//     const index = data.products.findIndex(p => p.id === product.id);
//     data.products[index] = product;
// }

async function update(product){
    const col = await collection();
    const result = await col.updateOne({ _id: ObjectId(product._id) }, { $set: product }, { returnDocument: 'after' });
    return result.value;
}

// function deleteProduct(id) {
//     const index = data.products.findIndex(p => p.id === id);
//     data.products.splice(index, 1);
// }

async function deleteItem(id){
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

async function search(seachTerm, page = 1, pageSize = 30){
    const col = await collection();
    const query = {
        $or: [
            { title: { $regex: searchTerm, $options: 'i'} },
            { description: { $regex: searchTerm, $options: 'i'}},
            { brand: { $regex: searchTerm, $options: 'i'} }
        ]
    }

    const items = await col.find(query).skip((page-1) * pageSize).limit(pageSize).toArray();
    const total = await col.countDocuments(query);
    return { items, total };
}


// This function is to load data into the DB
async function seed() {
    const col = await collection();
    const result = await col.insertMany(data.products);
    return result.insertedCount;
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
    seed
};