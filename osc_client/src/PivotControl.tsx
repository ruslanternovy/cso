import { Label } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';
import * as React from 'react';

class PivotControl extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div>
        <Pivot linkSize={PivotLinkSize.normal}>
          <PivotItem linkText="Optimization">
            <Label>Table with optimization results</Label>
          </PivotItem>
          <PivotItem linkText="History">
            <Label>Table with applied optimizations</Label>
          </PivotItem>
          <PivotItem linkText="Issues">
            <Label>Table with schedule issues</Label>
          </PivotItem>
          <PivotItem linkText="Settings">
            <Label>Applicaiton settings</Label>
          </PivotItem>
        </Pivot>
      </div>
    );
  }
}

export default PivotControl
