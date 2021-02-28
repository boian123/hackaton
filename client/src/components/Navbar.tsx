import React from 'react';

import ElectricityStepComponent from './SmartRecommendationWizard/ElectricityStepComponent';
import BuildingTypeStepComponent from './SmartRecommendationWizard/BuildingTypeStepComponent';
/* import CityRegionStepComponent from './SmartRecommendationWizard/CityRegionStepComponent'; */


export default function Navbar():JSX.Element {
  return (
    <React.Fragment>
    <form id="udoma_form" action="/action_page.php">
      <ElectricityStepComponent/>
      <BuildingTypeStepComponent/>
    </form>
    </React.Fragment>
  )
}
