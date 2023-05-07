import React from 'react'
import styles from "../styles/Blog.module.css"
import Link from 'next/link'

// 1 - Collect all the fields from blogdata directory
// 2 - Iterate throguh them and display

const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>

      <h2>Latesst Blogs</h2>
      <br />

      <div className={styles.blogItem}>   
      <Link href="/blogpost/lear-js">
        <h3>How to learn JavaScript in 2022? </h3>  </Link>
        <p>Javascript is the language used to design logic pf web</p>
      </div>
      <br />
      <div className={styles.blogItem}>
        <h3>How to learn JavaScript in 2022? </h3>
        <p>Javascript is the language used to design logic pf web</p>
      </div>

      <br />
      <div className={styles.blogItem}>
        <h3>How to learn JavaScript in 2022? </h3>
        <p>Javascript is the language used to design logic pf web</p>
      </div>

      </main>
    </div>
  )
}

export default Blog