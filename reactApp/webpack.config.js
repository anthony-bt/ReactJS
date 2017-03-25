const path = require('path');
var APP_DIR = path.resolve(__dirname, 'reactApp')

var config = {
   entry: './main.js',
	
   output: {
      path: APP_DIR + './',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
