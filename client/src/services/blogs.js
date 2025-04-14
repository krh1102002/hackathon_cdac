import axios from "axios";
import { config } from "./config";

export async function loadAllBlogs() {
  const url = `${config.backendUrl}/blog`;
  const response = await axios.get(url, {
    headers: {
      token: sessionStorage.getItem("token"),
    },
  });
  return response.data;
}

export async function loadMyBlogs() {
  const url = `${config.backendUrl}/blog/user`;
  const response = await axios.get(url, {
    headers: {
      token: sessionStorage.getItem("token"),
    },
  });
  return response.data;
}

export async function addBlog(blog) {
  const url = `${config.backendUrl}/blog/add-blog`;
  const response = await axios.post(url, blog, {
    headers: {
      token: sessionStorage.getItem("token"),
    },
  });
  return response.data;
}

export async function editBlog(blog) {
  const url = `${config.backendUrl}/blog/edit-blog`;
  const response = await axios.put(url, blog, {
    headers: {
      token: sessionStorage.getItem("token"),
    },
  });
  return response.data;
}

export async function deleteBlog(id) {
  const url = `${config.backendUrl}/blog/${id}`;
  const response = await axios.delete(url, {
    headers: {
      token: sessionStorage.getItem("token"),
    },
  });
  return response.data;
}
