// define all api forl project, it cals comonApi function

import commonApi from "./commonApi"
import SERVER_URL from "./serverUrl"


// uploadVieo api -api must call by add component
export const  uploadVideoApi = async (video) => {
    return await commonApi("POST",`${SERVER_URL}/allVideos`,video)
}


// -called by view component
// if there is no body empty string or empty object is expected
export const  getAllVideoApi = async () => {
    return await commonApi("GET",`${SERVER_URL}/allVideos`,"")
}
// saveHistory-called by VideoCard
export const  saveHistoryApi = async (videoDetails) => {
    return await commonApi("POST",`${SERVER_URL}/history`,videoDetails)

}

// getHistoryApi -called by history
export const  getHistoryApi = async () => {
    return await commonApi("GET",`${SERVER_URL}/history`,"")

}
// removeHistoryAPI-called by history
// in delete , only empty object is expected
export const removeHistoryAPI = async(id)=>{
    return await commonApi("DELETE", `${SERVER_URL}/history/${id}`,{})
}

// removeVideoApi-called by videocard
export const removeVideoApi=async(id)=>{
    return await commonApi("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
}


// addCategoryApi-called  by category
export const addCategoryApi = async (categoryDetails) => {
    return await commonApi("POST", `${SERVER_URL}/categories`, categoryDetails)
}

// getAllCategoryApi-called by category
export const getAllCategoryApi =async ()=>{
    return await commonApi("GET", `${SERVER_URL}/categories`,"")
}

// removeCategoryApi-called by category
export const removeCategoryApi =async (id)=>{
    return await commonApi("DELETE", `${SERVER_URL}/categories/${id}`,{})
}


// getSingleVideoAPI - called by category
export const getSingleVideoAPI = async (id)=>{
    return await commonApi("GET",`${SERVER_URL}/allVideos/${id}`,"")
}

// updateCategoryAPI - called by category
export const updateCategoryAPI = async (categoryId,updateCategoryDetails)=>{
    return await commonApi("PUT",`${SERVER_URL}/categories/${categoryId}`,updateCategoryDetails)
}

// getSingleCategoryAPI - called by view
export const getSingleCategoryAPI = async (id)=>{
    return await commonApi("GET",`${SERVER_URL}/categories/${id}`,"")

}