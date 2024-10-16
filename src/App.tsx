import { useEffect, useState } from "react";
import { FileUploader } from '@aws-amplify/ui-react-storage';
import { Storage } from 'aws-amplify'; // Import Storage module
import '@aws-amplify/ui-react/styles.css';
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    const subscription = client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
    return () => subscription.unsubscribe(); // Clean up the subscription
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }

  return (
    <main>
      <h1>My todos</h1>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review the next step of this tutorial.
        </a>
      </div>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>

      {/* FileUploader Component for Uploading Images */}
      <h2>Upload an Image</h2>
      <FileUploader
        acceptedFileTypes={['image/*']} // Accepts image files
        path="photos/" // Set the path in your S3 bucket where images will be stored
        maxFileCount={1} // Limit to one file
        isResumable // Enable resumable uploads
              
      />

      
    </main>
  );
}

export default App;
