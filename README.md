# Todo Microfrontend

Todo app

## Features

- Todo Creation: Add new tasks to the list.
- Todo Status: Mark tasks as completed or incomplete.
- Todo Persistence: Save tasks using localStorage.
- Filtering: Filter tasks by all, active, or completed.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/asyedadilahmed/todo-zortech.git
   cd todo-zortech

2. Install dependencies
    ```bash
    npm install

3. Run the application
    ```bash
    npm run start

# Design and Architectural Choices
    a. The application is built using functional components with hooks for state management.
    b. TypeScript is used for type safety and maintainability.
    c. The component is designed to be easily integrated into various host applications.
    d. LocalStorage is used for persisting todos across sessions.
    e. Unit tests are included to ensure core functionality.

# Microfrontend Considerations
    a. The component can be packaged using a module bundler like Webpack.
    b. Ensure seamless integration by handling prop and data communication efficiently.
    c. Consider edge cases like localStorage availability and invalid input.

# Edge Cases
    a. Handles absence of localStorage gracefully.


# Packaging for library (MircoFrontEnd)
    Though microfrontend is not required for this app, we can consider using a module bundler like Webpack. You can create a `webpack config.js` file for building the component.

    # `webpack.config.js`
    common approach to create a library using webpack and can be installed as dev dependency in other react applications

# Common Webpack setip (Further validations can be added)
    const path = require('path');

    module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        library: 'TodoApp',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        ],
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
    };
"# todo-zortech" 
