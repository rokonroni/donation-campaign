import PropTypes from "prop-types";
const Donation = ({ donation }) => {
  const {img, title,category, category_bg, card_bg, text_bg} = donation;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className={`${category_bg} card-body`}>
        <h2 className={`${card_bg} max-w-min px-3 py-2 rounded`}>{category}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
};

Donation.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default Donation;
