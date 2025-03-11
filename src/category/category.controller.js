import Category from "./category.model.js"

export const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
    
        const categories = new Category({
        name,
        });

        await categories.save();

        res.status(201).json({
        success: true,
        message: "Categoría creada exitosamente",
        category: categories,
        });
    } catch (err) {
        res.status(500).json({
        success: false,
        message: "Error al crear la categoría",
        error: err.message,
        });
    }  
}

export const getCategories = async (req, res) => {
    try{
        const { limite = 5, desde = 0 } = req.query
        const query = { status: true }

        const [total, categories ] = await Promise.all([
            Category.countDocuments(query),
            Category.find(query)
                .skip(Number(desde))
                .limit(Number(limite))
        ])

        return res.status(200).json({
            success: true,
            total,
            categories
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al obtener los usuarios",
            error: err.message
        })
    }
}

export const getCategoryById = async (req, res) => {
    try {
        const { cid } = req.params;
        const category = await Category.findById(cid);

        if (!category) {
            return res.status(404).json({ message: "categoria no encontrada." });
        }

        return res.status(200).json({
            message: "Detalles de la categoria obtenidos exitosamente.",
            category: {
            name: category.name
            },
        });
    } catch (err) {
        return res.status(500).json({
            message: "Error al obtener los detalles del usuario.",
            error: err.message,
        });
    }
};

const createdCategory = async () => {
    try {
        const categoryName = "sin_categoria".toLowerCase();

        const existingCategory = await Category.findOne({ name: categoryName });

        if (!existingCategory) {
            const category = new Category({
                name: categoryName,
            });

            await category.save();
            console.log("Categoría creada correctamente");

        } else {
            console.log("La categoría ya existe");
        }

    } catch (err) {
        console.error("Error al crear categoría:", err);
    }
}

export default createdCategory;