import {Hooks} from "./Hooks";
import {fireEvent, render, screen} from "@testing-library/react";
import {People} from "./data/Data";

describe(Hooks,()=>{
    it('should display the name',  () =>{
        const {getByTestId} = render(<Hooks/>);
        People.map(({name,id})=>{
            const nameDisplayed = getByTestId(id).textContent;
            expect(nameDisplayed).toEqual(name);
        })
    });
    it('should remove a person',()=>{
        const {getByRole,getByTestId} = render(<Hooks/>);
        const removeBut = getByTestId("remove-1");
        const peopleLength = People.length;
        fireEvent.click(removeBut);
        const numberPeople = getByTestId("number-people").textContent;
        expect(numberPeople).toEqual(peopleLength-1);
    })
})

