import PropTypes from "prop-types";
import swal from "sweetalert";

const SingleDonation = ({ donation }) => {
  const { id, title, description, donationAmount, donate_bg, img } =
    donation || {};

    const handleToAddDonationPage = () => {
      const addedDonateItem = [];
      const donateItem = JSON.parse(localStorage.getItem('donateList'))
      if (!donateItem){
        addedDonateItem.push(donation);
        localStorage.setItem('donateList',JSON.stringify(addedDonateItem))
        swal("Good job!", "Donation added successfully!", "success");
      }
      else {

        const isExist = donateItem.find(donation => donation.id ==id )

        if (!isExist) {
          addedDonateItem.push(...donateItem, donation)
        localStorage.setItem('donateList',JSON.stringify(addedDonateItem))
        swal("Good job!", "Donation added successfully!", "success");
        }
        else {
          swal("Error!", "Donation failed!", "error");
        }



        
      }
    } 
  return (
    <>
      <div
        className="hero h-[60vh] relative rounded-lg"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          width: "100%",
          height: "60vh",
        }}
      >
        <div className="rounded-b-lg hero-overlay bg-opacity-60 absolute inset-x-0 bottom-0 h-[80px]"></div>
        <div className="max-w-md absolute inset-x-10 bottom-4">
          <button onClick={handleToAddDonationPage} className={`btn btn-primary ${donate_bg} border-none`}>
            Donate ${donationAmount}
          </button>
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
  donation: PropTypes.object
};

export default SingleDonation;
