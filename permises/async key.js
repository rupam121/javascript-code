// const sing = async() => {
//     throw "oh no, problem!"
//     return 'la la la la'
// }


// sing()
//     .then((data) => {
//         console.log("PERMISE RESEOLVED WITH:", data)
//     })
//     .catch(err => {
//         console.log("oh no,promise rejected")
//         console.log(err)
//     })

const login = async(username, password) => {
    if (!username || !password) throw 'Missing credentials'
    if (password === '123') return 'WELLCOME'
    throw 'invalid password'
}
login('ajfdjkfdgkdgj', '123')
    .then(msg => {
        console.log("logged in!")
        console.log(msg)
    })
    .catch(err => {
        console.log("error")
        console.log(err)
    })