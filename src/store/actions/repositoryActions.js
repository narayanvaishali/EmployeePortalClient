import * as actionTypes from './actionTypes';
import axios from '../../axios/axios';


const getDataSuccess = (data) => {
    return {
        type: actionTypes.GET_DATA_SUCCESS,
        data: data
    }
}

export const getData = (url, props) => {
      url = "http://localhost:52429/api/Profile"
    //console.log('url :' + axios);

    return (dispatch) => {
        axios.get(url)
        .then(response => {

            console.log('response.data ' + JSON.stringify(response.data.staticdata));
            dispatch(getDataSuccess(response.data.staticdata));
        })
        .catch(error => {
            //TODO: handle the error when implemented
        })
    }
}

const postDataSuccess = (response) => {
    return {
        type: actionTypes.POST_DATA_SUCCESS,
        response: response
    }
}

const putDataSuccess = (response) => {
    return {
        type: actionTypes.PUT_DATA_SUCCESS,
        response: response
    }
}
 
export const putData = (url, obj, props) => {
    return (dispatch) => {
        axios.put(url, obj)
        .then(response => {
            dispatch(putDataSuccess(response));
        })
        .catch(error => {
            //TODO: handle the error when implemented
        })
    }
}
 
const deleteDataSuccess = (response) => {
    return {
        type: actionTypes.DELETE_DATA_SUCCESS,
        response: response
    }
}
 
export const deleteData = (url, props) => {
    return (dispatch) => {
        axios.delete(url)
        .then(response => {
            dispatch(deleteDataSuccess(response));
        })
        .catch(error => {
            //TODO: handle the error when implemented
        })
    }
}
