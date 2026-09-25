import { useTaskdate } from "../userdata_sign"

export default function All_Task(){
    let Usetaskdata = useTaskdate((state)=>{
        return state.taskdata
    })
    return(
        <>
        <div>
            <span>Name : {Usetaskdata[0]?.Title}</span>
            <div>
                {
                    Usetaskdata.map((items)=>{
                        return(
                            <span key={items?.Title}>{items?.Title}</span>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}