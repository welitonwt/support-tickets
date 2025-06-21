import http from "node:http"
import { jsonHandle } from "./middlewares/jsonHandle.js"
import { routeHandler } from "./middlewares/routeHandler.js"

async function listener(req, res) {
  await jsonHandle(req, res)
  routeHandler(req, res)
}

http.createServer(listener).listen(3333)