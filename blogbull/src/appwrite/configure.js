import conf from "../conf/conf";
import { Client,Databases,Storage,Query } from "appwrite";

export class Service{
    client =new Client();
    databases;
    bucket;
    
    constructor (){
        this.client
        .setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectId); // Your project ID
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async creatPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,// Database ID
                conf.appwriteCollectionId,// Collection ID
                slug, // ID for  the document
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId}
            );
 
         } catch (error) {
             throw error;
         }
    }
     async updatePost(slug, {title,content,featuredImage,status,userId}){
        

     }
}

const service =new Service( );
export default  service;