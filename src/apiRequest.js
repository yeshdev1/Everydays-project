import axios from 'axios';

const endPoint = "https://dev.requiemapp.com/public/memorial/random";
//This is the one for memorials
export function getMemorialsData(){
  return axios.get(endPoint);
}
