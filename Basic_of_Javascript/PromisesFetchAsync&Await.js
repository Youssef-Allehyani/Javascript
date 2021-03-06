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

// const url= fetch("https://jsonplaceholder.typicode.com/users")

// const users = (url).then(response =>{
//     return response.json();
// }).then(data =>{
//     data.forEach(users =>{
//         console.log(users);
//     })
    
// });


// // Async & Await 
// const myUsers = {
//     userList : []
// }
// const asyncfunction = async ()=>{
//     const response = await url;
//     const jsonUserData = await response.json();
//     // console.log(jsonUserData);
//     return jsonUserData;
// }


// const myUsersFunc = async ()=>{
//     const data = await asyncfunction();
//     myUsers.userList = data;
//     console.log(myUsers.userList);
// }

// // asyncfunction();
// myUsersFunc();
// console.log(myUsers.userList);


// // workflow function

// const getAllUserEmail = async ()=>{
//     const response = await url;
//     const jsonUserData = await response.json();
//     const userEmailArray = jsonUserData.map(user =>{
//         return user.email;
//     });
//     postToWebPage(userEmailArray);
// };

// const postToWebPage = (data)=>{
//     console.log(data)
// };

// getAllUserEmail();

// //get

// const getDadJoke = async ()=>{
//     const response = await fetch("https://icanhazdadjoke.com/", {
//         method :"GET",
//         headers: {
//             Accept: "application/json"
//         }
//     });
//     const jsonJokData = await response.json();
//     console.log(jsonJokData);
// };

// getDadJoke();


// // post 
// const jokeObject ={
//     id: "rzs4T0oWgFd"
//     , joke: "Two peanuts were walking down the street. One was a salted."
// }

// const postData = async (jokeObject)=>{
//     const response = await fetch("https://httpbin.org/anything", {
//         method :"post",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body : JSON.stringify(jokeObject)
//     });
//     const jsonUserData = await response.json();
//     console.log(jsonUserData.headers);
// };

// postData(jokeObject);

// 2sd parameter of Fetch


// abstract from a form 
const getData =()=>{
    const requestJoke = {
        firstName:"youssef"
        ,lastName :"Saad",
        categories : ["nerdy"]
    }
    return requestJoke;
}
const buildRequsetUrl = (Data)=>{
    return `https://api.icndb.com/jokes/random?
    firstName = ${Data.firstName}&lastName=${Data.lastName}&limitTo= ${Data.categories}` 
}

const requestJoke = async(Url)=>{
    const response = await fetch(Url);
    const jokeRespons =await response.json();
    const joke = jokeRespons.value.joke;
    postToPage(joke);
}
const postToPage =(joke)=>{
    console.log(joke)
}
const processJokeRequset=async ()=>{
    const requestData = getData();
    const requestUrl = buildRequsetUrl(requestData);
    await requestJoke(requestUrl);
    console.log("finished!")
}
processJokeRequset();