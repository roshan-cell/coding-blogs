import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import styles from "../../styles/Blogpost.module.css"

// Find the corresponding file to slug
// Populate and display them

const slug  = () => {
  const [blogs, setBlogs] = useState();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return ;
    const {slug} = router.query ;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
      return a.json()
    })
    .then((parsed) => {
      setBlogs(parsed);
    });
  }, [router.isReady]);

    return <div className={styles.container}>

      <main className={styles.main}>
      <h1>{blogs && blogs.title}</h1>
      <hr />
      <div>
        {blogs && blogs.content}
      </div>
      </main>
      
       </div>
};
 
export default slug ; 