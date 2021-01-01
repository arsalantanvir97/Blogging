import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Container, Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './home.css'
import Loader from '../components/Loader'
import Message from '../components/Message'

import { proposalDetail } from '../actions/proposalAction'

const Home = () => {
  const [copyproposal, setCopyproposal] = useState([])
  const dispatch = useDispatch()
  const getProposal = useSelector((state) => state.getProposal)
  const { loading, proposal, error } = getProposal

  useEffect(() => {
    dispatch(proposalDetail())
  }, [])

  useEffect(() => {
    if (!loading) {
      console.log('heelo nabeel', proposal)
      setCopyproposal(proposal)
    }
  }, [loading])

  const setFilter = (id) => {
    const proposaal = proposal.filter((x) => x.tag === id)
    setCopyproposal(proposaal)
  }
  const showAll = () => {
    setCopyproposal(proposal)
  }
  // const printQuestions = (obj) => {
  //   let html = '<dl>'
  //   for (let item in obj) {
  //     html += `<dt>${item}</dt> <dd>${obj[item]}</dd>`
  //   }
  //   html += '</dl>'
  //   return html
  // }
  return (
    <>
      <nav className='nav'>
        <p>Tezeract AI</p>
      </nav>
      {loading && <Loader />}
      {error && <Message>{error}</Message>}
      <div className='home'>
        <Container>
          <Row>
            {' '}
            {!loading && (
              <Col xs={12}>
                <div className='baddge'>
                  <span className='badgee' onClick={showAll}>
                    ALL{'  '}
                  </span>
                  <span
                    className='badgee'
                    onClick={() => setFilter(proposal[0].tag)}
                  >
                    UI/UX{'  '}
                  </span>{' '}
                  <span
                    className='badgee'
                    onClick={() => setFilter(proposal[1].tag)}
                  >
                    Machine Learning{'  '}
                  </span>
                  <span
                    className='badgee'
                    onClick={() => setFilter(proposal[4].tag)}
                  >
                    Mobile App Development{'  '}
                  </span>
                  <span
                    className='badgee'
                    onClick={() => setFilter(proposal[5].tag)}
                  >
                    Full Stack Development
                  </span>
                </div>
              </Col>
            )}
            {copyproposal.map((proposall) => (
              <Col xs={6}>
                {' '}
                <Card className='card1'>
                  <div>
                    <Badge
                      style={{ marginBottom: 10, padding: '4px ' }}
                      variant='primary'
                    >
                      {' '}
                      {proposall.tag}
                    </Badge>{' '}
                  </div>
                  <p>{proposall.coverLetter.substring(0, 130)}</p>
                  {/* <p>{proposal.questionAnswers}</p> */}
                  {/* {printQuestions(proposal.questionAnswers)} */}
                  <Link to={`/detail/${proposall._id}`}>
                    <div className='btn'>Read More</div>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Home
