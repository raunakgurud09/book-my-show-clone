import { SVGProps } from 'react';

const LinkedinLogo = ({ color }: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M14.8976 20.5889H2.04947C1.47925 20.5889 1.01721 21.0511 1.01721 21.6211V62.8966C1.01721 63.4668 1.47925 63.9288 2.04947 63.9288H14.8976C15.4678 63.9288 15.9298 63.4668 15.9298 62.8966V21.6211C15.9298 21.0511 15.4678 20.5889 14.8976 20.5889Z'
      fill='currentColor'
    />
    <path
      d='M8.47814 0.0703125C3.80325 0.0703125 0 3.86944 0 8.53916C0 13.211 3.80325 17.0115 8.47814 17.0115C13.1493 17.0115 16.9495 13.2108 16.9495 8.53916C16.9497 3.86944 13.1493 0.0703125 8.47814 0.0703125Z'
      fill='currentColor'
    />
    <path
      d='M47.5776 19.5635C42.4173 19.5635 38.6027 21.7818 36.289 24.3024V21.6216C36.289 21.0516 35.827 20.5893 35.2567 20.5893H22.9524C22.3822 20.5893 21.9202 21.0516 21.9202 21.6216V62.8971C21.9202 63.4673 22.3822 63.9293 22.9524 63.9293H35.7724C36.3427 63.9293 36.8047 63.4673 36.8047 62.8971V42.4753C36.8047 35.5936 38.6739 32.9126 43.471 32.9126C48.6955 32.9126 49.1107 37.2105 49.1107 42.8293V62.8973C49.1107 63.4675 49.5727 63.9295 50.1429 63.9295H62.9677C63.5379 63.9295 64 63.4675 64 62.8973V40.2569C64 30.0242 62.0488 19.5635 47.5776 19.5635Z'
      fill='currentColor'
    />
    {/* <rect width="64" height="64" /> */}
  </svg>
);

export default LinkedinLogo;