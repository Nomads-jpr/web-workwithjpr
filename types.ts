export interface FormData {
  businessType: string;
  needs: string[];
  customNeed?: string;
  budget: string;
  timeline: string;
  name: string;
  businessName: string;
  email: string;
  phone: string;
  bookingPreference: 'calendar' | 'callback';
}

export interface QualificationScore {
  total: number;
  breakdown: {
    budgetScore: number;
    needsScore: number;
    timelineScore: number;
  };
}

export type Step = 1 | 2 | 3;
