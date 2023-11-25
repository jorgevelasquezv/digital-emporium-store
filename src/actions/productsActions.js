import axios from "axios";

export const getProducts = () => {
    return  axios
        .get(
            'http://localhost:8000/products'
        )
        .then(({ data }) => {
            return data;
        })
        .catch((error) =>
            console.error('Error al obtener los datos de la API:', error)
        );
};

export const getProductById = (id) => {
    return axios
        .get(
            'http://localhost:8000/products'
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
            'http://localhost:8000/products'
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

export const updateProducts = (products) => {
    return axios
        .put('http://localhost:8000/products', products)
        .then(({ data }) => {
            return data;
        })
        .catch((error) =>
            console.error('Error al obtener los datos de la API:', error)
        );
};
