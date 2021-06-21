const users = [
    {
        name:"Andrei",
        age:19
    },
    {
        name:"Shenia",
        age:18
    }
]
const foods = [
    {
        name:"Pizza",
        cal:500
    },
    {
        name:"Burger",
        cal:400
    }
]
const addToUser = (user)=>{
    users.push(user);
}

export {users,foods,addToUser};