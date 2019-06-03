import CMS from "netlify-cms";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BookchainPagePreview from "./preview-templates/BookchainPagePreview";
import ContactPagePreview from "./preview-templates/ContactPagePreview";
import FooterPreview from "./preview-templates/FooterPreview";
import HeaderPreview from "./preview-templates/HeaderPreview";
import HomePagePreview from "./preview-templates/HomePagePreview";
import NewsPostPreview from "./preview-templates/NewsPostPreview";
import PressPreview from "./preview-templates/PressPreview";
import PeoplePagePreview from "./preview-templates/PeoplePagePreview";

CMS.registerPreviewStyle("cms.css");
CMS.registerPreviewStyle("../sass/main.scss");

CMS.registerPreviewTemplate("about-en", AboutPagePreview)
CMS.registerPreviewTemplate("about-fr", AboutPagePreview)

CMS.registerPreviewTemplate("bookchain-en", BookchainPagePreview)
CMS.registerPreviewTemplate("bookchain-fr", BookchainPagePreview)

CMS.registerPreviewTemplate("contact-en", ContactPagePreview)
CMS.registerPreviewTemplate("contact-fr", ContactPagePreview)

CMS.registerPreviewTemplate("footer-en", FooterPreview)
CMS.registerPreviewTemplate("footer-fr", FooterPreview)

CMS.registerPreviewTemplate("header-en", HeaderPreview)
CMS.registerPreviewTemplate("header-fr", HeaderPreview)

CMS.registerPreviewTemplate("index-en", HomePagePreview)
CMS.registerPreviewTemplate("index-fr", HomePagePreview)

CMS.registerPreviewTemplate("post-en", NewsPostPreview)
CMS.registerPreviewTemplate("post-fr", NewsPostPreview)

CMS.registerPreviewTemplate("press-en", PressPreview)
CMS.registerPreviewTemplate("press-fr", PressPreview)

CMS.registerPreviewTemplate("people-en", PeoplePagePreview)
CMS.registerPreviewTemplate("people-fr", PeoplePagePreview)
