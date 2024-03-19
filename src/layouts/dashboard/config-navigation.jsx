import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'owr ',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Effecte cheque',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'Print cheque',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
