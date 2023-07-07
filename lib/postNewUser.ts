// INSERT INTO `teachers` (`id`, `name`, `surname`, `nickname`, `profileStatus`, `phone_number`, `notes`, `profileImg`, `email`, `description`) VALUES (NULL, '', '', '', '', NULL, NULL, '', '', NULL);

import { Teacher } from "@/types/types";
import { db_pool } from "@/utils/dbConnection";

interface Props {
    // teacher: Teacher;
    teacher: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
    };
}

export async function postNewTeacher(props: Props) {
    console.log('********postNewTeacher:', props.teacher);
    console.log(props.teacher);

    
    const query = `
        INSERT INTO teachers
        (id, name, surname, nickname, profileStatus, phone_number, notes, image, email, description, joinedDate)
        VALUES
        (NULL, ?,?,?,?,?,?,?,?,?,NULL);
    `;

    const values = [
        props.teacher.name,
        "",
        "",
        0,
        "",
        'HELLO',
        props.teacher.image,
        props.teacher.email,
        "",

    ];


    const connection = await db_pool.promise().getConnection();
    const qResult = await connection.execute(query, values);



    connection.release();

    return { success: true,};
}
