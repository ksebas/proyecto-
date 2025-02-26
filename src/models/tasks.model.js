import mongoose from "mongoose";


const taskSchema = new mongoose.Schema({
    title : {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    date: { 
        type: Date,
        require: Date.now
    },
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    }
},
{
    timestamps : true
});
export default mongoose.model('task', taskSchema);