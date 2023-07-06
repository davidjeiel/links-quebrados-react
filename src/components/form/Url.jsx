import React, { useState } from "react";
//import BrokenLinks from "../../services/BrokenLinks";
import LinkChecker from "../../services/LinkChecker";

export default function Url()
{
    const [url,  setUrl  ] = useState('');
    const [site, setSite ] = useState([]);

     const handleInput = (url) =>{
        //     const dados =  BrokenLinks(url);
        setSite(url);
        console.debug(site);
    }

    return(
        <div>
            <form>
                <div className="text-center">
                    <h4 className="text-center">
                        Insira a URL
                    </h4>
                </div>
                <div className="input-group">
                    <input 
                        className="form-control" 
                        onChange={ e=>setUrl(e.target.value) }                         
                        placeholder="Digite aqui" 
                        name="url" 
                        id="url" 
                    />
                    <button 
                        className="btn btn-success" 
                        type="button" 
                        onClick={ ()=>handleInput(url) }
                    >
                        Enviar
                    </button>    
                </div>
            </form>
            <div className="container-fluid">
                    <LinkChecker url={site} />
                    {/* <BrokenLinks url="https://caixa.gov.br" /> */}
            </div>
        </div>
    )
}