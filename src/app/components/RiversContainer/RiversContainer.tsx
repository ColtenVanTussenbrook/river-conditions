import { River, USGSdata } from "@/types"
import { RiverCard } from "../RiverCard"

const RiversContainer = ({riverData}: {riverData: River[]}) => {
    console.log(riverData)
    return (
        <>
        <h2>Rivers</h2>
        {
            riverData.map((river) => {
                return <RiverCard key={river.sourceInfo.siteCode[0].value} river={river} />
            })
        }
        </>
    )
}

export default RiversContainer