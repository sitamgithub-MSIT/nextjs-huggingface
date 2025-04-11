# NextJS-Hugging Face

This Next.js project makes use of Hugging Face inference providers in OpenAI-compatible mode to access various multimodal models. It serves as a simple example of how to utilize these inference providers alongside the Vercel AI SDK to create a multimodal chatbot that interacts with users through text and images. The project is designed to be easy to set up and run locally, making it a great starting point for developers looking to explore the capabilities of Hugging Face models in a Next.js environment.

## Project Structure

The project is structured as follows:

- `assets/`: This directory contains screenshots of the output responses.

- `public/`: Static assets like SVG icons and images used in the application.

- `app/`: Main application directory.

  - `globals.css`: Global stylesheet for the application.
  - `layout.tsx`: Root layout for the application.
  - `page.tsx`: Main page for the application.

  - `api/chat/`: Directory for API routes.
    - `route.ts`: API endpoint for handling chat requests with multimodal capabilities.

- `.env.example`: Environment variable template for project configuration.
- `.gitignore`: Specifies which files and directories should be ignored by Git.
- `LICENSE`: Project licensing information.
- `README.md`: Project documentation and setup instructions.
- `package.json`: Project dependencies and script configuration.

## Technologies Used

- **JavaScript**: High-level programming language for building web applications.
- **TypeScript**: Superset of JavaScript that adds static types to the language.
- **Tailwind CSS**: Utility-first CSS framework for styling web applications.
- **React**: JavaScript library for building user interfaces.
- **Next.js**: React framework for building user interfaces.
- **Hugging Face**: AI model hub for accessing the multimodal model.
- **Vercel AI SDK**: TypeScript toolkit designed to build AI applications using popular frameworks like Next.js, React, and runtimes like Node.js.

## Getting Started

To get started with this project, follow the steps below:

1. Clone the repository: `git clone https://github.com/sitamgithub-MSIT/nextjs-huggingface.git`
2. Change the directory: `cd nextjs-huggingface`
3. Install the required dependencies: `npm install`
4. Run the application: `npm run dev`

**Note**: You need a Hugging Face access token to run the application. You can get the token by signing up on the Hugging Face website and creating a new token from the settings page. After getting the token, you can set it as an environment variable `HUGGINGFACE_TOKEN` in your system by creating a `.env.local` file in the project's root directory. Replace the values with your API key.

```bash
HUGGINGFACE_TOKEN=your_token_here
```

Open your local host to view the web application in your browser at `http://localhost:3000/`.

## Deployment

## Usage

Once running (either locally in development mode using npm run dev or in production), open your browser and navigate to http://localhost:3000/.

- Chat Interface: The main page presents a multi-modal chat interface. Users can send text messages and attach images.
- Image Upload: When attaching images, previews are display for each uploaded image. You can remove any selected image before sending your message.
- Chat Interaction: The chat uses Hugging Face’s inference provider with the AI chat model to return responses with text and image attachments.

## Results

When the application is running, users will encounter a responsive chat interface where text entries prompt AI responses based on the Hugging Face model. Users can upload images, which will display preview thumbnails before submission. The AI's responses may include multi-modal attachments, showcasing images alongside text as provided by the model output. This setup demonstrates how traditional chat interfaces can be enhanced with multimodal capabilities. For results, please refer to the `assets/` directory for screenshots that illustrate the chat interface in action.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please raise an issue to discuss the changes you would like to make. Once the changes are approved, you can create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

If you have any questions or suggestions regarding the project, feel free to reach out to me on my GitHub profile.

Happy coding! 🚀
