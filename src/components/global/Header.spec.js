//Surya

import React from "react";

import {mount} from "enzyme";
import Header from "./Header";

describe("Header component Suite", ()=> {
    

    it("header default test", ()=> {
        let wrapper = mount(<Header  />);
        expect(wrapper.find("ul").length).toBe(1);
        expect(wrapper.find("li").length).toBe(6);
    })


    it("header addMember test", ()=> {
        let wrapper = mount(<Header  />);
        let component = wrapper.instance();
        component.addMember();
        wrapper.update();

        expect(wrapper.find("ul").length).toBe(1);
        expect(wrapper.find("li").length).toBe(6);
    })


    it("header empty Members test", ()=> {
        let wrapper = mount(<Header  />);
        let component = wrapper.instance();
        component.empty();
        wrapper.update();
        
        expect(wrapper.find("ul").length).toBe(1);
        expect(wrapper.find("li").length).toBe(6);
    })
 
 

    
    
 

    

})