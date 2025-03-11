import User from "./user.model.js";

export const updateUser = async (req, res) => {
    try {
        const usuario = req.usuario;
        const  data  = req.body;

        const user = await User.findByIdAndUpdate(usuario._id, data, { new: true });

        res.status(200).json({
            success: true,
            msg: 'Usuario Actualizado',
            user,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            msg: 'Error al actualizar usuario',
            error: err.message
        });
    }
}

