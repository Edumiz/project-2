import { config } from '@/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from '@/types/components/user';

const params = {
  shop: config.shop,
};

// const convertParams = (input?: any) => {
//   return {
//     ...params,
//     ...input,
//   };
// };

export const apiCaller = createApi({
  reducerPath: 'apiCaller',
  refetchOnMountOrArgChange: 30,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
    prepareHeaders: (headers) => {
      if (import.meta.env.REACT_APP_ENV === 'production') {
        headers.set('Content-Security-Policy', `frame-ancestors https://${params.shop} https://admin.shopify.com`);
        headers.set('Content-Type', 'application/json')
      }
      headers.set('authorization', config.urlParams);
      return headers;
    },
  }),
  tagTypes: ['User'],
  // get data settings
  endpoints: (builder) => ({
    getUsers: builder.query<User[], any>({
      query: (params) => {
        console.log(params);
        const a = new URLSearchParams(params);
        const queryString= a.toString();
        return `/users?${queryString}`
      },
      providesTags: ['User']
    }),
    getUser: builder.query<User, string>({
      query: (id) => `/users/${id}`,
      providesTags: ['User']
    }),
    editUser: builder.mutation<User, Partial<User>>({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: 'PUT',
        body: user,
      }),
      invalidatesTags: ['User']
    }),
    addUser: builder.mutation<User, Partial<User>>({
      query: (user) => ({
        url: `/users/add`,
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User']
    }),
    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User']
    }),
    filterUsers: builder.query<User[], {category: string, value: string}>({
      query: (inputs) => `/users/filter?key=${inputs.category}&value=${inputs.value}`,
    }),
    sortUsers: builder.query<User[], {category: string, order: string}>({
      query: (inputs) => `/users?sortBy=${inputs.category}&order=${inputs.order}&limit=0`,
    }),
  }),
});

export const { 
    useGetUsersQuery, 
    useGetUserQuery, 
    useEditUserMutation, 
    useDeleteUserMutation, 
    useFilterUsersQuery,
    useAddUserMutation,
    useSortUsersQuery
} = apiCaller;