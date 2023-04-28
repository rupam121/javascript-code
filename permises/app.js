// const fackrequestCallBack = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure('Connection timeout:(')
//         } else {
//             success(`Here is your fack date from ${url}`)
//         }
//     }, delay)
// }

const fackrequestPermise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection timeout:(')
            } else {
                resolve(`Here is your fack date from ${url}`)
            }
        }, delay)
    })
}



//fack request permises
fakeRequestPromise('yeip.com/api/coffee/page1')
    .then(() => {
        console.log("it worked !! (page1)")
        return fakeRequestPromise('yeip.com/api/coffee/page2')
    })
    .then(() => {
        console.log("it worked !! (page2)")
        return fakeRequestPromise('yeip.com/api/coffee/page3')
    })
    .then(() => {
        console.log("it worked !! (page3)")
    })
    .catch(() => {
        console.log("oh no, a request failed!!!!! ")
    })




// //