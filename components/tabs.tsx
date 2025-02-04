"use client";

import Link from "next/link";

export default function Tabs({ currentTab, onChangeTab }: any) {

  const tabs = [
    { label: 'Round trips', code: 'round' },
    { label: 'One way', code: 'one' },
    { label: 'Multiple city', code: 'multiple' }
  ];

  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        {
          tabs.map(({ label, code }: any, index) => (
            <li className="me-2" key={code+index}>
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
      </ul>
    </div>
  );
}