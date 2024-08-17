import { useState } from 'react';
export default function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  return (
    <div>
      <p>Currently active question</p>
    </div>
  );
}
