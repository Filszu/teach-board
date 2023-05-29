export type Meeting = {
    id: number;
    studentID: number;
    statusID: number | null;
    paymentStatusID: number;
    duration: string;
    dateTime: string; 
    satisfaction: number | null;
    notes: string;
};

export type MeetingStatus = "scheduled" | "cancelled" | "completed" |null;


  