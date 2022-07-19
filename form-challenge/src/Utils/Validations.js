import * as yup from "yup";

export const schema = yup.object({
    fullname: yup.string().required(),
    nickname: yup.string(),
    email: yup.string().email().required(),
    phone: yup.string(),
    checkbox: yup.boolean().isTrue(),
    selectmonth: yup.number().min(1).required(),
    selectday: yup.number().min(1).required(),
}).required();

export const schemaTwo = yup.object({
    linkedin: yup.string(),
    github: yup.string().url().required(),
}).required();

export const schemaThree = yup.object({
    team: yup.string().required(),
    institution: yup.string().required(),
    graduation: yup.string().required(),
}).required();

