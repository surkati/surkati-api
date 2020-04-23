export const responseSuccess = (data, message = 'Success!') => {
    return {
        status: true,
        statusCode: 200,
        message,
        data
    }
}

export const responseError = (statusCode, message = 'Error!', data = null) => {
    return {
        status: false,
        statusCode,
        message,
        data
    }
}