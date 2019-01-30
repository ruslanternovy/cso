import * as React from 'react'
import DetailsListGroupedLargeExample from './DataTable'
import PivotControl from './PivotControl'

import 'office-ui-fabric-react/dist/css/fabric.css'

function MainLayout()
{
  return (
    <div>
      <div className="ms-Grid" dir="ltr">
        <div className="ms-Grid-row">
         <div className="ms-Grid-col ms-lg12">This is a placeholder for the header</div>
          <div className="ms-Grid-col ms-lg8">
            <DetailsListGroupedLargeExample />
          </div>
          <div className="ms-Grid-col ms-lg4">
            <PivotControl />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
