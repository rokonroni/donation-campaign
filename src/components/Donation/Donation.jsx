import PropTypes from "prop-types";
const Donation = ({ donation }) => {
  const { img, title, category, category_bg, card_bg, text_bg } = donation;
  return (
    <div className="card rounded card-compact bg-base-100 shadow">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className={`${category_bg} card-body`}>
        <h2 className={`${card_bg} ${text_bg}  max-w-min px-3 py-2 font-bold text-base rounded`}>
          {category}
        </h2>
        <p className={`${text_bg} text-lg font-bold`}>{title}</p>
      </div>
    </div>
  );
};

Donation.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default Donation;
