/* It creates input fields from ENUM lists - ElectricityProviders, HeatingTypes and etc */


export function makeInputElementsFromList(Providers: any, nameElement: string) {
  let inputElements = '';
  for (const providerName in Providers) {
    inputElements += `<input type="radio" name="{{nameElement}}" value="{{providerName}}" className="form-control" /> <br /> `;
  }
  return inputElements;
}
