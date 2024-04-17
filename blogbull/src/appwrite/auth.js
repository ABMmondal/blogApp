import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthServices{
    client =new Client();
    account;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectId); // Your project ID
        this.account = new Account(this.client);
    }

    async createAccount({email, password,name}) {
        try {
           const userAccount= await this.account.create(ID.unique(), email,password,name);
           if (userAccount){
            //call another method
            return this.login({email,password}); 
           } else{
            return userAccount
           }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
           return await this.account.createEmailSession(email,password);

        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
           return await this.account.get();
           
        } catch (error) {
            console.log('error in getCurrentUser',error);
        }
        return null
    }
    async logOut() {
        try {
           return await this.account.deleteSessions();
           
        } catch (error) {
            console.log('error in logout',error);
        }
        return null
    }
}

const authServices =new AuthServices( );

export default authServices