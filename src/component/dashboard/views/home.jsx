import React,{useState} from "react";
import Tweet from "./tweet";

function search(){
  return true;
}
export default function Home(){

const tweetData=[{id:1,content:"tweeet ty bty fity jnjhbhj"},
{id:2,content:"tweeet ty bty fity"},
{id:3,content:"tweeet ty bty fity 2"},
{id:4,content:"tweeet ty bty fity 3"},
{id:5,content:"tweeet ty bty fity 4"},
{id:6,content:"tweeet ty bty fity 5"},
{id:7,content:"tweeet ty bty fity 6"},
{id:8,content:"tweeet ty bty fity 7"},
{id:9,content:"tweeet ty bty fity 8"},
{id:10,content:"tweeet ty bty fity 9"},
{id:11,content:"tweeet ty bty fity 10" }];


const tweetArray=tweetData.map(t=>{
  return <Tweet key={t.id} tweet={t}  function showAlertReplay={()=>replay} />
}
);

const [replayAlert, showReplayAlert] = useState(false);

function replay() {
    showReplayAlert(!replayAlert);
    console.log(replayAlert);
}



    return (
            <section className="dash-view-home" id="home" >
                <div className="search-section">
                    <form className="search-section-form" action="#" onSubmit={search}>
                   <input type="text"  placeholder="Keywords" required/>
                    <select name="search-type" id="searchtype" selected="popular">
                      <option value="popular">popular</option>
                      <option value="recent">rercent</option>
                    </select>
                    <input type="submit" className="search-section-button" value="search twitter"/>
                    </form>
                </div>

                <section className="serch-result-section">
                {tweetArray}
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