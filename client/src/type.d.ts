interface IUser {
    _id: string;
    email: string;
    username: string;
    password: string;
    createdAt?: string;
    updatedAt?: string;
}
interface LoginUserForm{
    email: string;
    password: string;
}

type UserProps = {
    user: IUser
}
interface Token {
    token: string;
}

type ApiDataType = {
    message: string
    status: string
    users: IUser[]
    user: IUser
    input:LoginUserForm
    token:Token
  }
  