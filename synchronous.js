//synchronous

const getUserSync = (id) => {
    const nama = id === 1 ? 'Leo' : 'Alex'
    return { id, nama }
}

const userSatu = getUserSync(1)
console.log(userSatu)

const userDua = getUserSync(2)
console.log(userDua)

const halo = 'hallo world'
console.log(halo)