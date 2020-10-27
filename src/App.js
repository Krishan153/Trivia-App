import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What was Tandem previous name?',
			answerOptions: [
				{ answerText: 'Tandem', isCorrect: false },
				{ answerText: 'Burger Shack', isCorrect: false },
				{ answerText: 'Extraordinary Humans', isCorrect: false },
				{ answerText: 'Devmynd', isCorrect: true },
			],
		},
		{
			questionText: "In Shakespeare's play Julius Caesar, Caesar's last words were...",
			answerOptions: [
				{ answerText: 'Iacta alea est!', isCorrect: false },
				{ answerText: 'Et tu, Brute?', isCorrect: true },
				{ answerText: 'Vidi, vini, vici', isCorrect: false },
				{ answerText: 'Aegri somnia vana', isCorrect: false },
			],
		},
		{
			questionText: 'A group of tigers are referred to as:',
			answerOptions: [
				{ answerText: 'Ambush', isCorrect: true },
				{ answerText: 'Chowder', isCorrect: false },
				{ answerText: 'Pride', isCorrect: false },
				{ answerText: 'Destruction', isCorrect: false },
			],
		},
		{
			questionText: 'What is the top speed an average cat can travel?',
			answerOptions: [
				{ answerText: '42mph', isCorrect: false },
				{ answerText: '13mph', isCorrect: false },
				{ answerText: '9mph', isCorrect: false },
				{ answerText: '31mph', isCorrect: true },
			],
		},
		{
			questionText: 'A cat can jump to _____ times its own height:',
			answerOptions: [
				{ answerText: '3', isCorrect: false },
				{ answerText: '9', isCorrect: false },
				{ answerText: '7', isCorrect: false },
				{ answerText: '5', isCorrect: true },
			],
		},
		{
			questionText: "What is the only letter that doesn't appear in a US state name?",
			answerOptions: [
				{ answerText: 'M', isCorrect: false },
				{ answerText: 'Z', isCorrect: false },
				{ answerText: 'Q', isCorrect: true },
				{ answerText: 'X', isCorrect: false },
			],
		},
		{
			questionText: "What is the name for a cow-bison hybrid?",
			answerOptions: [
				{ answerText: 'Cowson', isCorrect: false },
				{ answerText: 'Beefalo', isCorrect: true },
				{ answerText: 'Bicow', isCorrect: false },
				{ answerText: 'Mooson', isCorrect: false },
			],
		},
		{
			questionText: "What is the largest freshwater lake in the world?",
			answerOptions: [
				{ answerText: 'Lake Superior', isCorrect: true },
				{ answerText: 'Lake Baikal', isCorrect: false },
				{ answerText: 'Lake Michigan', isCorrect: false },
				{ answerText: 'Lake Victoria', isCorrect: false },
			],
		},
		{
			questionText: "In a website address bar, what does WWW stand for?",
			answerOptions: [
				{ answerText: 'Wild Wild West', isCorrect: false },
				{ answerText: 'War World Web', isCorrect: false },
				{ answerText: 'World Wide Web', isCorrect: true },
			],
		},
		{
			questionText: "In a game of bingo, what number is represented by the name two little ducks?",
			answerOptions: [
				{ answerText: '20', isCorrect: false },
				{ answerText: '22', isCorrect: true },
				{ answerText: '55', isCorrect: false },
				{ answerText: '70', isCorrect: false },
			],
		},
		{
			questionText: "According to Greek mythology, who was the first woman on Earth?",
			answerOptions: [
				{ answerText: 'Lilith', isCorrect: false },
				{ answerText: 'Eve', isCorrect: false },
				{ answerText: 'Pandora', isCorrect: true },
				{ answerText: 'Hera', isCorrect: false },
			],
		},
		{
			questionText: "In which European city would you find Orly airport?",
			answerOptions: [
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Belgium', isCorrect: false },
				{ answerText: 'Munich', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
			],
		},
		{
			questionText: "Where would you find the Sea of Tranquility?",
			answerOptions: [
				{ answerText: 'The Moon', isCorrect: true },
				{ answerText: 'California', isCorrect: false },
				{ answerText: 'Siberia', isCorrect: false },
				{ answerText: 'China', isCorrect: false },
			],
		},
		{
			questionText: "Which artist painted 'Girl with a Pearl Earrin'?",
			answerOptions: [
				{ answerText: 'Van Gogh', isCorrect: false },
				{ answerText: 'Picasso', isCorrect: false },
				{ answerText: 'Vermeer', isCorrect: true },
				{ answerText: 'Da Vinci', isCorrect: false },
			],
		},
		{
			questionText: "What is the official name for the 'hashtag' symbol?",
			answerOptions: [
				{ answerText: 'Number Sign', isCorrect: false },
				{ answerText: 'Hash Sign', isCorrect: false },
				{ answerText: 'Octothorpe', isCorrect: true },
				{ answerText: 'Pound', isCorrect: false },
			],
		},
		{
			questionText: "Not American at all, where is apple pie from?",
			answerOptions: [
				{ answerText: 'Japan', isCorrect: false },
				{ answerText: 'England', isCorrect: true },
				{ answerText: 'Etheopia', isCorrect: false },
				{ answerText: 'Canada', isCorrect: false },
			],
		},
		{
			questionText: "What is the national animal of Scotland?",
			answerOptions: [
				{ answerText: 'Bear', isCorrect: false },
				{ answerText: 'Rabbit', isCorrect: false },
				{ answerText: 'Seal', isCorrect: false },
				{ answerText: 'Unicorn', isCorrect: true },
			],
		},
		{
			questionText: "Where in the world is the only place where Canada is *due south*",
			answerOptions: [
				{ answerText: 'Detroit', isCorrect: true },
				{ answerText: 'Alaska', isCorrect: false },
				{ answerText: 'Russia', isCorrect: false },
				{ answerText: 'Washington', isCorrect: false },
			],
		},
		{
			questionText: "Approximately how many grapes go into a bottle of wine?",
			answerOptions: [
				{ answerText: '200', isCorrect: false },
				{ answerText: '500', isCorrect: false },
				{ answerText: '700', isCorrect: true },
				{ answerText: '1000', isCorrect: false },
			],
		},
		{
			questionText: "How much does a US One Dollar Bill cost to make?",
			answerOptions: [
				{ answerText: '$0.05', isCorrect: true },
				{ answerText: '$0.25', isCorrect: false },
				{ answerText: '$1.00', isCorrect: false },
				{ answerText: '$5.00', isCorrect: false },
			],
		},
		{
			questionText: "The Vatican bank has the only ATM in the world that allows users to do what?",
			answerOptions: [
				{ answerText: 'Receive withdrawls in rosary beads', isCorrect: false },
				{ answerText: 'Vote for the Pope', isCorrect: false },
				{ answerText: 'Purchase indulgences', isCorrect: false },
				{ answerText: 'Perform transactions in Latin', isCorrect: true },
			],
		},
	];

	//To select 10 random numbers, and put them into an array
	const randomArray = (length, max) => [...new Array(length)].map(() => Math.round(Math.random() * max));
	const randomQuestions = randomArray(10,21)

	//To dynamically change the question being returned
	const [displayQuestion, setDisplayQuestion] = useState(0);

	//To show the score, and to dynamically change the showScore in the return function
	const [showScore, rollingQuestions] = useState(false);

	const [score, setScore] = useState(0);

	//To go to the next question
	const afterAnswer = (isCorrect) => {
		if(isCorrect === true){
			setScore(score + 1);
		}

		//Pick only 10 questions
		const nextQuestion = displayQuestion + 1;
		if(nextQuestion < 10){
			setDisplayQuestion(nextQuestion);
		} else {
			//Help bring us to the results page
			rollingQuestions(true);
		}
	}

	return (
		<div className='app'>
			{showScore ? (
				//If showScore is true, display the result screen
				<div className='score-section'>You scored {score} out of {10}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
			<span>Question {displayQuestion + 1}</span>/{10}
						</div>
						<div className='question-text'>{questions[displayQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[displayQuestion].answerOptions.map((answerOptions) => (
							//By passing the booleon from the answerOptions, we can now keep track of if the answer is correct after the user clicks their choice
							<button onClick={() => afterAnswer(answerOptions.isCorrect)}>{answerOptions.answerText}</button>))} 
					</div>
				</>
			)}
		</div>
	);
}
