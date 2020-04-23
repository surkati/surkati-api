import { body } from 'express-validator'

const sosmed = [
    'google',
    'facebook'
]

export const webRequest = [
    body('email', 'invalid email format').isEmail(),
    body('password', 'invalid password').exists()
]

export const mobileRequest = [
    body('email', 'invalid email format').isEmail(),
    body('password', 'invalid password').exists(),
    body('sosmed', 'sosmed does not exist').optional({ nullable: true }).custom(value => sosmed.indexOf(value) > 0 ? true : false)
]