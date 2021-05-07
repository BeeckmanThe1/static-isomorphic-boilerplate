import React from 'react';
import Pages from '../../pages/index';
import WEBSITE_SETUP from "../../../server/WEBSITE_SETUP";
import {renderToString} from "react-dom/server";

const {PAGES} = WEBSITE_SETUP;

export default (PAGE, returnAsHtml) => {
    let jsx;
    switch (PAGE.ID) {
        case PAGES.PAGE_1.ID:
            jsx = <Pages.FirstPage/>;
            break;
        case PAGES.PAGE_2.ID:
            jsx = <Pages.SecondPage/>;
            break;
        case PAGES.LANDING_PAGE.ID:
            jsx = <Pages.LandingPage/>;
            break;
        default:
            return null;
            break;
    }
    return returnAsHtml ? renderToString(jsx) : jsx
}
