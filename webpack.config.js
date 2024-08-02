const path = require('path');

module.exports = {
<<<<<<< HEAD
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'), // Ensure this directory is created
=======
  mode: 'production', // or 'development' depending on your needs
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
>>>>>>> 94957ed1fd9ba465b39cd06ce83e27d6423c676f
  },
  module: {
    rules: [
      {
<<<<<<< HEAD
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: 'src',
            },
          },
        ],
      },
      {
        test: /\.js$/,
=======
        test: /\.(js|jsx)$/,
>>>>>>> 94957ed1fd9ba465b39cd06ce83e27d6423c676f
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
<<<<<<< HEAD
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
=======
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
>>>>>>> 94957ed1fd9ba465b39cd06ce83e27d6423c676f
  },
};
