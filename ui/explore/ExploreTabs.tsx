import React, { useCallback, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { makeStyles, tokens, shorthands, Subtitle1, TabList, Tab, Title1, SelectTabData } from '@fluentui/react-components';
import Container from '../layout/container';
import HomePagePrograms from '../programs/HomePagePrograms';
import HomePageCourses from '../courses/HomePageCourses';
import HomePageTopics from '../topics/HomePageTopics';

const useStyles = makeStyles({
  root: {
    paddingTop: tokens.spacingHorizontalMNudge,
    backgroundColor: `var(--theme-background-card-normal)`,
    boxShadow: `var(--root-depth-2)`
  },
  tabList: {
    marginLeft: `calc(${tokens.spacingHorizontalMNudge} * -1.25)`,
    textTransform: 'capitalize',
    ...shorthands.gap(tokens.spacingHorizontalL)
  },
  tab: {
    textTransform: 'capitalize',
  },
});

const EXPLORE_PARAM = 'explore';
const TABS = ['programs', 'courses', 'topics'];
const TAB_VIEW: any = {
  'programs': <HomePagePrograms />,
  'courses': <HomePageCourses />,
  'topics': <HomePageTopics />,
}

const ExploreTabs = () => {
  const styles = useStyles();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const exploreParam = searchParams.get(EXPLORE_PARAM) || TABS[0];

  const updateURL = useCallback((newParam: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(EXPLORE_PARAM, newParam);
    router.push(`${pathname}?${newSearchParams.toString()}`);
  }, [router, pathname, searchParams]);

  const onTabSelect = useCallback((_: any, data: SelectTabData) => {
    updateURL(data.value as string);
  }, [updateURL]);

  useEffect(() => {
    if (!searchParams.has(EXPLORE_PARAM)) {
      updateURL(TABS[0]);
    }
  }, [searchParams, updateURL]);

  return (<>
    <div className={styles.root}>
      <Container>
        <Subtitle1>Explore</Subtitle1>
        <TabList className={styles.tabList} selectedValue={exploreParam} onTabSelect={onTabSelect}>
          {TABS.map(tab => (
            <Tab key={tab} value={tab} content={<Title1 className={styles.tab}>{tab}</Title1>} />
          ))}
        </TabList>
      </Container>
    </div>
    {TAB_VIEW[exploreParam]}
  </>
  );
};

export default ExploreTabs;
