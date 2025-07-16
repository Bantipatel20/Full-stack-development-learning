import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";



export const AppContext = createContext();


export default function AppContextProvider({children}){
        const [loading,setLoading] = useState(false);
        const [posts,setPosts] = useState([]);
        const [page,setPage] = useState(1);
        const [totalPages,setTotalPags] = useState(null);

        async function fetchBlogPost(page=1) {
            setLoading(true);
            let url =  `${baseUrl}?page=${page}`;
            try{
                const  response = await fetch(url);
                const data = await response.json();
                setPage(data.page);
                setPosts(data.posts);
                setTotalPags(data.totalPages);
            }catch(e){
                console.log("Error in fetching data");
                setPage(1);
                setPosts([]);
                setTotalPags(null);
            }
            setLoading(false);
        }

        function handlePageChange(page){
            setPage(page);
            fetchBlogPost(page);
        }
        const value = {
            fetchBlogPost,handlePageChange,posts,setPosts,loading,setLoading,page,setPage,totalPages,setTotalPags
        };

        return <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
}

