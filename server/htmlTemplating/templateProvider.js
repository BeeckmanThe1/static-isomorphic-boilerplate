import scriptsProvider from './sriptsProvider';
import PageToJsxMapper from "../../hybrid/utils/PageToJsxMapper/PageToJsxMapper";
import pageStoreProvider from "../../hybrid/store/pageStoreProvider";

const getHeadTag = PAGE => {

	const headTag = `<head>
            <title>${PAGE?.TITLE}</title>
            <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1"/>
            <meta id="description" name="description" content="${PAGE.META_DESCRIPTION}"/>
            <script src="https://kit.fontawesome.com/4ba6f840db.js" crossorigin="anonymous"></script>
            <style>@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');</style>
            <link rel="icon" type="image/png" href="/favicon.svg"/>
            ${scriptsProvider.getStylingScripts()}
        </head>`;

	return headTag;
};

const getPageBody = (html, PAGE) => {
	return `<body id="${PAGE?.ID}"><div id="${PAGE?.WRAPPER_ID}">${html}</div></body>`
}

const AddHeaderAndBodyWrapper = (reactHtml, options, store) => {
	const headTag = getHeadTag(options);
	const bodyTag = getPageBody(reactHtml, options);

	return `<!DOCTYPE html>
        	<html lang="nl">
				${headTag}
				${bodyTag}
				${scriptsProvider.getSaveStoreAsWindowObjectScript(store)}
				${scriptsProvider.getBootstrapAppScript()}
        	</html>`;
};

export const getPageHtml = async (PAGE, store) => {
	const populatedStore = await pageStoreProvider.populateStore({store, pageInfo: PAGE});
	const pageHtml = PageToJsxMapper(PAGE, true, populatedStore);
	return AddHeaderAndBodyWrapper(pageHtml, PAGE, populatedStore);
};
