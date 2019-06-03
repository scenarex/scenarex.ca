export function getLang() {
  let language;
  let languageArr;
  if (typeof window !== `undefined`) {
   if (navigator && navigator.languages !== undefined) {
     languageArr = navigator.languages[0].split("-");
   }
   else if (navigator) {
     if (navigator.language === "fr" || navigator.language === "en") {
       return navigator.language;
     }
     else {
       return "en"
     }
   }
   if (languageArr) {
     if (languageArr[0] === "fr" || languageArr[0] === "en"){
     language = languageArr[0];
     }
     else {
       language= "en"
     }

     return language;
   }
 }
 return "en"

}
