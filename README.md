# Next.js-Hugging Face

## Project Structure

The project is structured as follows:

- `assets/`: This directory contains screenshots of the output responses.

- `public/`: Static assets like svg icons and images used in the application.

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
- **Vercel AI SDK**: TypeScript toolkit designed to build AI applications using popular frameworks like Next.js, React etc and runtimes like Node.js.

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

## Results

## Conclusion

## Contributing

Contributions are welcome! If you would like to contribute to this project, please raise an issue to discuss the changes you would like to make. Once the changes are approved, you can create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

If you have any questions or suggestions regarding the project, feel free to reach out to me on my GitHub profile.

Happy coding! 🚀
