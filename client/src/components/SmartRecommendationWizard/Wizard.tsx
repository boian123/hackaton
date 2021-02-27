import * as React from 'react';

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

class Wizard extends React.Component<WizardState, WizardProps> {
    constructor(props :WizardState) {
        super(props);
    }

    render() {
        return undefined;
    }
}






