import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeTabIcon = () => <Icon name="home" size={20} />;
const BookshelfTabIcon = () => <Icon name="folder-open" size={20} />;
const NotificationTabIcon = () => <Icon name="bell" size={20} />;
const ProfileTabIcon = () => <Icon name="user" size={20} />;
const SearchTabIcon = () => <Icon name="search" size={20} />;
const UndefinedIcon = () => <Icon name="question" size={20} />;

export {
  HomeTabIcon,
  ProfileTabIcon,
  SearchTabIcon,
  UndefinedIcon,
  BookshelfTabIcon,
  NotificationTabIcon,
};
