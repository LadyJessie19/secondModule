import { api } from "./api"

// É uma opção mais simplificada
// export const getAllPostService = async (): Promise<Posts> => {
//   const res = await api.get<Posts>('/posts')
//   return res.data
// }

// É mais usado dessa forma no frontend
export const postService = {
  getAll: async (): Promise<Posts> => {
    const res = await api.get<Posts>('/posts')

    if (res.status === 200) {
      return res.data
    }

    throw new Error('A aplicação está instável')
    
  },
  delete: async (): Promise<void> => {
    //
  }
}

// É mais usado dessa forma no backend
// class PostService {
//   async getAll (): Promise<Posts> {
//     const res = await api.get<Posts>('/posts')
//     return res.data
//   }

//   async delete (): Promise<void> {
//     //
//   }
// }
// export const postService = new PostService()
