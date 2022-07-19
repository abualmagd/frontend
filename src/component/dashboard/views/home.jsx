import React from "react";


export default function Home(){

    return (
            <section className="dash-view-home">
                <div className="search-query">
                    <form className="search-query-form">
                   <input type="text"  placeholder="search"/>
                    <input type="text" placeholder="popular/recent " /> 
                    <input type="submit"  value="search"/>
                    </form>
          
                </div>

           </section>
           
           );
}
/**
 * 
 * 
 * 
 * 
 * query model to search>>>
 *    
 * private GeoLocation location; //latitude //longitude

   private String since;

  
   private Double radius; 

   private String query;

   private String until;


   private String language;


   private int count;

   private int minFaves;



   private int minReplies;



   private int minRetweets;
 */