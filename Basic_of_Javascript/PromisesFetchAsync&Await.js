//promise 

const myPromise = new Promise((resolve , reject )=>{
    const error = false;
    if(error){
        resolve("The Promise is resloved .");
    }else{
        reject("The promise is rejected.");
    }
});

const newPromis = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("the new resolve");
    },3000);
});

console.log(myPromise);

newPromis.then(value => {
    console.log(value);
})

myPromise.then(value =>{
    return value;
}).then(newvalue =>{
    console.log(newvalue)
}).catch(error => {
    console.error(error);
});

// fetch 

const url= fetch("https://jsonplaceholder.typicode.com/users")

// const users = (url).then(response =>{
//     return response.json();
// }).then(data =>{
//     data.forEach(users =>{
//         console.log(users);
//     })
    
// });


// Async & Await 
const myUsers = {
    userList : []
}
const asyncfunction = async ()=>{
    const response = await url;
    const jsonUserData = await response.json();
    // console.log(jsonUserData);
    return jsonUserData;
}


const myUsersFunc = async ()=>{
    const data = await asyncfunction();
    myUsers.userList = data;
    console.log(myUsers.userList);
}

// asyncfunction();
myUsersFunc();
console.log(myUsers.userList);