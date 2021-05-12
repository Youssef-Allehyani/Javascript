import {posts} from "./psts.js"

posts.forEach((posts) =>{
    console.log(posts);
});

console.clear();
 
const filter = posts.filter((posts)=>{
    return posts.userId===10;
});

console.log(filter);

const mapp = filter.map((posts)=>{
    return posts.id *10;
});
console.log(mapp)


const reducePostsValue = mapp.reduce((sum,posts)=>{
    return posts + sum
})

console.log(reducePostsValue)