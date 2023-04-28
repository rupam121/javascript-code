const fackrequestCallBack = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection timeout:(')
        } else {
            success(`Here is your fack date from ${url}`)
        }
    }, delay)
}

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


fackrequestCallBack('book.com/page1',
    function(response) {
        console.log("It work !!")
        console.log(response)
        fackrequestCallBack("books.com/page2",
            function(response) {
                console.log('it worked again!!')
                console.log(response)
                fackrequestCallBack("books.com/page3",
                    function(response) {
                        console.log('it worked again(3rd req)!!')
                        console.log(response)
                    },
                    function(err) {
                        console.log("Error(3rd req) !!", err)
                    })
            },
            function(err) {
                console.log("Error(2nd req) !!", err)
            })
    },
    function(err) {
        console.log("Error !!", err)
    })