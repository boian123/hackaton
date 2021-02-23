interface IUser {
    _id: string;
    email: string;
    username: string;
    password: string;
    createdAt?: string;
    updatedAt?: string;
}

type UserProps = {
    user: IUser
}

type ApiDataType = {
    message: string
    status: string
    users: IUser[]
    user: IUser
  }
  