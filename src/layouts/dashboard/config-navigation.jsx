import SvgColor from 'src/components/svg-color';
import { SlPrinter } from "react-icons/sl";
import { RiPrinterFill } from "react-icons/ri";
import { FaArrowAltCircleUp } from "react-icons/fa";
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
    icon: <FaArrowAltCircleUp fontSize={21}/>,
  },
  {
    title: 'Print cheque',
    path: '/cheque',
    icon: <RiPrinterFill fontSize={20} />,
  },
  {
    title: 'Effecte',
    path: '/effecte',
    icon: <RiPrinterFill fontSize={20} />,
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
