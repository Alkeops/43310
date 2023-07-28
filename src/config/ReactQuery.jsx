import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 60000,
            onError: error => console.log(error) //redirect al login x ejemplo
        }
    }
})


export const QueryProvider = ({children}) => {
    return <QueryClientProvider client={queryClient} >
        <ReactQueryDevtools position={"bottom-left"} />
        {children}
    </QueryClientProvider>
}