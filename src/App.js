import React from 'react';
import Header,{Nav} from "./Header";
import AdList from './AdList';


    const App =() => {
     const headerText = "Marketplace UI";
     const logo = "logo.jpg";
     const links = ["Login", "Sign Up","About"];
     const advertisementsData =[
        {


            title: "Ad1",
            description:"This is the first advertisement.",
            
            image:"https://via.placehoder.com/150",
            contact: "contact1@example.com",
    
    
        },
    
         {
        title: "Ad 2",
        description: "This is the second advertisement.",
        
        image:"https://via.placeholder.com/150",
        contact: "contact2@example.com",
    
    
    },
         {
        title: "Ad 3",
        description : "This is third advertisement.",
        
        image:"https://via.placeholder.com/150",
        contact:"contact3@example.com",
    },
        {
            title: "Ad 4",
            description : "This is fourth advertisement.",
            
            image:"https://via.placeholder.com/150",
            contact:"contact4@example.com",
    
        },
        {
            title: "Ad 5",
            description: "This is fifth advertisement.",
            
            image: "https://via.placeholder.com/150",
            contact:"contact5@example.com",
        },
        {
            title:"Ad 6",
            description: "This is sixth advertisement.",
            
            image:"https://via.placeholder.com/150",
            contact:"contact6@example.com",
 }
    // Add more advertisement as needed
     ]
       return (
            <div>
                <Nav logo ={logo} links ={links} />
                <Header text = {headerText} bgColor="info"/>
                <div className="container">
                    <h2 className ="mt-4 mb-4">Advertisement List</h2>
                    <AdList list={advertisementsData} />

                </div>
            <Nav logo={logo} links = {['list','register','search']} />
             <Header/>
            
            </div>
            
        );
    }


export default App;