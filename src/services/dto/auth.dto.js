export const LoginDto = user => {
    let data = user.toJSON()

    delete data.password
    delete data.createdAt
    delete data.updatedAt

    return data
}