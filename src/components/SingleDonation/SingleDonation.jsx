import PropTypes from "prop-types";

const SingleDonation = ({donation}) => {
  console.log(donation);
  const { title, description, donationAmount, card_bg, donate_bg , img}= donation || {};
  return (
    <>
      <div
        className="hero h-[60vh] relative rounded-lg"
        style={{
          backgroundImage:{img}
        }}
      >
        <div className="rounded-b-lg hero-overlay bg-opacity-60 absolute inset-x-0 bottom-0 h-[11vh]"></div>
        <div className="max-w-md absolute inset-x-10 bottom-4">
          <button className={`btn btn-primary ${donate_bg} border-none hover:{${card_bg}}`}>Donate ${donationAmount}</button>
        </div>
        <div
          className="hero-content text-neutral-content relative"
          style={{
            zIndex: 1,
          }}
        ></div>
      </div>
      <div>
        <h2 className="text-4xl font-bold mt-5">{title}</h2>
        <p className="text-lg mt-3 font-normal">{description}</p>
      </div>
    </>
      
  );
};

SingleDonation.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default SingleDonation;
