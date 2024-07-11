import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://inquisitive-heliotrope-1f9336.netlify.app//users" }),
    tagTypes: ["user"],
    endpoints: (builder) => {
        return {
            getUsers: builder.query({
                query: () => {
                    return {
                        url: "/",
                        method: "GET"
                    }
                },
                providesTags: ["user"]
            }),
            loginUser: builder.query({
                query: userData => {
                    return {
                        url: "/",
                        method: "GET",
                        params: userData
                    }
                },
                transformResponse: data => {
                    if (data.length > 0) {
                        localStorage.setItem("user", JSON.stringify(data[0]))
                        return data[0]
                    } else {
                        return null
                    }
                }
            }),
            RegisterUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/",
                        method: "POST",
                        body: userData
                    }

                },
                // invalidatesTags: ["mobileAuth"]
            }),


        }
    }
})

export const {
    useLazyGetUsersQuery,
    useGetUsersQuery,
    useLazyLoginUserQuery,
    useRegisterUserMutation
} = userApi
