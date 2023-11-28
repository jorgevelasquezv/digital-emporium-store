const fs = require('fs');

const inventory = require('../../../library/products.json');

export async function GET() {
    return new Response(inventory, {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });
}

export async function PUT(request) {
    const purchasedProducts = await request.json();
    const { products } = inventory;
    const updateProducts = products.map((product) => {
        purchasedProducts.map((purchasedProduct) => {
            if (product.id === purchasedProduct.id) {
                product.stock = purchasedProduct.stock;
            }
        });
        return product;
    });

    inventory.products = updateProducts;

    fs.writeFile(
        'src/library/products.json',
        JSON.stringify(inventory),
        (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        }
    );

    return new Response(updateProducts, {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });
}
