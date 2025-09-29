<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - Redux Dictionary App</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body {
            font-family: 'Inter', sans-serif;
        }
        /* Style for code blocks */
        pre {
            background-color: #f3f4f6; /* gray-100 */
            border-radius: 0.5rem;
            padding: 1rem;
            overflow-x: auto;
        }
        code {
            font-family: 'Courier New', Courier, monospace;
        }
    </style>
</head>
<body class="bg-slate-50 text-slate-800 antialiased">

    <main class="max-w-3xl mx-auto p-4 sm:p-6 md:p-8 my-10 bg-white rounded-lg shadow-md border border-slate-200">
        
        <article class="prose prose-slate lg:prose-lg max-w-none">
            <h1 class="text-4xl font-bold text-slate-900 border-b pb-4 mb-6">📖 Redux Dictionary App</h1>
            
            <p>A simple and clean dictionary web application built to demonstrate the core principles of modern Redux with Redux Toolkit. Users can search for a word and view its definitions, parts of speech, and phonetic spelling, fetched from a public API.</p>
            <p>This project serves as a practical, hands-on example for anyone learning state management in React.</p>
            
            <hr class="my-8">

            <h2 class="text-3xl font-bold text-slate-800">✨ Features</h2>
            <ul class="list-disc list-inside space-y-2 my-4">
                <li><strong>Word Search:</strong> Input a word to look up its definition.</li>
                <li><strong>Dynamic Results:</strong> Fetches and displays definitions, phonetics, parts of speech, and examples.</li>
                <li><strong>State Management:</strong> Utilizes a centralized Redux store to manage application state, including loading, error, and data states.</li>
                <li><strong>Asynchronous Logic:</strong> Handles API calls gracefully using `createAsyncThunk`.</li>
                <li><strong>Responsive:</strong> Simple, mobile-first design.</li>
            </ul>

            <hr class="my-8">
            
            <h2 class="text-3xl font-bold text-slate-800">🛠️ Tech Stack</h2>
            <ul class="list-disc list-inside space-y-2 my-4">
                <li><strong>Framework:</strong> <a href="https://reactjs.org/" class="text-indigo-600 hover:underline">React</a></li>
                <li><strong>Build Tool:</strong> <a href="https://vitejs.dev/" class="text-indigo-600 hover:underline">Vite</a></li>
                <li><strong>Language:</strong> <a href="https://www.typescriptlang.org/" class="text-indigo-600 hover:underline">TypeScript</a></li>
                <li><strong>State Management:</strong> <a href="https://redux-toolkit.js.org/" class="text-indigo-600 hover:underline">Redux Toolkit</a> & <a href="https://react-redux.js.org/" class="text-indigo-600 hover:underline">React-Redux</a></li>
                <li><strong>API Client:</strong> <a href="https://axios-http.com/" class="text-indigo-600 hover:underline">Axios</a> for making HTTP requests.</li>
                <li><strong>Styling:</strong> Plain CSS</li>
            </ul>

            <hr class="my-8">

            <h2 class="text-3xl font-bold text-slate-800">🧠 Core Concepts Illustrated</h2>
            <p>This project is designed to make complex Redux concepts intuitive and easy to grasp.</p>

            <h3 class="text-2xl font-semibold mt-6">Project Task Sheet & Learning Plan</h3>
            <p>For a step-by-step guide on how this project was built from scratch, you can follow the detailed task sheet here:</p>
            <p><a href="https://docs.google.com/document/d/1JXp-NHJz7-rd7rQ8b02X38qm7dcrugh1AXuKHVc1Tck/edit?usp=drive_link" class="text-indigo-600 hover:underline font-semibold">🔗 Project Build Task Sheet</a></p>

            <h3 class="text-2xl font-semibold mt-6">The Redux Fairytale 🏰</h3>
            <p>To understand <em>why</em> Redux is so useful and how its core parts (Store, Actions, Reducers, <code>useSelector</code>) work together, we created a simple story. This analogy explains Redux by comparing it to a family building a central store to share items, solving the problem of "prop drilling."</p>
            <p><a href="https://docs.google.com/document/d/1xhsnvB-m90zo7C8lxv8kCu5BPWwigN5Ehqg7oruufOw/edit?usp=drive_link" class="text-indigo-600 hover:underline font-semibold">🔗 Read the Redux Fairytale Analogy Here</a></p>
            
            <hr class="my-8">
            
            <h2 class="text-3xl font-bold text-slate-800">🚀 Getting Started</h2>
            <p>Follow these instructions to get a local copy of the project up and running.</p>
            
            <h3 class="text-2xl font-semibold mt-6">Prerequisites</h3>
            <ul class="list-disc list-inside space-y-2 my-4">
                <li><a href="https://nodejs.org/" class="text-indigo-600 hover:underline">Node.js</a> (version 18.x or higher recommended)</li>
                <li><a href="https://www.npmjs.com/" class="text-indigo-600 hover:underline">npm</a> or a compatible package manager</li>
            </ul>

            <h3 class="text-2xl font-semibold mt-6">Installation & Setup</h3>
            <ol class="list-decimal list-inside space-y-4 my-4">
                <li>
                    <strong>Clone the repository:</strong>
                    <pre><code>git clone https://github.com/your-username/redux-dictionary-app.git</code></pre>
                </li>
                <li>
                    <strong>Navigate to the project directory:</strong>
                    <pre><code>cd redux-dictionary-app</code></pre>
                </li>
                <li>
                    <strong>Install the dependencies:</strong>
                    <pre><code>npm install</code></pre>
                </li>
                <li>
                    <strong>Run the development server:</strong>
                    <pre><code>npm run dev</code></pre>
                    The application should now be running on <code>http://localhost:5173</code>.
                </li>
            </ol>
        </article>
    </main>

</body>
</html>
