import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

async function allAvos(request: NextApiRequest, response: NextApiResponse) {
  try {
    const db = new DB()

    const queryId = request.query.id
    const avoId = await db.getById(queryId as string)

    // response.statusCode = 200
    // response.end(JSON.stringify({ data: avoId }));
    response.setHeader('Content-Type', 'application/json')

    response.status(200).json(avoId)
  } catch (error) {
    console.log(error);
  }
}

export default allAvos;
