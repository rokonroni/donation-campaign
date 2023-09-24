import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleDonation from "../../components/SingleDonation/SingleDonation";

const DonationDetails = () => {
  const [donation, setDonation] = useState();
  const { id } = useParams();
  const donations = useLoaderData();
  useEffect(() => {
    const findDonation = donations?.find((donation) => donation.id == id);
    setDonation(findDonation);
  }, [id, donations]);
  return (
    <>
    <div>
         <SingleDonation donation = {donation}></SingleDonation>
    </div>
       
    </>
  );
};

export default DonationDetails;
