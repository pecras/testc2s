/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Text} from 'react-native';
import ImageLoading from '../components/imageFirst';
import SelectGender from '../components/selectGender';
import ListUsers from '../components/listUsers';
import InputName from '../components/input';
import {fetchFilterUsers} from '../api/apifilterName';
import {fetchAllUsers} from '../api/apiRamdomUser';
import {GetListAll, SaveList} from '../MMKVStorage/storage';
import {useAppContext} from '../context/AppContext';

function App(): React.JSX.Element {
  const {
    isLoading,
    setIsLoading,
    name,
    setName,
    gender,
    setGender,
    results,
    setResults,
    allUsers,
    setAllUsers,
  } = useAppContext();
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    const initialize = async () => {
      const dataCache = await GetListAll();
      if (dataCache) {
        setAllUsers(dataCache.value);
        setResults(dataCache.value.slice(0, 20));
      } else {
        const res = await fetchAllUsers(20);
        setResults(res);
        const GetallUsers = await fetchAllUsers(1000);
        setAllUsers(GetallUsers);
        SaveList(GetallUsers);
      }
      setIsLoading(false);
    };

    initialize();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const filteredUsers = await fetchFilterUsers(name, gender);
        setResults(filteredUsers.slice(0, 20));
        setAllUsers(filteredUsers);
        setPage(1);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, [gender, name]);

  const handleScroll = (event: any) => {
    const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
    if (isCloseToBottom) {
      const nextPage = page + 1;
      const newResults = allUsers.slice(0, nextPage * 20);
      setResults(newResults);
      setPage(nextPage);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {isLoading ? (
        <ImageLoading />
      ) : (
        <View style={styles.sectionContainer}>
          <Text style={styles.text}>Innova Tech</Text>
          <View style={styles.filters}>
            <InputName setName={setName} />
            <SelectGender setGender={setGender} />
          </View>
          <ScrollView
            style={styles.scrollViewContent}
            onScroll={handleScroll}
            scrollEventThrottle={16}>
            <ListUsers listUser={results} />
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    marginTop: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: 'heavy',
    marginBottom: 10,
    color: 'goldenrod',
  },
  filters: {
    flexDirection: 'row',
    marginLeft: 10,
    width: '90%',
  },
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 24,
  },
});

export default App;
