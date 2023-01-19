import apiClient from './api.service';
import { API } from './constants/api.constants';

//all get API list
export const getAllMainCategory = async () => {
  try {
    const res = await apiClient.get(`${API.MAINCATEGORY}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getAllSubCategory = async (ProductId) => {
  try {
    const res = await apiClient.get(`${API.MAINCATEGORY}/${ProductId}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getAllVariants = async ({ ProductId, Id }) => {
  try {
    const res = await apiClient.get(
      `${API.MAINCATEGORY}/${ProductId}/variants/${Id}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getProductDetails = async (category, variantId, productId) => {
  try {
    const res = await apiClient.get(
      `${API.MAINCATEGORY}/${category}/variants/${variantId}/products/${productId}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getAllEmployee = async () => {
  try {
    const res = await apiClient.get(`${API.ALLEMPLOYEE}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getAllCompany = async () => {
  try {
    const res = await apiClient.get(`${API.ALLCOMPANY}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getAllVideos = async () => {
  try {
    const res = await apiClient.get(`${API.ALLVIDEOS}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getAllTestimonials = async () => {
  try {
    const res = await apiClient.get(`${API.ALLTESTIMONIALS}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getAllClients = async () => {
  try {
    const res = await apiClient.get(`${API.ALLCLIENTS}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getAllBlogs = async () => {
  try {
    const res = await apiClient.get(`${API.ALLBLOGS}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getBlogDetails = async (BlogId) => {
  try {
    const res = await apiClient.get(`${API.ALLBLOGS}/${BlogId}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getIndustryList = async () => {
  try {
    const res = await apiClient.get(`${API.INDUSTRYLIST}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// Post all API List
export const conactForm = async (data) => {
  try {
    const res = await apiClient.post(`${API.CONTACTFORM}`, {
      params: {
        ...data,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const searchProduct = async (data) => {
  try {
    const res = await apiClient.post(`${API.SEARCHPRODUCTS}`, {
      params: {
        ...data,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
