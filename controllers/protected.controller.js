

const getProtected = async (req, res) => {
    return res.status(200).json({message: "rota protegida"})
}

export default {getProtected}