import axios, { AxiosResponse } from 'axios'


const baseUrl: string = 'http://localhost:4000'

 const getUsers = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const users: AxiosResponse<ApiDataType> = await axios.get(
      `${baseUrl}/api/users`
    )
    return users
  } catch (error) {
    throw new Error(error)
  }
}

 const addUser= async (formData: IUser): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const user: Omit<IUser, '_id'> = {
      email: formData.email,
      username: formData.username,
      password: formData.password
    }
    const saveUser: AxiosResponse<ApiDataType> = await axios.post(
      `${baseUrl}/register`,
      user
    )
    return saveUser
  } catch (error) {
    throw new Error(error)
  }
}

 const updateUsername = async ({username,_id}: IUser): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const   usernameUpdate: Pick<IUser, 'username'> = {
      username:username,
    }
    const updatedUser: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/user/${_id}`,
      usernameUpdate
    )
    return updatedUser
  } catch (error) {
    throw new Error(error)
  }
}

const deleteUser = async (_id: string): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedUser: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/user/${_id}`
    )
    return deletedUser
  } catch (error) {
    throw new Error(error)
  }
}


export { getUsers ,addUser,updateUsername,deleteUser }
