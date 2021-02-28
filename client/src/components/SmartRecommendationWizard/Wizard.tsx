import * as React from 'react';
import OwnershipTypeStepComponent from './OwnershipTypeStepComponent';
import CityRegionStepComponent from './CityRegionStepComponent';
import BuildingTypeStepComponent from './BuildingTypeStepComponent';
import ElectricityStepComponent from './ElectricityStepComponent'
import WaterBillComponent from "./WaterBillComponent";

enum StepKey {
    OwnershipType = 'Do you rent or do you own?',
    CityRegionStep = 'Tell us where you live.',
    UtilityBillsStep = 'Please enter your utility bills expenses',
    BuildingTypeStep = 'Tell us more about  your building',
    RecommendationStep = 'Here is what we think?'
}

interface WizardState {

}

interface WizardProps {

}

export default class Wizard extends React.Component<WizardState, WizardProps> {
    constructor(props :WizardState) {
        super(props);
    }

    render() {
        return (
          <React.Fragment>
            <form id="udoma_form" action="/method_call"> 
                <OwnershipTypeStepComponent/>
                <CityRegionStepComponent/>
                <ElectricityStepComponent/>
                <WaterBillComponent/>
                <BuildingTypeStepComponent/>
                <button type="submit">Let's analyze</button>
            </form>
          </React.Fragment>
        )
    }
}
