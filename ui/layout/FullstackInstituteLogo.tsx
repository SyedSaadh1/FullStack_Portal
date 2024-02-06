'use client'
import React from 'react'
import {
  makeStyles, tokens
} from '@fluentui/react-components';
import Link from 'next/link';

const useStyles = makeStyles({
  container: {
    paddingTop: tokens.spacingHorizontalXXL,
    paddingBottom: tokens.spacingHorizontalXXL,
  },
  title: {
    color: tokens.colorBrandForegroundLink,
    cursor: 'pointer',
    fontSize: tokens.fontSizeHero700,

    ':hover': {
      color: tokens.colorBrandForegroundLinkHover,
    }
  }
})

function FullstackInstituteLogo() {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Link className={styles.title} href='/'>Fullstack.Institute</Link>
    </div>
  )
}

export default FullstackInstituteLogo