/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/*** 
   I need to make it so
***/

/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
// Global Variable
// - My initial thoughts is that i need to create a studentList global variable.
// - That way I can have all students saved in one DOM variable and manipulate which ones are displayed.

const list = document.getElementsByClassName('student-list')[0].children;




/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
// ShowPage Function
// - This function needs to take the student list and page number and display the 10 li's for that page.
// - when the next page number button is clicked, the next 10 items will be displayed.

const showPages = (list, page) => {
   const startPoint = 10 * (page - 1);
   const endPoint = startPoint + 10;
   for (let i = 0; i < list.length; i += 1) {
      let li = list[i];
      if (li >= startPoint && li <= endPoint) {
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
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/


const appendPageLinks = (list) => {
   numOfPages = Math.ceil(list.length / 10);
   pageDiv = document.querySelector('.page');
   div = document.createElement('div');
   div.className = 'pagination';
   ul = document.createElement('ul');
   for (let i = 0; i < numOfPages; i += 1) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.textContent = i + 1;
      li.appendChild(a);
      ul.appendChild(li)
   };
   div.appendChild(ul)
   pageDiv.appendChild(div);
};

appendPageLinks(list);





// Remember to delete the comments that came with this file, and replace them with your own code comments.