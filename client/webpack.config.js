const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: '../src/index.js', // The entry point for your application
  output: {
    path: path.resolve(__dirname, 'build'), // Output directory for the build files
    filename: 'bundle.js' // Name of the output bundle file
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match files with .js or .jsx extensions
        exclude: /node_modules/, // Exclude node_modules from transpilation
        use: 'babel-loader' // Use Babel to transpile code
      },
      {
        test: /\.css$/, // Match CSS files
        use: ['style-loader', 'css-loader'] // Use loaders to handle CSS
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html' // Use the template file
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'] // Auto-resolve these extensions
  },
  devServer: {
    port: 3000, // Development server port
    open: true, // Automatically open the browser
    hot: true // Enable hot reloading
  }
};