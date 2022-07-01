import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/Octicons';

import CommentsData from '../../Data/CommentsData';

const CommentsList = () => {
  return (
    <View>
      {CommentsData.map(comments => (
        <View
          backgroundColor="white"
          marginB-10
          padding-10
          row
          style={{borderRadius: 15, elevation: 5}}>
          <View marginR-10 center>
            <Image
              source={{uri: comments.Comments.avatar}}
              style={styles.CardImage}
            />
          </View>
          <View width={'78%'}>
            <View right>
              <Text style={{fontSize: 12}}>{comments.Comments.wd}</Text>
              <View row marginV-5>
                <Icon name="star-fill" size={24} color="#f6bd2e" />
                <Icon
                  name="star-fill"
                  style={{marginHorizontal: 2}}
                  size={24}
                  color="#f6bd2e"
                />
                <Icon
                  name="star-fill"
                  style={{marginHorizontal: 2}}
                  size={24}
                  color="#f6bd2e"
                />
                <Icon
                  name="star-fill"
                  style={{marginHorizontal: 2}}
                  size={24}
                  color="#f6bd2e"
                />
                <Icon name="star-fill" size={24} color="#000" />
              </View>
              <Text style={styles.commentText}>
                {comments.Comments.Comment}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  commentText: {
    fontSize: 11,
    textAlign: 'justify',
  },
  CardImage: {
    height: 60,
    width: 60,
  },
});
export default CommentsList;
