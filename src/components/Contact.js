import React from 'react';


const Contact = (props) => {
    /* autómatikus redirect
    setTimeout(() => {
        props.history.push('/about');
    }, 2000);
    */
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>
            Lorem Ipsum egy egyszerû szövegrészlete, szövegutánzata a betûszedõ és nyomdaiparnak. A Lorem Ipsum az 1500-as évek óta standard szövegrészletként szolgált az iparban; mikor egy ismeretlen nyomdász összeállította a betûkészletét és egy példa-könyvet vagy szöveget nyomott papírra, ezt használta. Nem csak 5 évszázadot élt túl, de az elektronikus betûkészleteknél is változatlanul megmaradt. Az 1960-as években népszerûsítették a Lorem Ipsum részleteket magukbafoglaló Letraset lapokkal, és legutóbb softwarekkel mint például az Aldus Pagemak
            </p>
        </div>
    )
}
export default Contact;