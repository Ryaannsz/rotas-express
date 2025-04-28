import bcrypt from 'bcrypt';
import User from '../models/User.js'
import 'dotenv/config'
import jwt from 'jsonwebtoken';


const register = async (req, res) => {
    
    const {name, password, email} = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    res.status(200).json({message: "Usuario cadastrado com sucesso"})

    try{
        const registeredUser = await User.create({
            name,
            password: hashPassword,
            email
        });
        return res.status(201).json({message: "usuario criado", user: registeredUser})
    }catch(error){
        return res.status(500).json({message: "error registrar user"})
    }
}

const login = (req, res) => {

    const { email, password } = req.body

    try{
        const findUser = User.findOne({ email }).select('+password');
        if(!findUser) return res.status(400).json({message: "usuario nao achado"})
        
        const match = bcrypt.compare(password, findUser.password)

        if(!match) return res.status(400).json({message: "credenciais invalidas"})
        const token = jwt.sign({id: findUser.id}, process.env.JWT_SECRET, {expiresIn: '1hr'})
        return res.status(200).json({message: "usuario logado com sucesso!", token})
        
    }catch(error){
        return res.status(400).json({message: "deu erro aqui no login service"})
    }

}

export default {register, login}