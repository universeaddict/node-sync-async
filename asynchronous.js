//asynchronous

const getUserSync = (id, callback) => {
    const time = id === 1 ? 3000 : 2000
    setTimeout(() => {
        const nama = id === 1 ? 'Leo' : 'Alex'
        callback({ id, nama })
    }, time)
}

const userSatu = getUserSync(1, (hasil) => {
    console.log(hasil)
})

const userDua = getUserSync(2, (hasil) => {
    console.log(hasil)
})

const halo = 'hallo world'
console.log(halo)