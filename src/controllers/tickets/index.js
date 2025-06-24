/*
formas de criar uma rota

create - criar
index - listar
update - atualizar
remove - remover
show - exibir um único registro
*/

export function index({req, res, database}) {
  const {status} = req.query

  const filters = status ? { status } : null
  
  const tickets = database.select('tickets', filters)

  return res.end(JSON.stringify(tickets))
}

