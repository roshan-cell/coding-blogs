import * as fs from 'fs';

export default async function handler(req, res) {
    
    let data = await fs.promises.readdir("blogdata");
    let myfiles;
    let allBlogs = [] ;
    for(let index=0 ;  index< data.length ; index++) {
        const item = data[index];
        console.log(item) ;
        myfiles = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
        allBlogs.push(JSON.parse(myfiles))
        
    }
    res.status(200).json(allBlogs) ;
  }
   