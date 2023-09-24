import PropTypes from 'prop-types';
import Donation from '../Donation/Donation';
const Donations = ({donations}) => {
    return (
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
            {
                donations?.map(donation => <Donation key={donation.id} donation={donation}></Donation>)
            }
        </div>
    );
};

Donations.propTypes = {
  donations: PropTypes.array.isRequired
};
export default Donations;