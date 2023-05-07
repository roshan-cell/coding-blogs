import React from 'react'
import { useRouter } from 'next/router';
import styles from "../../styles/Blogpost.module.css"

// Find the corresponding file to slug
// Populate and display them

const slug  = () => {
  const router = useRouter();
  const {slug} = router.query

    return <div className={styles.container}>

      <main className={styles.main}>
      <h1>Title of the page</h1>
      <hr />
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta error soluta harum iste, doloribus vitae id nobis dolorum pariatur sit doloremque exercitationem, qui libero eius possimus! Blanditiis, illo. Magnam, veniam.
      </div>
      </main>
      
       </div>
};
 
export default slug ; 