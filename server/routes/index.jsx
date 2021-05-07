import {renderToString} from "react-dom/server";
import FirstPage from "../../hybrid/pages/page-1/FirstPage.jsx";
import React from 'react';
import {getPageHtml} from "../htmlTemplating/templateProvider";
import {WRAPPER_ID as WRAPPER_ID_1} from '../../hybrid/pages/page-1/FirstPage.jsx';
import SecondPage, {WRAPPER_ID as WRAPPER_ID_2} from '../../hybrid/pages/page-2/SecondPage.jsx';
import WEBSITE_SETUP from "../WEBSITE_SETUP";
import PageToJsxMapper from "../../hybrid/utils/PageToJsxMapper/PageToJsxMapper";

const init = async router => {

    //set up routing of all pages
    WEBSITE_SETUP.ALL_PAGES.map(PAGE => router.get(PAGE.SLUG, (req, res) => res.send(getPageHtml(PAGE))));

};

export default {init};
