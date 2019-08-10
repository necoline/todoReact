import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const addContact = payload => api.post(`/contact`, payload)
export const getAllContacts = () => api.get(`/contacts`)
export const updateContactById = (id, payload) => api.put(`/contact/${id}`, payload)
export const deleteContactById = id => api.delete(`/contact/${id}`)
export const getContactById = id => api.get(`/contact/${id}`)

const apis = {
    addContact,
    getAllContacts,
    updateContactById,
    deleteContactById,
    getContactById,
}

export default apis