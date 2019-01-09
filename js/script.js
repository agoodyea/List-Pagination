/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


// Global Variable

const list = document.getElementsByClassName('student-list')[0].children;

// ShowPage Function
/*** 
   This function takes a list and page number and takes displays a set of 10 list items
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

***/

const appendPageLinks = (list) => {
   // create dom elements
   const pageDiv = document.querySelector('.page');
   const div = document.createElement('div');
   div.className = 'pagination';
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

   // event listner for div holding page links
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
};

appendPageLinks(list);






// Remember to delete the comments that came with this file, and replace them with your own code comments.