SELECT l.id, s.name AS student_name, s.surname AS student_surname,
       ls.status AS lesson_status, ps.status AS payment_status,
       l.duration, l.dateTime, l.satisfaction, l.notes
FROM lessons AS l
JOIN students AS s ON l.studentID = s.id
JOIN lessons_statuses AS ls ON l.statusID = ls.id
JOIN payment_statuses AS ps ON l.paymentStatusID = ps.id;


---------------
SELECT l.*, s.name AS student_name, s.surname AS student_surname,
       ls.status AS lesson_status, ps.status AS payment_status
FROM lessons AS l
JOIN students AS s ON l.studentID = s.id
JOIN lessons_statuses AS ls ON l.statusID = ls.id
JOIN payment_statuses AS ps ON l.paymentStatusID = ps.id;
