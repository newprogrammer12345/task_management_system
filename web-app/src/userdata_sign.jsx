import { create } from "zustand"

// export const useUserStorage = create((set) => {
//     return {
//         userdata: null,
//         setUserdata: (data) => { set({ userdata: data }) }
//     }
// }
// )

export const useUserStorage =  create (function (set){
    return{
        userdata:null,
        setUserdata:(data)=>{ set ({userdata:data})}
    }
})