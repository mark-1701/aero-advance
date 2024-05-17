// import axios from "axios";

export async function getData(table) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/${table}`);
  const result = await response.json();
  return result.data;
}

export async function showData(id) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const result = await response.json();
  return result.data;
}

export async function createData(table, formData) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${table}`, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json'
      }
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function updateData(table, id, formData) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${table}/${id}`, {
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

export async function deleteData(table, id) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${table}/${id}`, {
      method: 'DELETE'
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
}
