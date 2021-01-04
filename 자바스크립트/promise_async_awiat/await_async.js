function findAndSaveUser(Users){
    Users.findOne({})
    .then((user)=>{
        user.name="zero"
        return user.save()
    })
    .then((user)=>{
        return Users.findOne({gender:'m'})
    })
    .then((user)=>{

    })
    .catch((err)=>{
        console.error(err)
    })
}

// async/await를 이용한 promise 처리
async function findAndSaveUser(Users){
    try{
        let user = await Users.findOne({})
        user.name = "Zero"
        user = await user.save()
        user = await Users.findOne({gender:'m'})    
    } catch(error){
        console.error(error)
    }
    
}

const findAndSaveUser = async (Users)=>{
    try{
        let user = await Users.findOne({})
        user.name = "Zero"
        user = await user.save()
        user = await Users.findOne({gender:'m'})    
    } catch(error){
        console.error(error)
    }
}

// for과 async/await를 같이 써서 프로미스 순차적으로 실행
const promise1 = Promise.resolve("성공1")
const promise2 = Promise.resolve("성공2")
(async()=>{
    for await (promise of [promise1, promise2]){
        console.log(promise)
    }
})
