const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        /* .then((res) => {
            console.log(`Response in Mongo DB COnnection `, res)
        }).catch( error => {
            console.log(`Error in Catch Block>>> `, error);
            process.exit(1);
        })   */
        console.log(`Connected to Mongo DB : ${connect.connection.host}`);

    } catch (e) {
        console.log(`Error >>> `, e);
        process.exit(1);
    }
}
module.exports = connectDB