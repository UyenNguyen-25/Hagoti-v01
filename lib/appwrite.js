import { Account, Client, ID } from "react-native-appwrite";

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(process.env.endpoint) // Your Appwrite Endpoint
  .setProject(process.env.projectId) // Your project ID
  .setPlatform(process.env.platform);

const createUser = () => {
  // Your application ID or bundle ID.
  const account = new Account(client);

  // Register User
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};

export { createUser };
