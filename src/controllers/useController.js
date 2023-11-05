import TaskModel from '../models/taskSchema.js';

export const getTask = async (_, res) => {
  try {
    //aca le decimos que me traiga todas las tareas que este en la base de datos
    const data = await TaskModel.find({});
    const filterData = data
      .filter((task) => task._doc.isActive === true)
      .map((task) => ({
        ...task._doc,
      }));

    res.json({ data: filterData, message: 'No se encontro ninguna tarea' });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: 'Ocurrio un error interno, comunicate con tu proveedor!!',
    });
  }
};

// metodo para cargar una tarea

export const postTask = async (req, res) => {
  const { body } = req;

  const newTask = new TaskModel({
    titleTask: body.titletask,
    subtitletask: body.subtitletask,
    descriptiontask: body.descriptiontask,
    isActive: true,
  });
  try {
    await newTask.save();

    res.status(201).json({
      data: null,
      message: 'Tarea agregada exitosamente!',
    });
  } catch (e) {
    res.status(500).json({
      data: null,
      message: 'Ocurrio un error guardando la tarea',
    });
  }
};
