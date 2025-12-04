const delay=(t)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        })
    },t)
}

const main=async()=>{

    for(let i=0;i<10;i++){
    const url=`https://jsonplaceholder.typicode.com/users/${i+1}`
   
    const result=await fetch(url)
    const data=await result.json()
    console.log(data.id,"------",data.name,"-----",data.email)
    }
}
main()