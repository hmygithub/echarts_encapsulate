import React,{ Component } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import ShowPie from '../components/ShowPie.js'

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to 图表!</h1>
      <ShowPie />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect(({ example }) => ({
  example
}))(IndexPage);
