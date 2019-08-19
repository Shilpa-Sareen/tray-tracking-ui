import axios from 'axios';
import history from '../../services/history'; 


export const signIn = (data) => {
    return (dispatch) => {
        dispatch({type: "DISPLAY_SNACKBAR", message:'Logging In...',variant:'info'});
        return axios.post({
            url:'/patient-ordering/login',
            data: data,
            mock: true
        }).then((data)=>{
            dispatch({type: "DISPLAY_SNACKBAR", message:'Logged In Success',variant:'success'});                        
            history.push('/patientordering/mainMenuCourse');
        }).catch((e)=>{
            dispatch({type: "DISPLAY_SNACKBAR", message:'Failed',variant:'error'});
        })       
    }
}