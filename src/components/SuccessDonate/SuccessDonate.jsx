import PropTypes from "prop-types";
const SuccessDonate = ({ donate }) => {
     const { title,card_bg,category,category_bg, text_bg, donationAmount, img, donate_bg } =
    donate || {};
  return (
    <div className={`rounded-lg ${category_bg}`}>
      <div className="p-0 flex gap-6 flex-col lg:flex-row">
        <img
          src={img}
          className="w-1/3 justify-start rounded-lg shadow-2xl"
        />
        <div className="space-y-2 py-3">
            <h2
            className={`${card_bg} ${text_bg}  max-w-min px-3  font-bold text-base rounded flex-grow`}
          >
            {category}
          </h2>
          <h1 className="text-2xl  font-bold">{title}</h1>
          <p className={`${text_bg} font-semibold ps-2`}>${donationAmount}</p>
          <button className={` btn btn-primary ${donate_bg}`}>View Details</button>
        </div>
      </div>
    </div>
  );
};
SuccessDonate.propTypes = {
  donate: PropTypes.object,
};
export default SuccessDonate;
