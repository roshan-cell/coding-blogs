import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

// 1 - Collect all the fields from blogdata directory
// 2 - Iterate throguh them and display

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blog").then((a) => {
      return a.json()
      .then((parsed) => {
        setBlogs(parsed);
      });
    });
  }, []);
 
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Latesst Blogs</h2>
        <br />

        {blogs.map((blogitem) => {
          return (
            <>
              <div >
                <Link href={`/blogpost/${blogitem.slug}}`}>
                  <h3 className={styles.blogItemh3}> {blogitem.title} </h3>
                </Link>

                <p className={styles.blogItemp} >{blogitem.content}</p>
                <br />
              </div>
            </>
          );
        })}
      </main>
    </div>
  );
};

export default Blog;
