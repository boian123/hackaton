
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
        this.handleInputYear = this.handleInputYear.bind(this);
        this.handleMaterialSelection = this.handleMaterialSelection.bind(this);
        this.state = {
            buildingType: BuildingMaterial.INITIAL,
            yearOfConstruction: 0
        }
    }

    render() {
        return (
          <React.Fragment>
          <div className="form-group">
            <label>Building making year</label>
            <br />
            <input type="number" min="1940" max="2021" className="form-control" placeholder="Making year" />
            <br />
            <label>Type of building</label>
            <br />
            makeInputElementsFromList(BuildingMaterial, "type_of_building");
          </div>
        </React.Fragment>
      );
    }

    handleInputYear(event: any) {
        this.setState({yearOfConstruction: event.target.value})
    }
    handleMaterialSelection(event: any) {
        this.setState({yearOfConstruction: event.target.value})
    }

}
