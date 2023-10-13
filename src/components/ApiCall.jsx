import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card} from "react-bootstrap";
import { useState, useEffect } from 'react';

const CLIENT_ID = "3ac7b07dc5414e91964227518139a2f9";
const CLIENT_SECET = "53ce9ba5a0a4448ca241f4485951e44c";


const ApiCall = () => {
const [searchInput, setSearchInput] = useState("");
const [accessToken, setaccessToken] = useState("");

useEffect(() => {
  var authAccess ={
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_seret=' + CLIENT_SECET
  }
fetch('https://accounts.spotify.com/api/token', authAccess)
.then(ressult => ressult.json())
.then(data => console.log(data))
}, [])

async function search(){
  console.log("Search for " + searchInput);
  var artistParameters = {
    method: 'GET',
  }

  var aristID = await fetch('https://api.spotify.com/v1/search')
}

  return (
    <div className='grid'>
      <Container>

      <InputGroup className='marginbttm' size='lg'>
        <FormControl
        placeholder='Search for artist'
        type='input'
        onKeypress={event =>{
          if(event.key == "Enter") {
            console.log("Pressed enter")
          }
        }}
        onChange={event => setSearchInput(event.target.value)}
        />
        <Button onClick={search}>
          Search
        </Button>
      </InputGroup>
      </Container>
      <Container>

        <Card>
          <Card.Img src='#' />
        <Card.Body>
          <Card.Title>Album Name Here</Card.Title>
        </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default ApiCall