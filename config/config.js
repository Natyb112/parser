//================================================
//Puerto
//================================================

process.env.PORT = process.env.PORT || 3000;

//================================================
//Base de datos
//================================================

let urlDB;
process.env.NODE_ENV = 'pro';

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/coffe';
} else {
    urlDB = 'mongodb+srv://nathybasantes:bN8WwjTUlgxxkSKi@supergirln.4nxmv.mongodb.net/caffe';
}

process.env.URLDB = urlDB;