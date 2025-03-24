import { prisma } from "../config/prisma";
import { Prisma } from "@prisma/client";


const listar = async () => {
    const response = await prisma.task.findMany();
    return response;
}

const insertar = async (tarea: Prisma.TaskCreateInput) => {
    const response = await prisma.task.create({
        data: tarea,
    });
    return response;
}

const actualizar = async (id: string, data: Prisma.TaskUpdateInput) => {
    const response = await prisma.task.update({
        where: { id },
        data,
    });
    return response;
}

const eliminar = async (id: string) => {
    const response = await prisma.task.delete({
        where: {id},
    });
    return response;
}

export { listar, insertar, actualizar, eliminar };