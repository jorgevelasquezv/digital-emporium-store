import PropTypes from 'prop-types';

export const CharacteristicProductCard = ({ product }) => {
    const {
        name,
        url,
        manufacturer,
        modelNumber,
        description,
        category,
        stock,
        price,
    } = product;
    return (
        <article className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-3">
                <figure className="w-1/3 h-auto self-center">
                    <img src={url} alt={name} />
                </figure>
            </div>

            <h2 className="text-lg font-semibold mt-2">{name}</h2>
            <p className="text-gray-500">{description}</p>
            <p className="text-sm font-semibold mt-2">
                Manufacturer:{' '}
                <span className="text-lg text-gray-500">{manufacturer}</span>
            </p>
            <p className="text-sm font-semibold mt-2">
                Model:{' '}
                <span className="text-lg text-gray-500">{modelNumber}</span>
            </p>
            <p className="text-sm font-semibold mt-2">
                Category:{' '}
                <span className="text-lg text-gray-500">{category}</span>
            </p>
            <p className="text-sm font-semibold mt-2">
                Stock <span className="text-lg text-gray-500">{stock}</span>
            </p>
            <p className="text-sm font-semibold mt-2">
                Price: <span className="text-lg text-gray-500">${price}</span>
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4">
                Add to Car
            </button>
        </article>
    );
};

CharacteristicProductCard.propTypes = {
    product: PropTypes.object.isRequired,
};