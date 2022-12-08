import './TG.css';

export default function Tagger(props){
   const Tags = [];
   const T = ['Cold','Strong wind','Not humid','Cloudy','Winter']


   const TagList = new Map([
    ["warm",      "#FF7F00"],
    ["cold",      "#EFF5F5"],
    ["hot",       "#FE8019"],
    ["freezing",  "#FE8019"],

    ["strongwind","#FE8019"],
    ["lightwind", "#FE8019"],
    ["nowind",    "#FE8019"],

    ["humid",     "#FE8019"],
    ["nothumid",  "#FE8019"],

    ["cloudy",    "#D6E4E5"],
    ["sunny",     "#FFD700"],
    ["snowing",   "#F4F4F2"],
    ["raining",   "#497174"],
    ["thunder",   "#495464"],
    ["overcast",  "#E1E5EA"],

    ["winter",    "#FAF3F3"],
    ["spring",    "#FE8019"],
    ["summer",    "#FE8019"],
    ["autumn",    "#FE8019"]

   ]);

   T.forEach((Data) => {
    Tags.push(<div className='Tag'><div className='Color' style={{background:TagList.get(Data.replace(/\s+/g, '').toLowerCase())}}></div></div>)
    console.log()
   })

   //TODO:
   //rewrite as list and not divs.

   //<div className='Help'>{Data}</div>

   return(
        <>
        <div className='Wrapper'>
        {Tags}
        
        </div>
        </>
        )

}