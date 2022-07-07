/* eslint-disable @typescript-eslint/no-unused-vars */
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import React from 'react';
import { useModel } from 'umi';
import ThemeSwitcher from '../ThemeSwitcher';
import Avatar from './AvatarDropdown';
import styles from './index.less';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');

  let className = styles.right;
  /*   if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === "dark" && layout === "top") || layout === "mix") {
    className = `${styles.right}  ${styles.dark}`;
  } */

  return (
    <Space className={className}>
      <ThemeSwitcher />
      <span
        className={styles.action}
        onClick={() => {
          window.open('/~docs');
        }}
      >
        <QuestionCircleOutlined />
      </span>
      <Avatar />
      {/* <SelectLang className={styles.action} /> */}
    </Space>
  );
};
export default GlobalHeaderRight;
