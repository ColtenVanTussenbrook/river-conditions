import { River, USGSdata } from "@/types"

const RiversCard = ({river}: { river: River}) => (
    // Loop through river data and display a RiverCard for each one

    <>{river.sourceInfo.siteName}</>
)

export default RiversCard