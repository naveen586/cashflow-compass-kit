import { UserProfile, ApiResponse, CreateUserRequest } from '@/types/user';


// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const userService = {
  // Create a new user
  async createUser(userData: CreateUserRequest): Promise<ApiResponse<UserProfile>> {
    try {
      console.log('Sending user profile data to API:', userData);
      
      // Call your external API with POST request
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const apiData = await response.json();
      
      console.log('API Response:', apiData);
      
      if (response.ok) {
        const newUser: UserProfile = {
          id: Math.random().toString(36).substr(2, 9),
          ...userData,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        
        return {
          success: true,
          data: newUser,
          message: 'User created successfully and data sent to API',
        };
      } else {
        return {
          success: false,
          error: 'API call failed',
        };
      }
    } catch (error) {
      console.error('API Error:', error);
      return {
        success: false,
        error: 'Failed to create user and call API',
      };
    }
  },

};