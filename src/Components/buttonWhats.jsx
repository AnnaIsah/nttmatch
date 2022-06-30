import React from "react";
//import user from ""

function Btnwhats({phone}) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
return (
    <a target="_blank" href="https://wa.me/55{phone}" rel="noreferrer"> 
    <button type="button">
    Click Me!
</button>
    </a>
)

}
export default Btnwhats