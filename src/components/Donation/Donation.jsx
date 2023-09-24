import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Donation = ({ donation }) => {
  const { id, img, title, category, category_bg, card_bg, text_bg } = donation;

  return (
    <Link to={`/donationDetails/${id}`}>
        <div className="card rounded card-compact bg-base-100 shadow h-full">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className={`${category_bg} card-body`}>
          <div className="flex flex-col">
            <h2
            className={`${card_bg} ${text_bg}  max-w-min px-3  py-2 font-bold text-base rounded flex-grow`}
          >
            {category}
          </h2>
          <p className={`${text_bg} text-lg font-bold mt-3`}>{title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

Donation.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default Donation;
