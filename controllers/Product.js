
const getProduct = async (req, res) => {
    const products = [
        {
            id: 1,
            name: "Product 1"
        },
        {
            id: 2,
            name: "Product 2"
        }
    ];
   try {
    res.send(products);
   } catch (error) {
    console.log(error);
   }
};


export const ProductController = {
    getProduct
}