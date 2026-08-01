export type EighteenCategory = 'roses' | 'candles' | 'butterflies' | 'bills';

export interface EighteenItem {
  id: string;
  number: number;
  name: string;
  relation: string;
  note?: string;
  category: EighteenCategory;
}

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  iconName: string;
}

export interface RsvpSubmission {
  fullName: string;
  phone: string;
  email?: string;
  guestCount: number;
  message?: string;
  timestamp: string;
}

export interface GuestWish {
  id: string;
  name: string;
  relationship: string;
  message: string;
  date: string;
}
