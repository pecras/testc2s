import React, {createContext, useState, useContext, ReactNode} from 'react';

export type User = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number | string;
  };
  email: string;
  login: {
    uuid: string;
  };
  dob: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
};

interface AppContextProps {
  name: string;
  setName: (value: string) => void;
  gender: string;
  setGender: (value: string) => void;
  results: User[];
  setResults: (value: User[]) => void;
  allUsers: User[];
  setAllUsers: (value: User[]) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({children}: {children: ReactNode}) => {
  const [name, setName] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [results, setResults] = useState<User[]>([]);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <AppContext.Provider
      value={{
        name,
        setName,
        gender,
        setGender,
        results,
        setResults,
        allUsers,
        setAllUsers,
        isLoading,
        setIsLoading,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
