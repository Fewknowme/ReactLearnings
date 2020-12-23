import React , {useState,useEffect} from 'react';
import axios from 'axios';

const Search = () => {
//dangerouslyinnerhtml is not secure & shouldn't be used,but since there are no accounts on this minor application we can use it ;)
    const [term, setTerm] = useState('');
    //debounced will cancel timer if change is made soon and will remove duplicate requsts :)
    const [debouncedTerm,setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
       const timerId = setTimeout(()=>{
           setDebouncedTerm(term);
       },700);
       
       return() => {
        clearTimeout(timerId);
       };       
      }, [term]);

      useEffect(() => {
        const search = async () => {
          const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
              action: 'query',
              list: 'search',
              origin: '*',
              format: 'json',
              srsearch: debouncedTerm,
            },
          });
     
          setResults(data.query.search);
        };
        if (debouncedTerm) {
          search();
        }
      }, [debouncedTerm]);
    //Below code will create duplicate api reqs. It's a bug related useEffect hook being rerenderd
    // useEffect(() =>{
    //     const search = async () => {
    //         const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
    //             params:{
    //                 action: 'query',
    //                 list: 'search',
    //                 origin: '*',
    //                 format: 'json',
    //                 srsearch: term
    //             }
    //         });
    //         //here set the data results limited to actual listing[check console here for more info with different para.]
    //         setResults(data.query.search);
    //     };
    // if(term && !results.length){//search initial render
    //         search();
    //     }else{
    //          //check if a search term is provided to api,, and add some timer for api requests
    //             const timeoutId = setTimeout(() =>{
    //             if(term){
    //             search();
    //     }
    // },700);
    // //this will reset timer before entire term is typed within 700ms if a char is typed
    // return() => {
    //     clearTimeout(timeoutId);
    // };
    // }
    // },[term,results.length]);

    const renderedResults = results.map((result)=>{
        return( 
        <div className="item" key={result.pageid}>
            <div className="right floated content">
                <a 
                className="ui button"
                href={`https://en.wikipedia.org?curid=${result.pageid}`}
                >GoTo
                </a>
            </div>
            <div className="content">
                <div className="header">
                    {result.title}
                </div>
                <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
            </div>
        </div>
        );
    });

    return(
        <div>
            <div className = "ui form">
                <div className = "field">
                    <label>Search it up on Wiki!</label>
                    <input value={term} 
                    className="input" 
                    onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className = "ui celled list">
                {renderedResults}
            </div>
        </div>
    )
};

export default Search;