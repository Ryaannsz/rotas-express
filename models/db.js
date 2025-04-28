
const mongoose = require('mongoose');


const mongoURI = 'mongodb+srv://ryanbernardo:Rqz61cMuWLGqcUtP@cluster0.wuprkfo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "fullstack"
});


mongoose.connection
  .once('open', () => {
    console.log('Conexão com o MongoDB bem-sucedida!');
  })
  .on('error', (error) => {
    console.error('Erro na conexão com o MongoDB:', error);
  });
