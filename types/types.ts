export interface Meeting {
    id: number;
    studentID: number;
    statusID: number | null;
    paymentStatusID: number;
    duration: string;
    dateTime: string; 
    satisfaction: number | null;
    notes: string;
    student_name?: string;
    student_surname?: string;
    lesson_status?: string;
    payment_status?: string;
};

export interface MeetingTxtKeys extends Meeting{
    student_name?: string;
    student_surname?: string;
    lesson_status?: string;
    payment_status?: string;
}

export type MeetingCardType = "etitable" | "static";

export type MeetingStatus = "scheduled" | "cancelled" | "completed" |null;


  