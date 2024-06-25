// app/post/page.jsx

import PostPage from "@/app/componenet/PostPage";
import { getPost } from "@/services/postApi";

export default async function ServerComponent() {
  const data = await getPost();
  return <>
  <PostPage data={data} />
  </>;
}
