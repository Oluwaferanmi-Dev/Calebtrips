import {Account, Client, Databases, Storage} from "appwrite";

export const appwriteConfig = {
    endpointUrl: process.env.VITE_APPWRITE_API_ENDPOINT, // Change here
    projectId: process.env.VITE_APPWRITE_PROJECT_ID, // Change here
    apiKey: process.env.VITE_APPWRITE_API_KEY, // Change here
    databaseId: process.env.VITE_APPWRITE_DATABASE_ID, // Change here
    userCollectionId: process.env.VITE_APPWRITE_USERS_COLLECTION_ID, // Change here
    tripCollectionId: process.env.VITE_APPWRITE_TRIPS_COLLECTION_ID, // Change here
}

if (!appwriteConfig.endpointUrl || !appwriteConfig.projectId) {
    throw new Error("Appwrite endpoint URL and project ID must be defined in environment variables.");
}

const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);

export { client, account, database, storage };
