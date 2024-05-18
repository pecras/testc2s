/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import ImageLoading from './components/imageFirst';
import SelectGender from './components/selectGender';
import ListUsers from './components/listUsers';
import InputName from './components/input';
import {fetchFilterUsers} from './api/apifilterName';
import {GetList} from './MMKVStorage/storage';

function App(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [number, setNumber] = useState(20);
  const [results, setResults] = useState<any[]>();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataCache = GetList();
        if (dataCache) {
          setResults(dataCache);
        }
        const filteredUsers = await fetchFilterUsers(name, gender);
        setResults(filteredUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, [gender, name, number]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.sectionContainer}>
          {isLoading && <ImageLoading />}
          <View style={styles.filters}>
            <InputName setName={setName} />
            <SelectGender setGender={setGender} />
          </View>
          <ListUsers listUser={results} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  filters: {
    flex: 1,
    flexDirection: 'row',
  },
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    paddingHorizontal: 24,
  },
});

export default App;
