"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

interface User {
  email: string;
  firstName: string;
  lastName: string;
}

interface StoredUser extends User {
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

const isBrowser =
  typeof window !== "undefined" && typeof window.localStorage !== "undefined";

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    if (!isBrowser) {
      return null;
    }

    const storedUser = localStorage.getItem("hu777_user");
    if (storedUser) {
      try {
        return JSON.parse(storedUser);
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem("hu777_user");
        return null;
      }
    }
    return null;
  });
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      if (!isBrowser) {
        setIsLoading(false);
        return false;
      }

      // Get stored users
      const users = JSON.parse(localStorage.getItem("hu777_users") || "[]");
      const user = users.find(
        (u: StoredUser) => u.email === email && u.password === password,
      );

      if (user) {
        const userData = {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        };
        setUser(userData);
        localStorage.setItem("hu777_user", JSON.stringify(userData));
        setIsLoading(false);
        return true;
      } else {
        setIsLoading(false);
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      setIsLoading(false);
      return false;
    }
  };

  const register = async (userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }): Promise<boolean> => {
    setIsLoading(true);
    try {
      if (!isBrowser) {
        setIsLoading(false);
        return false;
      }

      // Get existing users
      const users = JSON.parse(localStorage.getItem("hu777_users") || "[]");

      // Check if user already exists
      const existingUser = users.find(
        (u: StoredUser) => u.email === userData.email,
      );
      if (existingUser) {
        setIsLoading(false);
        return false; // User already exists
      }

      // Add new user
      users.push(userData);
      localStorage.setItem("hu777_users", JSON.stringify(users));

      // Auto login after registration
      const newUser = {
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
      };
      setUser(newUser);
      localStorage.setItem("hu777_user", JSON.stringify(newUser));

      setIsLoading(false);
      return true;
    } catch (error) {
      console.error("Registration error:", error);
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    if (isBrowser) {
      localStorage.removeItem("hu777_user");
    }
  };

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
