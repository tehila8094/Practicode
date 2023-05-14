import axios from 'axios';

axios.defaults.baseURL = "https://localhost:7106/item"
// const apiUrl = "https://localhost:7106"
axios.interceptors.response.use(
  response => response,
  error =>
    console.log(error)
);

export default {
  getTasks: async () => {
    const result = await axios.get(``)
    return result.data;
  },

  addTask: async (name) => {
    console.log('addTask', name)
    const result = await axios.post(``, { Id: 0, Name: name, IsComplete: false })
    return result;
  },

  setCompleted: async (id, isComplete) => {
    console.log('setCompleted', { id, isComplete })
    let resultById = await axios.get(`/${id}`)
    console.log("----o.k----", resultById)

    resultById.data.isComplete = isComplete
    await axios.put(`/${id}`, { Id: resultById.data.id, Name: resultById.data.name, IsComplete: resultById.data.isComplete })
      .then(console.log("sucsses"))
  },

  deleteTask: async (id) => {
    console.log('deleteTask')
    return await axios.delete(`/${id}`)
  }
};
