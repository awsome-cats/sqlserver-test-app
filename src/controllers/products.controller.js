import {getConnection, sql, queries} from '../database/index.js'

export const getProducts = async (req, res, next) => {

    try {

        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProduct)

        res.status(200).json({
            status: 1,
            success: true,
            message: 'データを取得できました',
            result: result.recordset
        })
    }catch(error) {
        res.status(500).json({
            status: 0,
            success: false,
            message: 'データを受信できませんでした'
        })
    }

}

export const createNewProduct = async (req, res) => {
    const { name, description} = req.body;
    let { quantity } = req.body;


    if(name == null || description == null) {
        return res.status(400).json({
            status: 0,
            success: false,
            message: 'データを送信できませんでした'
        })
    }
    if (quantity === null)quantity = 0;

    try {

        const pool = await getConnection()
        await pool.request()
        .input("name", sql.VarChar, name)
        .input("description", sql.Text,description)
        .input("quantity", sql.Int, quantity)
        .query(queries.createNewPost)

        res.status(200).json({
            status: 0,
            success: true,
            message: 'データが登録されました',
            name,
            description,
            quantity
        })

    }catch(error) {
        res.status(500).json({
            status: 0,
            success: false,
            message: 'データを受信できませんでした'
        })
    }
}