import React from "react";
import { getSession, useSession } from "next-auth/react";
const Blog = ({ data }) => {
  const { data: session } = useSession();
  return (
    <div>
      <h1>Blog page - {data}</h1>
    </div>
  );
};

export default Blog;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=http://3000/blog`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      data: session ? "List of 100 blogposts" : "list of free blogs",
    },
  };
}
