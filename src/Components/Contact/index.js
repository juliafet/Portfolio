import React from 'react'
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormH2,
} from './ContactElements'

const Contact = ({ toggle }) => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Julia</Icon>

          <FormContent onClick={toggle}>
            <Form action="#">
              <FormH1>
                Looking for a junior developer to join your team and want to
                know me better - feel free to reach out
              </FormH1>
              {/* <FormH2>Sorry, the page is under construction</FormH2> */}
              {/* <FormH2>Feel free to contact me direcktly</FormH2> */}
              <FormH2>My phone: 04 11177586</FormH2>
              <FormH2>My e-mail: j.s.fetisova@gmail.com</FormH2>
              <FormH2>
                LinkedIn: https://www.linkedin.com/in/julia-fetisova/
              </FormH2>
              <FormH2>GitHub: https://github.com/juliafet</FormH2>
            </Form>
          </FormContent>

          {/* <FormContent onClick={toggle}>
            <Form action="#">
              <FormH1>
                Looking for a junior developer to join your team and want to
                know me better - feel free to reach out
              </FormH1>
              <FormH2>Sorry, the page is under construction</FormH2>
              <FormH2>Feel free to contact me direcktly</FormH2>
              <FormH2>My phone: 04 11177586</FormH2>
              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput type="text" required />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              {/* <FormLabel htmlFor='for'>Phone Number</FormLabel>
                            <FormInput type='tel' required />
                            <FormLabel htmlFor='for'>Subject</FormLabel>
                            <FormInput type='text' /> 
              <FormLabel htmlFor="for">Message</FormLabel>
              <FormInput type="text" required />
              <FormButton type="submit">Send</FormButton>
              <Text>or via email j.s.fetisova@gmail.com</Text>
            </Form>
          </FormContent> */}
        </FormWrap>
      </Container>
    </>
  )
}

export default Contact
