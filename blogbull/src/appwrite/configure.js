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
                    userId
                }
            );
 
         } catch (error) {
            console.log('error in configure: creatPost',error);
         }
    }
     async updatePost(slug, {title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,// Database ID
                conf.appwriteCollectionId,// Collection ID
                slug, // ID for  the document
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
 
         } catch (error) {
            console.log('error in configure: updatePost',error);
         }

     }

     async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,// Database ID
                conf.appwriteCollectionId,// Collection ID
                slug // ID for  the document
                
            )
            return true
 
         } catch (error) {
            console.log('error in configure: deletePost',error);
             return false
         }

     }

     async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,// Database ID
                conf.appwriteCollectionId,// Collection ID
                slug // ID for  the document
                
            )
 
         } catch (error) {
            console.log('error in configure: getPost',error);
             return false
         }

     }

     async getAllPost(queries =[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,// Database ID
                conf.appwriteCollectionId,// Collection ID
                queries         
                
            )
 
         } catch (error) {
            console.log('error in configure: getAllPost',error);
             return false
         }

     }

}

const service =new Service( );
export default  service;