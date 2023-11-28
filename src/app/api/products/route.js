const fs = require('fs');

const inventory = require('../../../library/products.json');

export async function GET() {
    return new Response(JSON.stringify(inventory), {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
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

    return new Response(JSON.stringify(updateProducts), {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
    });
}
