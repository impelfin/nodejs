import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
    return ( 
        <div> 
            <div style={{ display: "felx", paddingTop : 20 }}>
                <div style={{ flex: "100px 0 0" }}>
                    <img 
                        src="/images/imp_small.jpg" 
                        width="100" height="90" 
                        alt="logo" 
                        sytle={{ display: "block" }}
                    />
                </div>
            </div>
            <Gnb />
        </div>
    )
}