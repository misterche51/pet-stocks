import React from 'react';
import styles from './courseChangeWidget.module.css'

const CourseChangeWidget = (props) => {
  if (props.growth) {
    return (
      <p className = {styles.changeGrowth}>{props.value}</p>
    )
  }
  return (
    <p className = {styles.changeFall}>{props.value}</p>
  );
}

export default CourseChangeWidget;
