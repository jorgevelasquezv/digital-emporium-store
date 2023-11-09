import axios from "axios";

export const getProducts =  () => {
    return  axios
        .get(
            'https://ba825ade-3855-4f75-963e-669f2e33697a.mock.pstmn.io/products'
        )
        .then(({ data }) => {
            const { products } = data;
            return products;
        })
        .catch((error) =>
            console.error('Error al obtener los datos de la API:', error)
        );
};

export const getProductById = (id) => {
    return axios
        .get(
            'https://ba825ade-3855-4f75-963e-669f2e33697a.mock.pstmn.io/products'
        )
        .then(({ data }) => {
            const { products } = data;
            const product = products.filter(product => product.id === id)[0]
            return product;
        })
        .catch((error) =>
            console.error('Error al obtener los datos de la API:', error)
        );
};


export const getCategories =  () => {
    return axios
        .get(
            'https://ba825ade-3855-4f75-963e-669f2e33697a.mock.pstmn.io/products'
        )
        .then(({ data }) => {
            const { products } = data;
            const categories = products.map((product) => product.category);
            return categories;
        })
        .catch((error) =>
            console.error('Error al obtener los datos de la API:', error)
        );
};