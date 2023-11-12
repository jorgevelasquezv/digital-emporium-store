import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setProductsFound } from '@/app/GlobalRedux/features/productsSlice';

export const Search = ({
    site = 'relative mx-auto text-gray-600 lg:block hidden',
}) => {
    const dispatch = useDispatch();

    const [productSearch, setProductSearch] = useState('');
    const { data } = useSelector((state) => state.products);

    const hanldeOnchangeSearch = (e) => {
        setProductSearch(e.target.value);
        if (e.target.value === '') {
            dispatch(setProductsFound([]));
        } else {
            handleSearch();
        }
    };

    const handleSearch = () => {
        const dataFiltered = [
            ...data.filter((prod) =>
                prod.name.toLowerCase().includes(productSearch.toLowerCase())
            ),
        ];
        dispatch(setProductsFound(dataFiltered));
    };

    const handleOnKeyDowndSearch = (e) => {
        if (e.key == 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className={site}>
            <div>
                <input
                    className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Search"
                    value={productSearch}
                    onChange={hanldeOnchangeSearch}
                    onKeyDown={handleOnKeyDowndSearch}
                />
                <ul className="absolute left-0 z-10 w-72 origin-top-right rounded-md bg-white bg-opacity-90 hidden">
                    <li>hsahsgh</li>
                    <li>hsahsgh</li>
                    <li>hsahsgh</li>
                    <li>hsahsgh</li>
                    <li>hsahsgh</li>
                </ul>
                <button
                    type="submit"
                    className="absolute right-0 top-0 mt-3 mr-4"
                    onClick={handleSearch}
                >
                    <svg
                        className="text-gray-600 h-4 w-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 56.966 56.966"
                        style={{ enableBackground: 'new 0 0 56.966 56.966' }}
                        xmlSpace="preserve"
                        width="512px"
                        height="512px"
                    >
                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

Search.propTypes = {
    site: PropTypes.string,
};
