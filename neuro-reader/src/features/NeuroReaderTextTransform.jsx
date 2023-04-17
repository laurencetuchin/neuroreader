import React from 'react'

// export default function NeuroReaderTextTransform() {
//   return (
//     // function that takes word input length and identifies whether appropriate to bold or not
//     // need to update to include min one character if word length < 3 
//     function boldFirstLetters(text) {
//         const words = text.split(' ');
//         const boldedWords = words.map(word => {
//           if (word.length < 3) {
//             const smallWord = word.charAt(0);

//             // fix word length only split char 1 
//             return (
//                 <span>
//                     <span className="font-bold">{smallWord}
//                 </span>
//                     <span>{word.slice(smallWord.length)}</span>    
//                 <span>&nbsp;</span>
//             </span>
//             );
//           } else {
//             // percentage calculation of word length
//             // opportunity to increase bold dominance score function
//             const wordLength = word.length * 40 / 100;
//             const boldText = word.slice(0, wordLength);
//             const plainText = word.slice(wordLength);
//             return (
//               <span>
//                 <span className="font-bold">
//                   {boldText}
//                 </span>
//                 {plainText}
//                   <span>&nbsp;</span>
//                 <p> </p>
//               </span>
//             );
//           }
//         });
//         return boldedWords.reduce((prev, curr) => [prev, ' ', curr]);
//       }
//   )
// }
