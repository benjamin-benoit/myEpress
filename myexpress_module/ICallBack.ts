import { ClientRequest, ServerResponse } from "http";

export default interface ICallBack{
    (
        req?: ClientRequest,
        res?: ServerResponse,
        next?: ICallBack
    ) : void
}
