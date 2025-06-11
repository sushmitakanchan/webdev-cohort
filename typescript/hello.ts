let x: number | boolean = 30;
let fname: String | null = "Sush"

function add(x:number, y:number){
    return x + y
}
function createUser(user:{firstname: string; lastname?:string}){
    const trimmedLastname: string = user.lastname?.trim() || ''
    
}

interface User {
    firstname : string;
    lastname?:string;
    email: string;
    profileImageURL?: string
}

function updateUser(user:User){
}

const payload: User={
    firstname:"Sush",
    email:"sush@123"

}
updateUser(payload)
add(4,3)

createUser({
    firstname: "Sush",
    lastname: "Kanchan"
})