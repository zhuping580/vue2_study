import axios from 'axios'

// export function getCourses() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve([{ name: 'web全栈', price: 8999 }, { name: 'web高级', price: 8999 }])
//     }, 2000);
//   })
// }
// axios.defaults.timeout = 3000
export function getCourses() {
  return axios.get('/api/courses').then(res => res.data)
}