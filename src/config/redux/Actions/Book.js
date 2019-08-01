import Axios from "axios";
import urlApi from "../../urlAPI/urlAPI";

export const getAllBooks = () => {
    return {
        type : "GET_ALL_BOOKS",
        payload : Axios.get(urlApi + '/book/allBooks')
    }
}

// SEARCH START ----------------------------------------------
export const getAllNovel = () => {
    return {
        type : "GET_ALL_NOVEL",
        payload : Axios.get(urlApi + '/book/novel')
    }
}

export const getAllComic = () => {
    return {
        type : "GET_ALL_COMIC",
        payload : Axios.get(urlApi + '/book/comic')
    }
}

export const getAllScience = () => {
    return {
        type : "GET_ALL_SCIENCE",
        payload : Axios.get(urlApi + '/book/science')
    }
}

export const getAllBiography = () => {
    return {
        type : "GET_ALL_BIOGRAPHY",
        payload : Axios.get(urlApi + '/book/biography')
    }
}
// SEARCH END ------------------------------------------------
export const updateBook = (id, data) => {
    return {
        type : "UPDATE_BOOK",
        payload : Axios.patch(urlApi + `/book/${id}` + data)
    }
}

//ADD BOOK
export const addBook = (book) => {
    return {
        type : "ADD_BOOK",
        payload : Axios.post(urlApi +'/book', book)
    }
}

//DELETE BOOK
export const deleteBook = (id) => {
    return {
        type : "DELETE_BOOK",
        payload : Axios.delete(urlApi +`/book/${id}`)
    }
}