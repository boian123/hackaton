<<<<<<< HEAD
// import React from 'react'

// export default function BuildingTypeStepComponent() {
//     return (
//         <div>
            
//         </div>
//     )
// }
=======
import React from 'react';
import {BuildingType} from "../../Models/BuildingType";
import {BuildingMaterial} from "../../utils/Enums";

interface BuildingTypeProps {

}

interface BuildingTypeState extends BuildingType {

}

export default class BuildingTypeStepComponent extends React.Component<BuildingTypeProps, BuildingTypeState> {
    constructor(props: BuildingTypeProps) {
        super(props);
        this.state = {
            buildingType: BuildingMaterial.INITIAL,
            yearOfConstruction: 0
        }
    }

    render() {
        return undefined;
    }

}
>>>>>>> 0ffb6592356015320638a0147d71fbbf9d7a969f
