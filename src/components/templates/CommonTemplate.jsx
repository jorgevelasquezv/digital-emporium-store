import PropTypes from 'prop-types';
import { NavBar } from '../organisms/NavBar/NavBar';
import { Footer } from '../organisms/Footer/Footer';

export const CommonTemplate = ({ children }) => {
    return (
        <>
            <NavBar />

            {children}
            <Footer />
        </>
    );
};

CommonTemplate.propTypes = {
    children: PropTypes.func.isRequired,
};
