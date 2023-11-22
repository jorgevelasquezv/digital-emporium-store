import PropTypes from 'prop-types';

export const ButtonCart = ({ handleButtonAddCart }) => {
    return (
        <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-blue-700 bg-none px-12 py-3 text-center text-lg font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-blue-800"
            onClick={handleButtonAddCart}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 mr-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
            </svg>
            Add to cart
        </button>
    );
};

ButtonCart.propTypes = {
    handleButtonAddCart: PropTypes.func.isRequired,
};