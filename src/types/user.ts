export interface UserProfile {
  id: string;
  name: string;
  age: number;
  email: string;
  phoneNumber: string;
  region: string;
  income: number;
  clientProfile: string;
  accessibilityNeeds: string[];
  financialGoals: string[];
  financialExperienceLevel: string;
  riskTolerance: 'low' | 'medium' | 'high';
  language: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface CreateUserRequest {
  name: string;
  age: number;
  email: string;
  phoneNumber: string;
  region: string;
  income: number;
  clientProfile: string;
  accessibilityNeeds: string[];
  financialGoals: string[];
  financialExperienceLevel: string;
  riskTolerance: 'low' | 'medium' | 'high';
  language: string;
}