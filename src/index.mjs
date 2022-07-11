#! /usr/bin/env zx

import { createServer } from 'http'
import './task/index.mjs'

const server = createServer()
const port = Number(process.env.npm_package_config_port) || 1111

server.listen(port, () => {
  console.log(`listening on ${port}`)
})
