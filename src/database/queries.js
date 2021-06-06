export const queries =  {
    getAllProduct: 'select * from webstore.dbo.Products;',
    createNewPost: "Insert into webstore.dbo.Products (name, description, quantity) Values (@name, @description, @quantity)"
}
