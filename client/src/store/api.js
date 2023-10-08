import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL,
  }),
  tagTypes: [
    "User",
    "Product",
    "Customer",
    "Transaction",
    "Geography",
    "Sales",
    "Admins",
    "Dashboard",
  ],
  endpoints: (builder) => {
    return {
      fetchUser: builder.query({
        query: (id) => {
          return {
            url: `/general/user/${id}`,
          };
        },
        providesTags: ["User"],
      }),

      fetchProducts: builder.query({
        query: () => {
          return {
            url: `/client/products`,
          };
        },
        providesTags: ["Product"],
      }),

      fetchCustomers: builder.query({
        query: () => {
          return {
            url: `/client/customers`,
          };
        },
        providesTags: ["Customer"],
      }),

      fetchTransactions: builder.query({
        query: () => {
          return {
            url: "/client/transactions",
          };
        },
        providesTags: ["Transaction"],
      }),

      fetchGeography: builder.query({
        query: () => {
          return {
            url: "/client/geography",
          };
        },
        providesTags: ["Geography"],
      }),

      fetchSales: builder.query({
        query: () => {
          return {
            url: "sales/sales",
          };
        },
        providesTags: ["Sales"],
      }),

      fetchAdmins: builder.query({
        query: () => {
          return {
            url: "management/admins",
          };
        },
        providesTags: ["Admins"],
      }),
      fetchDashboard: builder.query({
        query: () => {
          return {
            url: "general/dashboard",
          };
        },
        providesTags: ["Dashboard"],
      }),
    };
  },
});

export const {
  useFetchUserQuery,
  useFetchProductsQuery,
  useFetchCustomersQuery,
  useFetchTransactionsQuery,
  useFetchGeographyQuery,
  useFetchSalesQuery,
  useFetchAdminsQuery,
  useFetchDashboardQuery,
} = api;
