-- Motor de base de datos elegido: MySQL

DROP DATABASE IF EXISTS to_do_list;
CREATE DATABASE IF NOT EXISTS to_do_list;

USE to_do_list;

CREATE TABLE todo(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  todo_description VARCHAR(255) NOT NULL,
  todo_status VARCHAR(20) NOT NULL,
  expire_date DATE
);

-- Insertar nueva tarea
INSERT INTO
  todo (todo_description, todo_status, expire_date) VALUE ('Aprender Kotlin', 'pending', '2021-09-08');


-- Actualizar Tarea
UPDATE todo SET todo_description = 'Aprender React', todo_status = 'complete'
WHERE id = 1;

-- Listar tareas
SELECT id, todo_description, todo_status, expire_date FROM todo;

-- Eliminar tarea
DELETE FROM todo WHERE id = 1;
