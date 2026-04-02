const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
});
        console.log('MongoDB Atlas Connect success!');
    } catch (error) {
        console.log(error.message);
    };
};

module.exports = connectDB;