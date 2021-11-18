import React from 'react'
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  Text,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactElements'

const Contact = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Julia</Icon>
          <FormContent>
            <Form actiom="#">
              <FormH1>
                Looking for a junior developer to join your team and want to
                know me better - feel free to reach out
              </FormH1>

              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput type="text" required />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              {/* <FormLabel htmlFor='for'>Phone Number</FormLabel>
                            <FormInput type='tel' required />
                            <FormLabel htmlFor='for'>Subject</FormLabel>
                            <FormInput type='text' /> */}
              <FormLabel htmlFor="for">Message</FormLabel>
              <FormInput type="text" required />
              <FormButton type="submit">Send</FormButton>
              <Text>or via email j.s.fetisova@gmail.com</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Contact
