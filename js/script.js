/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


// Global Variable

const list = document.getElementsByClassName('student-list')[0].children;
const numOfPages = Math.ceil(list.length / 10);
const div = document.createElement('div');
div.className = 'pagination';


// ShowPage Function
/*** 
   This function takes a list and page
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

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
// Append Page Links Function
/*** 

***/


const appendPageLinks = (list) => {
   // create dom elements
   const pageDiv = document.querySelector('.page');
   const ul = document.createElement('ul');
   const numOfPages = Math.ceil(list.length / 10);
   // create li + a elements and append to ul
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
   // append ul to div and div to pageDiv
   div.appendChild(ul)
   pageDiv.appendChild(div);
   firstPage = ul.firstElementChild.firstElementChild.textContent;
   showPage(list, firstPage);
};

appendPageLinks(list);

div.addEventListener('click', (e) => {
   linkList = e.target.parentElement.parentElement.children;
   link = e.target;
   number = link.textContent;
   for (let i = 0; i < linkList.length; i += 1) {
      a = linkList[i].firstElementChild;
      a.className ='';
   }
   link.className = 'active';
   showPage(list, number);
});





// Remember to delete the comments that came with this file, and replace them with your own code comments.