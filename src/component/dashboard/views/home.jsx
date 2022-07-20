import React from "react";


export default function Home(){

    return (
            <section className="dash-view-home">
                <div className="search-section">
                    <form className="search-section-form">
                   <input type="text"  placeholder="Keywords" required/>
                    <select name="search-type" id="searchtype" selected="popular">
                      <option value="popular">popular</option>
                      <option value="recent">rercent</option>
                    </select>
                    <input type="submit" className="search-section-button" value="search twitter"/>
                    </form>
                </div>

                <section className="serch-result-section">
                  here your search here 
                </section>

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