import { IncomingMessage, ServerResponse } from 'http';
import DB from '@database'

async function allAvos(request: IncomingMessage, response: ServerResponse) {
  try {
    const db = new DB()
    const allEntries = await db.getAll()
    const length = allEntries.length

    response.statusCode = 200
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({ length, data: allEntries }));
  } catch (error) {
    console.log(error);
  }
}

export default allAvos;
