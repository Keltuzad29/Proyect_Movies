const API = "https://api.themoviedb.org/3";
export function get (path){
    return fetch(API+ path, {
        headers:{
             Authorization: 
             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTFjMjI3YmZkMjRlN2VhODM1OWYyZDEyNzgwOTc5NiIsInN1YiI6IjYwZTE4NTM0MjU4ODIzMDA1ZDdiMmQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZFRKrXFHOnDMokByEjDZr8xYHaaRDBzweVRViY4Zqcg",
            "Content-Type": "application/json;charset=utf-8",     
        }
    }).then(result => result.json())
 }