import React, { useState } from 'react';
import { View, ScrollView, Text, Button, TextInput } from 'react-native';
import ScreenTemplate from '../screenTemplate';
import styles from './SearchStyle';
//dummy APIs
const apiUrl = {
  books: 'https://dummy-api.com/books',
  articles: 'https://dummy-api.com/articles',
  courseReserves: 'https://dummy-api.com/courseReserves',
};

//perform the search based on the selected category and the query here
const handleSearch = () => {
  if (!(selectedCategory in apiUrl)) {
    console.error('Invalid category selected');
    return;
  }

  fetch(apiUrl[selectedCategory] + `?q=${query}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(`Search results for ${selectedCategory}:`, data); //?redirect to which page?
    })
    .catch((error) => {
      console.error(`Error searching for ${selectedCategory}:`, error);
    });
};

export default function SearchScreen() {
  const [query, setQuery] = useState('enter your search query');
  const [selectedCategory, setSelectedCategory] = useState('books'); // Default category is 'books'

  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Search</Text>
          </View>
          <View style={styles.searchContainer}>
            <View
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              <Button
                title="Books"
                onPress={() => setSelectedCategory('books')}
                color={
                  selectedCategory === 'books'
                    ? 'rgb(92, 92, 92)'
                    : 'rgb(190, 190, 190)'
                }
              />
              <Button
                title="Articles + Databases"
                onPress={() => setSelectedCategory('articles')}
                color={
                  selectedCategory === 'articles'
                    ? 'rgb(92, 92, 92)'
                    : 'rgb(190, 190, 190)'
                }
              />
              <Button
                title="Course Reserves"
                onPress={() => setSelectedCategory('courseReserves')}
                color={
                  selectedCategory === 'courseReserves'
                    ? 'rgb(92, 92, 92)'
                    : 'rgb(190, 190, 190)'
                }
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter your search query"
                value={query}
                onChangeText={(text) => setQuery(text)}
              />
              <Text
                style={styles.advancedSearch}
                onPress={() => Linking.openURL('http://google.com')}
              >
                Advanced Search
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScreenTemplate>
  );
}
