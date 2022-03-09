import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define our single API slice object
export const apiSlice = createApi({
	// The cache reducer expects to be added at `state.api` (already default - this is optional)
	reducerPath: 'api',
	// All of our requests will have URLs starting with '/fakeApi'
	baseQuery: fetchBaseQuery({ baseUrl: 'https://test.cafekolhida.ru' }),
	// The "endpoints" represent operations and requests for this server
	endpoints: builder => ({
		// The `getPosts` endpoint is a "query" operation that returns data
		getProducts: builder.query({
			// The URL for the request is '/fakeApi/posts'
			query: () => '/products'
		}),
		getCategories: builder.query({
			// The URL for the request is '/fakeApi/posts'
			query: () => '/categories'
		}),
		getUser: builder.query({
			// The URL for the request is '/fakeApi/posts'
			query: phone => `/app-users?phone=${phone}`
		})
		// addNewUsersPassword: builder.mutation({
		// 	query: initialPost => ({
		// 	  url: '/posts',
		// 	  method: 'POST',
		// 	  // Include the entire post object as the body of the request
		// 	  body: initialPost
		// 	})
		//   })
	})
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetProductsQuery, useGetCategoriesQuery, useGetUserQuery } = apiSlice;