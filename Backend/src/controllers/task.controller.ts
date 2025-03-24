import { Request, Response } from "express";
import { actualizar, eliminar, insertar, listar } from "../services/task.service";

const getTasks = async (_req: Request, res: Response) => {
    try {
        const response = await listar();
        res.send(response);
    } catch (e) {
        res.status(500)
        res.send(e)
    }
};

const postTask = async ({ body }: Request, res: Response) => {
    try {
        const response = await insertar(body);
        res.send(response)
    } catch (e) {
        res.status(500)
        res.send(e)
    }
};

const updateTask = async ({params, body}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await actualizar(id, body);
        res.send(response);
    } catch (e) {
        res.status(500)
        res.send(e)
    }
};

const deleteTask = async ({params}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await eliminar(id);
        res.send(response);
    } catch (e) {
        res.status(500)
        res.send(e)
    }
};

export { getTasks, updateTask, postTask, deleteTask };


