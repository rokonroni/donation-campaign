import { useEffect, useState } from "react";
import SuccessDonate from "../../components/SuccessDonate/SuccessDonate";

const Donation = () => {

    const [donateList, setDonateList] =  useState ([]);
    const [noFound, setNoFound] = useState('')
    useEffect (()=>{
        const donateLists = JSON.parse(localStorage.getItem('donateList'));
        if (donateLists) {
            setDonateList(donateLists)
        }
        else{
            setNoFound('No data found')
        }
    },[])
    
    return (
        <div>
            {noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> : 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    donateList.map(donate => <SuccessDonate key={donate.id} donate = {donate}></SuccessDonate>)
                }
            </div> }
        </div>
    );
};

export default Donation;