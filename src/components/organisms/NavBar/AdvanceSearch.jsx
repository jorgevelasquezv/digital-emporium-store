'use client';

import {
    setProductsFilteredByPrice,
    setProductsFilterByCategory,
    setProductsFound,
} from '@/app/GlobalRedux/features/productsSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const AdvanceSearch = () => {
    const dispatch = useDispatch();

    const { data, search, categories, productsBySearch } = useSelector(
        (state) => state.products
    );
    const dropCategories = [
        ...categories.map((category) => ({ name: category, value: true })),
    ];
    const priceList = () => {
        const priceRangeList = [
            ...new Set(productsBySearch.map((product) => product.price)),
        ].sort((a, b) => a - b);
        const price = {
            min: priceRangeList[0],
            max: priceRangeList[priceRangeList.length - 1],
            range: priceRangeList[priceRangeList.length - 1],
        };
        const range = Math.trunc(price.max / 5);
        const arr = [1, 2, 3, 4];
        const prices = [
            price.max,
            ...arr.map(() => Math.trunc((price.range -= range))),
            price.min,
        ].map((element) => ({ name: element, value: false }));
        prices[0].value = true;
        return prices;
    };

    const [priceRange, setPriceRange] = useState(priceList());

    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

    const [showPriceDropdown, setShowPriceDropdown] = useState(false);

    const [categoryValues, setCategoryValues] = useState(dropCategories);

    const [categoryAll, setCategoryAll] = useState(true);

    const handleShowCategoryDropdown = () => {
        setShowCategoryDropdown(!showCategoryDropdown);
        setShowPriceDropdown(false);
    };

    const handleShowPriceDropdown = () => {
        setShowPriceDropdown(!showPriceDropdown);
        setShowCategoryDropdown(false);
    };

    const handleCategoryValues = (name) => {
        const dataFiltered = [
            ...data.filter((prod) =>
                prod.name.toLowerCase().includes(search.toLowerCase())
            ),
        ];

        setCategoryValues(
            categoryValues.map((category) => {
                if (category.name === name) category.value = !category.value;
                return category;
            })
        );

        const categoriesSeleted = categoryValues
            .filter(({ value }) => value === true)
            .map(({ name }) => name);

        const productsSeleted =
            categoriesSeleted.length > 0
                ? dataFiltered.filter(({ category }) =>
                      categoriesSeleted.includes(category)
                  )
                : dataFiltered;

        dispatch(setProductsFound(productsSeleted));
        dispatch(setProductsFilterByCategory(productsSeleted));
    };

    const handlePriceRangeValue = (name) => {
        const prices = priceList();
        setPriceRange(
            prices.map((price) => {
                price.name === name
                    ? (price.value = true)
                    : (price.value = false);
                return price;
            })
        );
        const priceSelected = prices.filter(({ value }) => value)[0]?.name;
        const productsByPrice = productsBySearch.filter(
            ({ price }) => price <= priceSelected
        );
        dispatch(setProductsFilteredByPrice(productsByPrice));
        dispatch(setProductsFound(productsByPrice));
    };

    const handleCategoryAll = () => {
        setCategoryAll(!categoryAll);
        setCategoryValues(
            categoryValues.map((category) => {
                category.value = !categoryAll;
                return category;
            })
        );
        handleCategoryValues('');
    };

    return (
        <nav className="bg-blue-800 sticky top-16 z-0">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center">
                    {/* Categories */}
                    <div className="relative inline-block text-left mr-8">
                        <div>
                            <button
                                type="button"
                                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                id="menu-button"
                                aria-expanded="true"
                                aria-haspopup="true"
                                onClick={handleShowCategoryDropdown}
                                name="categoryShow"
                            >
                                Categories
                                <svg
                                    className="-mr-1 h-5 w-5 text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                        {/*
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
From: "transform opacity-0 scale-95"
To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
From: "transform opacity-100 scale-100"
To: "transform opacity-0 scale-95"
  */}
                        {showCategoryDropdown && (
                            <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow">
                                <ul
                                    className="p-3 space-y-3 text-sm text-gray-700 h-48 overflow-y-auto"
                                    aria-labelledby="dropdownCheckboxButton"
                                >
                                    <li>
                                        <div className="flex items-center hover:bg-gray-200">
                                            <label className="ms-2 text-sm font-medium text-gray-900 w-48 flex items-start">
                                                <input
                                                    type="checkbox"
                                                    checked={categoryAll}
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mr-1"
                                                    onChange={handleCategoryAll}
                                                />
                                                <span className="text-gray-900 cursor-pointer">
                                                    All
                                                </span>
                                            </label>
                                        </div>
                                    </li>
                                    {categoryValues.map(
                                        ({ name, value }, index) => (
                                            <li key={`${name}-${index + 1}`}>
                                                <div className="flex items-center hover:bg-gray-200">
                                                    <label className="ms-2 text-sm font-medium text-gray-900 w-48 flex items-start">
                                                        <input
                                                            type="checkbox"
                                                            value={name}
                                                            checked={value}
                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mr-1"
                                                            onChange={() =>
                                                                handleCategoryValues(
                                                                    name
                                                                )
                                                            }
                                                        />
                                                        <span className="text-gray-900 cursor-pointer">
                                                            {name}
                                                        </span>
                                                    </label>
                                                </div>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Price Range */}
                    <div className="relative inline-block text-left">
                        <div>
                            <button
                                type="button"
                                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                id="menu-button"
                                aria-expanded="true"
                                aria-haspopup="true"
                                onClick={handleShowPriceDropdown}
                                name="priceRangeShow"
                            >
                                Price Range
                                <svg
                                    className="-mr-1 h-5 w-5 text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                        {/*
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
From: "transform opacity-0 scale-95"
To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
From: "transform opacity-100 scale-100"
To: "transform opacity-0 scale-95"
  */}
                        {showPriceDropdown && (
                            <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow">
                                <ul
                                    className="p-3 space-y-3 text-sm text-gray-700 h-48 overflow-y-auto"
                                    aria-labelledby="dropdownCheckboxButton"
                                >
                                    {priceRange.map(
                                        ({ name, value }, index) => (
                                            <li key={`${name}-${index + 1}`}>
                                                <div className="flex items-center hover:bg-gray-200">
                                                    <label className="ms-2 text-sm font-medium text-gray-900 w-48 flex items-start">
                                                        <input
                                                            type="radio"
                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mr-1"
                                                            value={name}
                                                            checked={value}
                                                            onChange={() =>
                                                                handlePriceRangeValue(
                                                                    name
                                                                )
                                                            }
                                                        />
                                                        <span className="text-gray-900 cursor-pointer">
                                                            {`Up to $${name}`}
                                                        </span>
                                                    </label>
                                                </div>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};
