import PropTypes from 'prop-types';

export const ButtonsMinusPlus = ({ quantity, handleSetQuantity }) => {
    return (
        <div className="inline-flex items-center mt-2">
            <button
                className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-gray-400"
                onClick={handleSetQuantity}
                id="minus"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    id="minus"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                        id="minus"
                    />
                </svg>
            </button>
            <div className="bg-gray-100 border-t border-b border-gray-300 text-gray-800 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                {quantity}
            </div>
            <button
                className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-gray-400"
                onClick={handleSetQuantity}
                id="plus"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    id="plus"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                        id="plus"
                    />
                </svg>
            </button>
        </div>
    );
};

ButtonsMinusPlus.propTypes = {
    quantity: PropTypes.number.isRequired,
    handleSetQuantity: PropTypes.func.isRequired,
};