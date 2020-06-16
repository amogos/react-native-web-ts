import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeTabIcon = () => <Icon name="home" size={20} />;
const HomeTabIconFocused = HomeTabIcon;

const BookshelfTabIcon = () => <Icon name="folder-open" size={20} />;
const BookshelfTabIconFocused = BookshelfTabIcon;

const NotificationTabIcon = () => <Icon name="bell" size={20} />;
const NotificationTabIconFocused = NotificationTabIcon;

const ProfileTabIcon = () => <Icon name="user" size={20} />;
const ProfileTabIconFocused = ProfileTabIcon;

const SearchTabIcon = () => <Icon name="search" size={20} />;
const SearchTabIconFocused = SearchTabIcon;

const UndefinedIcon = () => <Icon name="question" size={20} />;

const BookmarksTabIcon = () => <Icon name="bookmark" size={20} />;
const BookmarksTabIconFocused = BookmarksTabIcon;

export {
  HomeTabIcon,
  HomeTabIconFocused,
  ProfileTabIcon,
  ProfileTabIconFocused,
  SearchTabIcon,
  SearchTabIconFocused,
  UndefinedIcon,
  BookshelfTabIcon,
  BookshelfTabIconFocused,
  NotificationTabIcon,
  NotificationTabIconFocused,
  BookmarksTabIcon,
  BookmarksTabIconFocused,
};
