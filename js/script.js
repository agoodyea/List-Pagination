/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


// Global Variable

const list = document.getElementsByClassName('student-list')[0].children;
const pageDiv = document.getElementsByClassName('page')[0];
const studentList = document.getElementsByClassName('student-list')[0];
let executed = false;

// ShowPage Function
/*** 
   This function takes a list and page number and displays a set of 10 list items
   associated with that page number while hiding the rest.
***/

const showPage = (list, page) => {
   const startPoint = 10 * (page - 1);
   const endPoint = startPoint + 10;
   for (let i = 0; i < list.length; i += 1) {
      let li = list[i]
      if (i >= startPoint && i < endPoint) {
         li.style.display = '';
      } else {
         li.style.display = 'none';
      }
   }
};

// Append Page Links Function
/*** 
   This function creates the required amount of page links for the list it recieves
   and appends them to the page.
***/

const appendPageLinks = (list) => {
   // test for existing pag links and remove if the exist.
   if (executed) {
      pageDiv.removeChild(pageDiv.lastElementChild);
   }else {
      executed = true;
   }
   const paginationDiv = document.createElement('div');
   paginationDiv.className = 'pagination';
   const ul = document.createElement('ul');
   let numOfPages = Math.ceil(list.length / 10);
   if (numOfPages === 1) {
      ul.style.display = 'none';
   };
   // create the required page links and append to ul
   for (let i = 0; i < numOfPages; i += 1) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.textContent = i + 1;
      if (i === 0) {
         a.className = 'active';
      }
      li.appendChild(a);
      ul.appendChild(li)
   };
   // append ul to pagination div and pagination div to page div.
   // pass list and declared first page to showPage function.
   paginationDiv.appendChild(ul);
   pageDiv.appendChild(paginationDiv); 
   const firstPage = ul.firstElementChild.firstElementChild.textContent;
   showPage(list, firstPage);

   // click event listener on pagination div.
   // when a page link is click all link classes are set to empty and target is set to active.
   // showPage is called to display required students for chosen page.
   paginationDiv.addEventListener('click', (e) => {
      linkList = e.target.parentElement.parentElement.children;
      activeLink = e.target;
      number = activeLink.textContent;
      for (let i = 0; i < linkList.length; i += 1) {
         a = linkList[i].firstElementChild;
         a.className ='';
      }
      activeLink.className = 'active';
      showPage(list, number);
   });
   return paginationDiv;
};

// searchFeatures function
/*** 
   The function appends the required search elements to page
***/

const searchFeatures = () => {
   // create and append search elements.
   const pageHeader = document.getElementsByClassName('page-header')[0];
   const searchDiv = document.createElement('div');
   searchDiv.className = 'student-search';
   const searchInput = document.createElement('input');
   searchInput.placeholder = 'Search for students...';
   const searchButton = document.createElement('button');
   searchButton.textContent = 'Search';
   searchDiv.appendChild(searchInput);
   searchDiv.appendChild(searchButton)
   pageHeader.appendChild(searchDiv);

   // createSearchList Function 
   // this function receives a search term, loops through each student list item's details
   // and appends a clone of each match to the search list and replace the current list with searchList.
   const createSearchList = (term) => {
      let searchList = document.createElement('ul');
      for (let i = 0; i < list.length; i += 1) {
         const li = list[i];
         const studentDetailsList = list[i].firstElementChild.children;
         for (let i = 0; i < studentDetailsList.length - 1; i += 1) {
            const text = studentDetailsList[i].textContent;
            if (text.includes(term)) {
               let cln = li.cloneNode(true);
               searchList.appendChild(cln);
               break;
            }else {
               continue;
            }
         }
      } // display searchList or empty searchList with results error message
      if (!searchList.firstElementChild) {
         const error = document.createElement('h2');
         error.textContent = 'No search results found...';
         pageDiv.removeChild(pageDiv.children[1]);
         pageDiv.insertBefore(error, pageDiv.lastElementChild);
         appendPageLinks(searchList);
      } else {
         pageDiv.removeChild(pageDiv.children[1]);
         pageDiv.insertBefore(searchList, pageDiv.lastElementChild);
         searchList = searchList.children;
         appendPageLinks(searchList);
      }
   }
   
   // add click and keyup event listners to search elements and call createSearchList
   searchButton.addEventListener('click', (e) => {
      const term = e.target.previousElementSibling.value;
      createSearchList(term);
   })

   searchInput.addEventListener('keyup', (e) => {
      const term = e.target.value;
      createSearchList(term);
   });
};

// call starter functions
appendPageLinks(list);
searchFeatures();


// To do 
// - clean up/refactor.
// - handle type error when passing empty searchList to appendPageLinks.