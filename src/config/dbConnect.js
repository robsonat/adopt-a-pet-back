import mongoose, { mongo } from "mongoose";


async function connectToDataBase() {
    
    //url de conexão com o MongoDB. Entendo que não é o correto, mas fiz desta forma para fins de validação e avaliação
    const url =  "mongodb+srv://admin:admin123@cluster0.u6ajarb.mongodb.net/adopt-a-pet?retryWrites=true&w=majority";
    mongoose.connect(url);
    //mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
};

export default connectToDataBase;

