import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Box, Card, Link, TextareaAutosize, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'

const notify = (info: string) =>
  toast.success(info, {
    duration: 3500,
  })

export const ContactComponent = () => {
  const [email, setemail] = useState('')
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [description, setdescription] = useState('')
  const [sendSuccess, setSendSucces] = useState(false)

  const handleSubmit = () => {
    const message = {
      email,
      title,
      description,
      name,
    }

    axios
      .post('https://www.actionforms.io/e/r/portolio-contact', message)
      .then((res) => {
        setSendSucces(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    if (sendSuccess) {
      setemail('')
      setTitle('')
      setdescription('')
      setName('')
      notify(
        `Message sent Successfully!, We will get back to you soon as possible`
      )
      setSendSucces(false)
    }
  }, [sendSuccess])

  const validEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const contactIcon = {
    margin: '0.5rem',
    color: 'secodary.main',
    borderRadius: '50%',
    height: '3rem',
    width: '3rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // height: 'fit-content',
        m: 'auto',
        p: '1.2rem',
        opacity: '0.92',
        width: '90%',
        maxWidth: '700px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
          opacity: '1',
        },
        '&:focus': {
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
          opacity: '1',
        },
      }}
    >
      <Toaster />
      <Typography
        variant='h4'
        sx={{
          fontFamily: 'heading',
          fontWeight: 'heading',
          color: 'text.primary',
          mb: '20px',
        }}
      >
        Contact
      </Typography>

      <Typography variant='h5' gutterBottom>
        You have a project ?
      </Typography>
      <Typography variant='h6' gutterBottom>
        I am always open to discussing new projects and opportunities.
      </Typography>
      <Typography variant='body2' gutterBottom>
        Contact me and I will get back to you as soon as possible.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <a href='https://github.com/v-limo' target='_blank' rel='noreferrer'>
          <GitHubIcon sx={contactIcon} />
        </a>
        <a
          href='https://www.linkedin.com/in/vincentlimo/'
          target='_blank'
          rel='noreferrer'
        >
          <LinkedInIcon sx={contactIcon} />
        </a>
        <a href='mailto:vinceleemo@gmail.com'>
          <EmailIcon sx={contactIcon} />
        </a>
      </Box>
      <Typography variant='body2' sx={{}}>
        You can also contact me through the form below
      </Typography>

      <FormControl
        sx={{
          width: '80%',
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FormLabel
          sx={{
            alignSelf: 'flex-start',
            mt: '2px',
          }}
        >
          Name
        </FormLabel>
        <TextField
          fullWidth
          id='text'
          type='name'
          sx={{
            border: '1px solid',
            borderColor: 'primary.main',
            mb: '10px',
          }}
          value={name}
          onChange={(e: {
            target: { value: React.SetStateAction<string> }
          }) => {
            setName(e.target.value)
          }}
        />
        <FormLabel
          sx={{
            alignSelf: 'flex-start',
            mt: '2px',
          }}
        >
          Email{' '}
        </FormLabel>
        <TextField
          fullWidth
          id='text'
          type='email'
          sx={{
            border: '1px solid',
            borderColor: 'primary.main',
            mb: '10px',
          }}
          value={email}
          onChange={(e: {
            target: { value: React.SetStateAction<string> }
          }) => {
            setemail(e.target.value)
          }}
        />
        <FormLabel
          sx={{
            alignSelf: 'flex-start',
            mt: '2px',
          }}
        >
          Subject
        </FormLabel>
        <TextField
          fullWidth
          id='text'
          type='text'
          sx={{
            border: '1px solid',
            borderColor: 'primary.main',
            mb: '10px',
          }}
          value={title}
          onChange={(e: {
            target: { value: React.SetStateAction<string> }
          }) => {
            setTitle(e.target.value)
          }}
        />

        <FormLabel
          sx={{
            alignSelf: 'flex-start',
            mt: '2px',
          }}
        >
          Message *
        </FormLabel>

        <TextareaAutosize
          style={{
            width: '100%',
            height: '100px',
            fontSize: '12px',
            border: '1px solid',
          }}
          id='text'
          minRows={6}
          value={description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setdescription(e.target.value)
          }
          placeholder='Message  here...'
        />
        <Typography variant='body1' gutterBottom>
          By submitting this form, you agree to the{' '}
          <Link href='/policy'>Terms of Service and Privacy</Link>
        </Typography>

        <Button
          sx={{ mt: 2 }}
          variant='contained'
          color='primary'
          size='large'
          onClick={handleSubmit}
          disabled={!email || !title || !description || !validEmail(email)}
        >
          Send message
        </Button>
      </FormControl>
    </Card>
  )
}
