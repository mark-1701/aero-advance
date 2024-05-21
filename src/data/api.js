// import axios from "axios";
export async function getData(url) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/${url}`);
  const result = await response.json();
  return result.data;
}

export async function showData(url, id) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/${url}/${id}`);
  const result = await response.json();
  return result.data;
}

export async function createData(url, formData) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${url}`, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json'
      }
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function updateData(url, id, formData) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${url}/${id}`, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json'
      }
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function deleteData(url, id) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${url}/${id}`, {
      method: 'DELETE'
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
