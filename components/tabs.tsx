"use client";

import Link from "next/link";

export default function Tabs(props: any) {

  const { currentTab, onChangeTab } = props;
  const tabs = [
    { label: 'Round trips', code: 'round' },
    { label: 'One way', code: 'one' },
    { label: 'Multiple city', code: 'multiple' }
  ];

  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        {
          tabs.map(({ label, code }: any) => (
            <li className="me-2">
              <Link
                href="#"
                aria-current="page"
                className={ `inline-block p-4 border-b-2 ${(currentTab === code) ? 'border-blue-600 text-sky-500' : ''}` }
                onClick={() => onChangeTab(code)}
              >
                { label }
              </Link>
            </li>
          ))
        }
        
        {/* <li className="me-2">
          <Link
            href="#"
            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:text-blue-500 dark:border-blue-500"
            onClick={() => onChangeTab('one')}
          >
            One way
          </Link>
        </li>
        <li className="me-2">
          <Link
            href="#"
            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            onClick={() => onChangeTab('multiple')}
          >
            Multiple city
          </Link>
        </li> */}
      </ul>
    </div>
  );
}
