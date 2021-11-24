
let db;
let openRequest = indexedDB.open("myDataBase");


openRequest.addEventListener("success",(e)=>{
db = openRequest.result;
})
openRequest.addEventListener("error",(e)=>{
    console.log("DB Error");
})
openRequest.addEventListener("upgradeneeded",(e)=>{

    db = openRequest.result;
    db.createObjectStore('image',{keyPath:'id'})
    db.createObjectStore('video',{keyPath:'id'})

})