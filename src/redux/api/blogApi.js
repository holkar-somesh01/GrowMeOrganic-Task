import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const blogApi = createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://inquisitive-heliotrope-1f9336.netlify.app/blogs" }),
    tagTypes: ["blog"],
    endpoints: (builder) => {
        return {
            getBlog: builder.query({
                query: () => {
                    return {
                        url: "https://jsonplaceholder.typicode.com/posts",
                        method: "GET"
                    }
                },
                providesTags: ["blog"]
            }),
            addBlog: builder.mutation({
                query: userData => {
                    return {
                        url: "/",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["blog"]
            }),
            updateBlog: builder.mutation({
                query: blogData => {
                    return {
                        url: `/${blogData._id}`,
                        method: "POST",
                        body: blogData
                    }
                },
                invalidatesTags: ["blog"]
            }),
            deleteBlog: builder.mutation({
                query: id => {
                    return {
                        url: `/${id}`,
                        method: "POST",
                        // body: blogData
                    }
                },
                invalidatesTags: ["blog"]
            }),


        }
    }
})

export const {
    useGetBlogQuery,
    useAddBlogMutation,
    useUpdateBlogMutation,
    useDeleteBlogMutation } = blogApi
