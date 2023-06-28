import React, { useState } from 'react';
import { Accordion, Card, Form, Button, ProgressBar } from 'react-bootstrap';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Questionnaire = () => {
  const [questions, setQuestions] = useState({
    question1: { answer: '', convictionExplanation: '' },
    question2: { answer: '', employmentDescription: '' },
    question3: { answer: '' },
    question4: { answer: '' },
    question5: { answers: [] },
  });

  const [progress, setProgress] = useState(0);

  const handleAnswerChange = (question, value) => {
    setQuestions((prevState) => ({
      ...prevState,
      [question]: value,
    }));
  };

  const handleConvictionExplanationChange = (event) => {
    const { value } = event.target;
    setQuestions((prevState) => ({
      ...prevState,
      question1: {
        ...prevState.question1,
        convictionExplanation: value,
      },
    }));
  };

  const handleEmploymentDescriptionChange = (event) => {
    const { value } = event.target;
    setQuestions((prevState) => ({
      ...prevState,
      question2: {
        ...prevState.question2,
        employmentDescription: value,
      },
    }));
  };

  const handleAnswerSelection = (question, answer) => {
    setQuestions((prevState) => ({
      ...prevState,
      [question]: {
        ...prevState[question],
        answer,
      },
    }));
  };

  const handleCheckboxSelection = (question, answer) => {
    const selectedAnswers = questions[question].answers;
    if (selectedAnswers.includes(answer)) {
      setQuestions((prevState) => ({
        ...prevState,
        [question]: {
          ...prevState[question],
          answers: selectedAnswers.filter((a) => a !== answer),
        },
      }));
    } else {
      setQuestions((prevState) => ({
        ...prevState,
        [question]: {
          ...prevState[question],
          answers: [...selectedAnswers, answer],
        },
      }));
    }
  };

  const handleSubmit = () => {
    const totalQuestions = Object.keys(questions).length;
    const answeredQuestions = Object.values(questions).filter(
      (q) => q.answer !== '' || (q.answers && q.answers.length > 0)
    ).length;

    const progressPercentage = (answeredQuestions / totalQuestions) * 100;
    setProgress(progressPercentage);

    const canvas = document.getElementById('questionnaire');
    html2canvas(canvas).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 10, 10, 190, 280);
      pdf.save('questionnaire_results.pdf');
    });
  };

  return (
    <div>
      <h1>Questionnaire</h1>
      <ProgressBar now={progress} label={`${progress}%`} variant={progress < 30 ? 'danger' : progress < 50 ? 'warning' : 'success'} />

      <div id="questionnaire">
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="question1">
              QUESTION 1: Have you ever been convicted of any criminal offence?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="question1">
              <Card.Body>
                <Form.Group>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    name="question1"
                    onChange={() => handleAnswerSelection('question1', 'yes')}
                  />
                  <Form.Check
                    type="radio"
                    label="No"
                    name="question1"
                    onChange={() => handleAnswerSelection('question1', 'no')}
                  />
                </Form.Group>
                {questions.question1.answer === 'yes' && (
                  <Form.Group>
                    <Form.Label>Please explain:</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={questions.question1.convictionExplanation}
                      onChange={handleConvictionExplanationChange}
                    />
                  </Form.Group>
                )}
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="question2">
              QUESTION 2: Are you currently employed?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="question2">
              <Card.Body>
                <Form.Group>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    name="question2"
                    onChange={() => handleAnswerSelection('question2', 'yes')}
                  />
                  <Form.Check
                    type="radio"
                    label="No"
                    name="question2"
                    onChange={() => handleAnswerSelection('question2', 'no')}
                  />
                </Form.Group>
                {questions.question2.answer === 'yes' && (
                  <Form.Group>
                    <Form.Label>Please describe where:</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={questions.question2.employmentDescription}
                      onChange={handleEmploymentDescriptionChange}
                    />
                  </Form.Group>
                )}
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="question3">
              QUESTION 3: Are you currently enrolled in any kind of educational institution?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="question3">
              <Card.Body>
                <Form.Group>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    name="question3"
                    onChange={() => handleAnswerSelection('question3', 'yes')}
                  />
                  <Form.Check
                    type="radio"
                    label="No"
                    name="question3"
                    onChange={() => handleAnswerSelection('question3', 'no')}
                  />
                </Form.Group>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="question4">
              QUESTION 4: What is your preferred work area?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="question4">
              <Card.Body>
                <Form.Group>
                  <Form.Control
                    as="select"
                    value={questions.question4.answer}
                    onChange={(e) => handleAnswerChange('question4', e.target.value)}
                  >
                    <option value="">Select an option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Form.Control>
                </Form.Group>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="question5">
              QUESTION 5: Tick all the checkboxes that best describe you:
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="question5">
              <Card.Body>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    label="Outgoing"
                    onChange={() => handleCheckboxSelection('question5', 'outgoing')}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Introverted"
                    onChange={() => handleCheckboxSelection('question5', 'introverted')}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Talkative"
                    onChange={() => handleCheckboxSelection('question5', 'talkative')}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Night Person"
                    onChange={() => handleCheckboxSelection('question5', 'night_person')}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Morning Person"
                    onChange={() => handleCheckboxSelection('question5', 'morning_person')}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Pacifist"
                    onChange={() => handleCheckboxSelection('question5', 'pacifist')}
                  />
                </Form.Group>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>

      <Button variant="primary" onClick={handleSubmit}>
        Generate PDF
      </Button>
    </div>
  );
};

export default Questionnaire;
