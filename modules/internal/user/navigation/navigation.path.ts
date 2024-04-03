const DASHBOARD_PATH = '/dashboard';

export const NAVIGATION = {
	PROGRAMS: { path: '/programs', label: 'Programs' },
	COURSES: { path: '/courses', label: 'Courses' },

	DASHBOARD: { path: DASHBOARD_PATH, label: 'Dashboard' },
	PROFILE: { path: `${DASHBOARD_PATH}/profile`, label: 'My Profile' },
	MY_COURSES: { path: `${DASHBOARD_PATH}/my-courses}`, label: 'My Courses' },
	MY_PROGRAMS: { path: `${DASHBOARD_PATH}/my-programs}`, label: 'My Programs' },
	JOBS: { path: '/jobs', label: 'Jobs' },
	INTERVIEW_PREP: { path: '/interview', label: 'Interview Prep' }
};
