/*
formas de criar uma rota

create - criar
index - listar
update - atualizar
remove - remover
show - exibir um único registro
*/

export function index({req, res, database}) {
  const tickets = database.select('tickets')
  return res.end(JSON.stringify(tickets))
}

