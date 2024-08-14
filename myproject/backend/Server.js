const mongoose = require('mongoose')


// const url = `mongodb+srv://user1:user1@cluster0.1kbiv4c.mongodb.net/vehicleregistration?retryWrites=true&w=majority`;

const url='mongodb+srv://hedasweety8:Vedika123@cluster0.vtygs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connectionParams={
    
    useNewUrlParser: true,
    useUnifiedTopology: true 
}


mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

    // Mountain model
const hi = mongoose.model('hi', {

    name: { type: String },
    // email: { type: String },
    // pswd: { type: String },

})


hi.find( function (err, docs) {
    if (err){
        console.log(err);
        mongoose.disconnect();
    }
    else{
        console.log("result : ", docs);
        mongoose.disconnect();
		
    }
});








