import { redirect } from "next/navigation";

// services/postApi.js
export const getPost = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_POST_API}/posts`);
    const data = await res.json();
    // if(data){
    //   return redirect(`/post/${data[0].id}`)
    // }
    return data;
  };
  