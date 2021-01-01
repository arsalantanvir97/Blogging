import React from 'react'
import './detail.css'
import { Row, Col, Card, Container, Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

const Detail = ({ match }) => {
  const dispatch = useDispatch()
  const getProposal = useSelector((state) => state.getProposal)
  const { loading, proposal, error } = getProposal
  const proposall = proposal.filter((x) => x._id === match.params.id)

  return (
    <div className='detail'>
      <Container>
        <Row>
          {proposall.map((proposals) => (
            <Col xs={12}>
              <Card className='cardd'>
                <p className='h'> {proposals.tag}</p>
                <p>
                  {'  '}
                  <span className='heading'>
                    Cover Letter:<br></br>
                  </span>
                  {proposals.coverLetter}
                </p>
                <span className='heading'> Questions Answers:</span>
                {Object.entries(proposals.questionAnswers || {}).map((xd) => (
                  <p>
                    <span className='heading'>{xd[0]}</span> {xd[1]}
                  </p>
                ))}
                {Object.entries(proposals.hourlyChargeRate).map((xd) => (
                  <p>
                    <span className='heading'>
                      Hourly ChargeRate:<br></br>
                      {xd[0]}
                    </span>
                    {'  '}
                    {xd[1]}
                  </p>
                ))}
                {Object.entries(proposals.fixedChargeAmount).map((xd) => (
                  <p>
                    <span className='heading'>
                      Fixed ChargeAmount :<br></br>
                      {xd[0]}
                    </span>
                    {'  '}
                    {xd[1]}
                  </p>
                ))}
                <p>
                  <span className='heading'>Screening Questions:</span>
                </p>
                {proposals.screeningQuestions?.questionAnswers?.map((xd) => (
                  <p>
                    <span className='heading'> {xd.question} </span> {'  '}
                    {xd.answer}
                  </p>
                ))}
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Detail
