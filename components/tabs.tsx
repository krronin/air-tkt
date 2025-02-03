'use client'

export default function Tabs() {

  return (
    <>
      <div className="border-b border-gray-200">
        <nav className="flex gap-x-1" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
          <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none active" id="tabs-with-underline-item-1" aria-selected="true" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
            Tab 1
          </button>
          <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none" id="tabs-with-underline-item-2" aria-selected="false" data-hs-tab="#tabs-with-underline-2" aria-controls="tabs-with-underline-2" role="tab">
            Tab 2
          </button>
          <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none" id="tabs-with-underline-item-3" aria-selected="false" data-hs-tab="#tabs-with-underline-3" aria-controls="tabs-with-underline-3" role="tab">
            Tab 3
          </button>
        </nav>
      </div>

      <div className="mt-3">
        <div id="tabs-with-underline-1" role="tabpanel" aria-labelledby="tabs-with-underline-item-1">
          <p className="text-gray-500">
            This is the <em className="font-semibold text-gray-800">first</em> item's tab body.
          </p>
        </div>
        <div id="tabs-with-underline-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-2">
          <p className="text-gray-500">
            This is the <em className="font-semibold text-gray-800">second</em> item's tab body.
          </p>
        </div>
        <div id="tabs-with-underline-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-3">
          <p className="text-gray-500">
            This is the <em className="font-semibold text-gray-800">third</em> item's tab body.
          </p>
        </div>
      </div>
    </>
  )
}
