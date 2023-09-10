# Chat Application with Socket.io :computer:
## Introduction :wave:

This is a real-time chat application built using the MERN (MongoDB, Express.js, React, Node.js) stack, along with Socket.io for real-time communication and Chakra UI for the user interface.

## Features :rocket:

- Real-time messaging: Instantly send and receive messages in real-time.
- User authentication: Secure authentication and authorization using JWT.
- User profiles: Users can update their profiles with avatars and usernames.
- Group messaging: Create and manage group chats.
- Search users: Find other users to chat with.
- Real-time notifications: Get notified of new messages and chat activity.

## Technologies Used :wrench:

- **MongoDB**: A NoSQL database used for storing user data and chat messages.
- **Express.js**: A Node.js framework used for building the server-side API.
- **React**: A JavaScript library for building the user interface.
- **Node.js**: A JavaScript runtime environment for server-side development.
- **Socket.io**: A library for enabling real-time, bidirectional communication.
- **Chakra UI**: A component library for building user interfaces with style and ease.
- **JWT (JSON Web Tokens)**: Used for secure user authentication.
- **Postman**: A powerful tool for API development, testing, and documentation.

## Getting Started :gear:

Follow these steps to set up and run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Decoder-25/Chat-App_Socket.Io.git
   ```
2. **Install dependencies:**

   ```bash
   npm install
   ```
   ```bash
   cd frontend
   npm install
   ```
3. **Set up the environment variables:**
  Create a .env file in the root directory with the following content:
   ```
   PORT=5000
   MONGO_URI = your_mongodb_uri_here
   JWT_SECRET = your_jwt_secret_here
   ```
   You can use my mongo url as folowing:
   ```
   MONGO_URI = mongodb+srv://Disha:Lb2ywYn7BprjeiAv@cluster0.pdwnxak.mongodb.net/?retryWrites=true&w=majority
   ```
4. **Start the server and client:**

    In the root directory, run:
     ```bash
     npm start
     ```
    In the frontend directory, run:
     ```bash
     cd frontend
     npm start
     ```
## Usage :speech_balloon:

1. **Register or log in to your account.**
   - Create an account or log in with your credentials.

2. **Customize your profile with a username and avatar.**
   - Personalize your profile to make it unique.

3. **Start chatting with other users individually or in group chats.**
   - Initiate conversations with other users in real-time.

4. **Search for users to connect with.**
   - Find and connect with other users easily.

5. **Receive real-time notifications for new messages and chat activity.**
   - Stay updated with instant notifications.

6. **Log out and log in as needed.**
   - Manage your session as required.


## API Documentation  :page_with_curl:

For detailed information about the API endpoints and how to use them,open Postman and please refer to the [API Documentation](https://documenter.getpostman.com/view/20379285/2s9YC1XEvG).

## Acknowledgments :raised_hands:

Thanks to the developers of the MERN stack, Socket.io, and Chakra UI for their amazing tools and libraries.

## Contact  :email:

If you have any questions or suggestions, feel free to contact us at dishabiswas010@gmail.com.
