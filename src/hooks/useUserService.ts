import { useState } from 'react';
import { userService } from '@/services/userService';
import { UserProfile, CreateUserRequest } from '@/types/user';
import { toast } from '@/hooks/use-toast';

export const useUserService = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createUser = async (userData: CreateUserRequest): Promise<UserProfile | null> => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await userService.createUser(userData);
      
      if (response.success && response.data) {
        toast({
          title: "Success",
          description: response.message || "User created successfully",
        });
        return response.data;
      } else {
        setError(response.error || 'Failed to create user');
        toast({
          title: "Error",
          description: response.error || 'Failed to create user',
          variant: "destructive",
        });
        return null;
      }
    } catch (err) {
      const errorMessage = 'An unexpected error occurred';
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      return null;
    } finally {
      setLoading(false);
    }
  };


  return {
    loading,
    error,
    createUser,
  };
};