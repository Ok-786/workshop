const mongoose = require('mongoose');

async function connect() {
    // const url = 'mongodb://cluster0.txsjl.mongodb.net:27017';
    
    const url = 'mongodb+srv://osama:ojRmRWCtVL1M1ahd@cluster0.txsjl.mongodb.net/workshop?authSource=admin&replicaSet=atlas-vbzzgl-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
    try {
        const connection = await mongoose.connect(url
        , { useNewUrlParser: true, useUnifiedTopology: true }
        );
        console.log("connected to db.....")
    }
    catch(err) {
        console.log("error when connecting db....")
    }
}

module.exports = connect;