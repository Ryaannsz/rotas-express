import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        trim: true,    
        lowercase: true 

    }
});

userSchema.index({ email: 1 }, { unique: true });
const User = mongoose.model('User', userSchema);

export default User;