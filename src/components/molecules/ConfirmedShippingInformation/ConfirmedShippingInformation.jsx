import { useSelector } from 'react-redux';

export const ConfirmedShippingInformation = () => {
    const { userInformation } = useSelector((state) => state.users);

    const { firstName, lastName, country, address, city, province, zipPostal } =
        userInformation;

    const payPal =
        'https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/pp_fc_hl.svg';

    const pse = 'https://www.pse.com.co/image/layout_icon?img_id=1202326';

    return (
        <>
            <div className="mt-6 space-y-3 border-t py-8">
                <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-gray-900">
                        Shipping Information
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-gray-400">First name</p>
                    <p className="text-lg font-semibold text-gray-900">
                        {firstName}
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-gray-400">Last Name</p>
                    <p className="text-lg font-semibold text-gray-900">
                        {lastName}
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-gray-400">Country</p>
                    <p className="text-lg font-semibold text-gray-900">
                        {country}
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-gray-400">Province</p>
                    <p className="text-lg font-semibold text-gray-900">
                        {province}
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-gray-400">City</p>
                    <p className="text-lg font-semibold text-gray-900">
                        {city}
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-gray-400">Address</p>
                    <p className="text-lg font-semibold text-gray-900">
                        {address}
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-gray-400">Zip Postal</p>
                    <p className="text-lg font-semibold text-gray-900">
                        {zipPostal}
                    </p>
                </div>
            </div>
            <div className="space-y-3 border-t border-b py-8 flex justify-evenly">
                <div className="my-1 flex items-center justify-center">
                    <label className="">
                        <input
                            type="radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mr-1"
                            // value={'name'}
                            // checked={'value'}
                        />
                        <img
                            className="h-8 max-w-full rounded-lg mt-2"
                            src={payPal}
                            alt={'payPal'}
                        />
                    </label>
                </div>
                <div className="my-1 flex items-center justify-center">
                    <label className="">
                        <input
                            type="radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mr-1"
                            // value={'name'}
                            // checked={'value'}
                        />
                        <img
                            className="h-12 max-w-full rounded-lg"
                            src={pse}
                            alt={'pse'}
                        />
                    </label>
                </div>
            </div>
            <button
                type="button"
                className="group inline-flex w-full items-center justify-center rounded-md bg-blue-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-blue-800"
                onClick={() => router.push('/user/order')}
            >
                Make Payment
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                </svg>
            </button>
        </>
    );
};
