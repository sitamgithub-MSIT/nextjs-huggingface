"use client";

/** Import necessary modules. */
import { useChat } from "@ai-sdk/react";
import { useRef, useState } from "react";
import Image from "next/image";

/** This is a simple multi-modal chat interface that allows users to chat with the AI model. */
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const [files, setFiles] = useState<FileList | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string[]>([]);

  // Handle file selection and generate previews
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(event.target.files);

      // Create preview URLs for selected images
      const newPreviews: string[] = [];
      Array.from(event.target.files).forEach((file) => {
        if (file.type.startsWith("image/")) {
          newPreviews.push(URL.createObjectURL(file));
        }
      });
      setImagePreview(newPreviews);
    }
  };

  // Clear file selection and previews
  const clearFileSelection = () => {
    setFiles(undefined);
    setImagePreview([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <div className="flex-1 overflow-y-auto mb-24 space-y-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`p-3 rounded-lg ${
              m.role === "user"
                ? "bg-blue-100 dark:bg-blue-800 ml-auto max-w-[80%]"
                : "bg-gray-100 dark:bg-gray-700 mr-auto max-w-[80%]"
            }`}
          >
            <div className="font-semibold mb-1">
              {m.role === "user" ? "You" : "AI Assistant"}
            </div>
            <div className="whitespace-pre-wrap text-sm">{m.content}</div>
            <div className="mt-2 space-y-2">
              {m?.experimental_attachments
                ?.filter((attachment) =>
                  attachment?.contentType?.startsWith("image/")
                )
                .map((attachment, index) => (
                  <div
                    key={`${m.id}-${index}`}
                    className="rounded-md overflow-hidden"
                  >
                    <Image
                      src={attachment.url}
                      width={500}
                      height={500}
                      alt={attachment.name ?? `attachment-${index}`}
                      className="object-contain max-h-60 w-auto"
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <form
        className="fixed bottom-0 w-full max-w-md p-4 mb-8 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 rounded-lg shadow-xl space-y-3"
        onSubmit={(event) => {
          handleSubmit(event, {
            experimental_attachments: files,
          });
          clearFileSelection();
        }}
      >
        {imagePreview.length > 0 && (
          <div className="flex overflow-x-auto gap-2 pb-2">
            {imagePreview.map((src, index) => (
              <div key={index} className="relative flex-shrink-0">
                <Image
                  src={src}
                  width={80}
                  height={80}
                  alt={`Preview ${index}`}
                  className="h-20 w-20 object-cover rounded-md"
                />
                <button
                  type="button"
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                  onClick={() => {
                    const newPreviews = [...imagePreview];
                    newPreviews.splice(index, 1);
                    setImagePreview(newPreviews);
                    // Create new FileList from current files minus the removed one
                    if (files) {
                      const dataTransfer = new DataTransfer();
                      Array.from(files).forEach((file, i) => {
                        if (i !== index) dataTransfer.items.add(file);
                      });
                      setFiles(
                        dataTransfer.files.length > 0
                          ? dataTransfer.files
                          : undefined
                      );
                    }
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center gap-2">
          <label className="flex items-center justify-center p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            <span className="sr-only">Add images</span>
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              multiple
              ref={fileInputRef}
              accept="image/*"
            />
          </label>

          <input
            className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:text-gray-100"
            value={input}
            placeholder="Type your message..."
            onChange={handleInputChange}
          />

          <button
            type="submit"
            className="p-2 bg-blue-500 dark:bg-blue-600 text-white rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!input.trim() && !files}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
