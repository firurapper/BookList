import React, { useState } from 'react';
import { FlatList, View, SafeAreaView } from 'react-native';
import { bookData } from './constants';
import BookItem from '@components/BookItem';
import styles from './styles';

function HomeList({ navigation }){
    const keyExtractor = ({id}) => `Libro: ${id}`;

    const itemSeparator = () => <View style={styles.separator}/>;

    const handleNavigateToDetail = () => navigation.navigate('ItemDetail', {});

    const renderItem = ({item}) => {
        const {title, author, description, image} = item;
        return(
            <BookItem
                title={title}
                author={author}
                description={description}
                image={image}
            />
        );
    };

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                bounces={false}
                data={bookData}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={itemSeparator}
                contentContainerStyle={styles.contentContainer}
            />
        </SafeAreaView>
    );
}

export default HomeList;