import { Request } from 'express';

interface DataReq extends Request {
  data: { id:number, username:string }
}

export default DataReq;