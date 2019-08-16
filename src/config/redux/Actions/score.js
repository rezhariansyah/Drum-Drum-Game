import urlApi from "../../urlAPI/urlAPI"
import axios from 'axios'

export const patchScore = (data,idUser)=>{
    console.warn(idUser);
    
    return{
        type:'PATCH_SCORE',
        payload:axios.patch(`${urlApi}/score/${idUser}`,data)
    }
}