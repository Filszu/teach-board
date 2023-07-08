export interface Meeting {
    id: number | string;
    studentID: number;
    statusID: number | null;
    paymentStatusID: number | null;
    duration: string;
    dateTime: string; 
    satisfaction: number;
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


export interface Student {
    id: number;
    name: string;
    surname: string;
    nickname?: string;
    email: string;
    active: boolean;
    joinedDate?: Date | null;
    notes?: string | null;
  }
  
export interface Teacher {
    id: number;
    name: string;
    surname: string;
    nickname: string;
    profileStatus: number;
    phone_number: number | null;
    notes: string | null;
    image: string;
    email: string;
    description: string | null;
    joinedDate: string | null;
    uuAccountID: string;
}
