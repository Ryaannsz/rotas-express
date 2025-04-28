import mongoose from 'mongoose';


const mongoURI = 'mongodb+srv://ryanzinteste:senhaparabancoteste12@cluster0.wuprkfo.mongodb.net/fullstack?retryWrites=true&w=majority';


mongoose.connect(mongoURI, {

  dbName: "fullstack"
}).then(() => console.log("conectado!!!!!!"))
.catch((error) => console.log("deu erro: "+error));


mongoose.connection
  .once('open', () => {
    console.log('Conexão com o MongoDB bem-sucedida!');
  })
  .on('error', (error) => {
    console.error('Erro na conexão com o MongoDB:', error);
  });
