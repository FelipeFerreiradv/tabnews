const status = (request, response) => {
  response
    .status(200)
    .json({
      chave:
        "hello, meu nome e felipe licas, na qual estou fazendo minha primeira aplicacao no status",
    });
};

export default status;
