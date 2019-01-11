/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


// Global Variable

const list = document.getElementsByClassName('student-list')[0].children;
const pageHeader = document.getElementsByClassName('page-header')[0];     // <---- consider moving

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
   // create and select dom elements for page links
   const pageDiv = document.querySelector('.page');
   const div = document.createElement('div');
   div.className = 'pagination';
   const ul = document.createElement('ul');
   const numOfPages = Math.ceil(list.length / 10);
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
   div.appendChild(ul)
   pageDiv.appendChild(div);
   const firstPage = ul.firstElementChild.firstElementChild.textContent;
   showPage(list, firstPage);

   // add click event listner on pagination div.
   // when a page link is click all link classes are set to empty and target is set to active.
   // showPage is called to display required students for chosen page.
   div.addEventListener('click', (e) => {
      linkList = e.target.parentElement.parentElement.children;
      activeLink = e.target;
      number = link.textContent;
      for (let i = 0; i < linkList.length; i += 1) {
         a = linkList[i].firstElementChild;
         a.className ='';
      }
      activeLink.className = 'active';
      showPage(list, number);
   });
};

// appendSearch function
/*** 
   
***/

const appendSearch = () => {
   // create and append search elements.
   const searchDiv = document.createElement('div');
   searchDiv.className = 'student-search';
   const searchInput = document.createElement('input');
   searchInput.placeholder = 'Search for students...';
   const searchButton = document.createElement('button');
   searchButton.textContent = 'Search';
   searchDiv.appendChild(searchInput);
   searchDiv.appendChild(searchButton)
   pageHeader.appendChild(searchDiv);

   // add keyup event listner to searchInput.
   searchInput.addEventListener('keyup', (e) => {
      const term = e.target.value;
      // loop through each student.
      for (let i = 0; i < list.length; i += 1) {
         if (term === '') {
            break;
         }
         const li = list[i];
         const studentDetailsList = list[i].firstElementChild.children;
         // loop through the details of each student.
         for (let i = 0; i < studentDetailsList.length; i += 1) {
            const text = studentDetailsList[i].textContent;
            if (text.includes(term)) {
               li.style.display = ''
            }else {
               li.style.display = 'none';
            }
         }
      }
   })
}


appendPageLinks(list);
appendSearch();






// Remember to delete the comments that came with this file, and replace them with your own code comments.