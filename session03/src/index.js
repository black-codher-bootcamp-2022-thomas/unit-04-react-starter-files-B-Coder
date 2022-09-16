import React from 'react';
import ReactDOM from 'react-dom/client';

const name = 'Steph';

function Profile(){
   if(name){
    return <main id="content" role="main" class="base">
            <h1>{name}'s React Page</h1>
              <p>This is my first JSX function, well done me!</p>
            </main>
   }
   else {
     return <main id="content" role="main" class="base">
       <h1>Just a React Page</h1>
       <p>Nothing to see here!</p>
     </main>  
   }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Profile());

