const delay=(t)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        })
    },t)
}

const main=async()=>{
    const url=`https://jsonplaceholder.typicode.com/users/1`
   
    const result=await fetch(url)
    const data=await result.json()
    console.log(data)
}
main()