import React, { useEffect, useState } from "react"
import { useContractContext } from "../context"
import CampaignsGrid from "../components/campaigns/CampaignsGrid"
import Heading from "../components/Heading.jsx"
import Button from "../components/Button"
import DisplayCampaigns from "../components/DisplayCampaigns.jsx"

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useContractContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <DisplayCampaigns 
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  )
}

export default Profile
