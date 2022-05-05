import React from 'react'
import { useSelector } from 'react-redux'

import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Box, Card, Container, Link, Typography } from '@mui/material'

import PortfolioItem from '../components/PortfolioItem'
import Projects from '../components/Projects'
import { selectRepos } from '../features/repos/reposSlice'

const Portfolio = () => {
  const { repos } = useSelector(selectRepos)
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
    <Container
      sx={{
        pt: '90px',
        mx: 'auto',
        position: 'relative',
      }}
    >
      <Typography
        variant='h3'
        sx={{
          fontFamily: 'heading',
          fontWeight: 'heading',
          color: 'text.primary',
          mb: '20px',
          textAlign: 'center',
          textDecoration: 'underline',
        }}
      >
        Portfolio 📦
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          justifyContent: 'space-between',
          mb: '20px',
          flexWrap: 'nowrap',
        }}
      >
        {/* Left */}
        <Card
          sx={{
            display: {
              lg: 'block',
            },
            mx: 'auto',
            minWidth: '300px',
            pt: '20px',
            height: 'fit-content',
            minHeight: '400px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
            boarder: '1px solid #ffff',
            mr: {
              lg: '20px',
            },
            p: '20px',
            position: {
              lg: 'sticky',
            },
            top: '100px',
            color: 'white',
          }}
        >
          <Box
            component='img'
            sx={{
              objectFit: 'cover',
              height: 'auto',
              width: '100%',
              borderRadius: '10px',
            }}
            alt='passport'
            src={repos && repos[0]?.owner?.avatar_url}
          />

          <Typography
            variant='h5'
            sx={{
              fontFamily: 'heading',
              fontWeight: 'heading',
            }}
          >
            {(repos && repos[0]?.owner?.name)?.toLocaleUpperCase() ||
              'Vincent Limo'.toLocaleUpperCase()}
          </Typography>

          <Typography
            variant='h6'
            sx={{
              mb: '30px',
              fontFamily: 'bold',
            }}
          >
            {(repos && repos[0]?.owner?.bio) || 'Full Stack Developer'}
          </Typography>

          <Typography
            variant='h6'
            sx={{
              fontFamily: 'bold',
            }}
          >
            <Link
              sx={{
                fontFamily: 'bold',
                textDecoration: 'none',
                m: '20px',
                color: '#FFFFFF',
              }}
              href={repos && repos[0]?.owner?.html_url}
            >
              • GITHUB
            </Link>
          </Typography>
          <Typography
            variant='h6'
            sx={{
              fontFamily: 'bold',
              mb: '20px',
            }}
          >
            <Link
              sx={{
                fontFamily: 'bold',
                textDecoration: 'none',
                m: '20px',
                color: '#FFFFFF',
              }}
              href='https://www.linkedin.com/in/vincentlimo'
            >
              • LINKEDIN
            </Link>
          </Typography>

          <Typography
            variant='h6'
            sx={{
              fontFamily: 'bold',
              mb: '20px',
            }}
          >
            LANGUAGES
          </Typography>
          <Typography variant='body1'>• English - Fluent</Typography>
          <Typography variant='body1'>• Finnish - Novice</Typography>
          <Typography variant='body1'>• Swahili - Native</Typography>
        </Card>

        {/* rigth */}

        <Box
          sx={{
            flexGrow: 1,
            mx: 'auto',
            p: '5px',
            maxWidth: '100vw',
          }}
        >
          {/* // Project */}
          <PortfolioItem
            title={'RECENT PROJECTS 💻  (' + repos.length + ')'}
            expanded={false}
          >
            <Projects />
          </PortfolioItem>

          {/* SKILLS*/}
          <PortfolioItem title='SKILLS 💡' expanded={false}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                mb: '20px',
              }}
            >
              <Typography
                variant='h6'
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Front-end Development : {'  '}
              </Typography>
              <Typography variant='body1'>
                React, [Redux | ReduxToolkit] TypeScript, JavaScript, HTML, CSS,
                SCSS, Mui, Accessibility
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                mb: '20px',
              }}
            >
              <Typography
                variant='h6'
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Back-end Development :{' '}
              </Typography>
              <Typography variant='body1'>
                [Node.js && Express], [MongoDB && Mongoose], Jest, [PostgreSQL
                && Sequelize]
              </Typography>
            </Box>
          </PortfolioItem>

          {/*  EXPERIENCE*/}
          <PortfolioItem title='EXPERIENCE 💼 ' expanded={false}>
            <>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                  mb: '20px',
                }}
              >
                <Typography
                  variant='h6'
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  Full Stack Developer
                </Typography>
                <Typography variant='body1'>
                  Integrify | Helsinki, Finland | January 2022 - Present
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                  mb: '20px',
                }}
              >
                <Typography
                  variant='h6'
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  Maintainance Specialist
                </Typography>
                <Typography variant='body1'>
                  Tehopro Oy | Helsinki, Finland | November 2019 - December 2021
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                  mb: '20px',
                }}
              >
                <Typography
                  variant='h6'
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  Newspaper Deliverer
                </Typography>
                <Typography variant='body1'>
                  Botnia Print | Kokkola, Finland | July 2017 - May 2019
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                  mb: '20px',
                }}
              >
                <Typography
                  variant='h6'
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  Newspaper Deliverer
                </Typography>
                <Typography variant='body1'>
                  Posti Oy | Helsinki, Finland | May 2017 - September 2017
                </Typography>
              </Box>
            </>
          </PortfolioItem>

          {/*  EDUCATION*/}

          <PortfolioItem title='EDUCATION 🎓' expanded={false}>
            <>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                  mb: '20px',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  window.open(
                    'https://studyinfo.fi/koski/opinnot/73c0c5439b4542f5b767430c29770dd4',
                    '_blank'
                  )
                }}
              >
                <Typography
                  variant='h6'
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  B.Eng. in Information Technology
                </Typography>
                <Typography variant='body1'>
                  Centria University of Applied Science | Kokkola, Finland |
                  January 2016 - December 2019
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                  mb: '20px',
                }}
              >
                <Typography
                  variant='h6'
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  B.Sc. in Industrial Chemistry and Management
                </Typography>
                <Typography variant='body1'>
                  Kenyatta University | Kenya, East Africa | September 2014 -
                  Present*
                </Typography>
              </Box>
            </>
          </PortfolioItem>

          {/*  About me*/}
          <PortfolioItem title='ABOUT ME 👨‍💻 ' expanded={false}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                mb: '20px',
              }}
            >
              <Typography variant='body1' component='p' gutterBottom>
                ➊ I am a FullStack developer located in Helsinki, Finland, with
                a burning passion for solving problems.
              </Typography>
              <Typography variant='body1' component='p' gutterBottom>
                ➋ I am a fast learner, a team player, and always eager to learn
                new things.
              </Typography>
              <Typography variant='body1' component='p' gutterBottom>
                ➌ I am good with most things Javascript/TypeScript and I am
                continuously learning new skills and languages through study
                programs and working on personal projects.
              </Typography>
              <Typography variant='body1' component='p' gutterBottom>
                ➍ I have experience with React, Redux, Node.js, Express, and
                MongoDB and am ready for challenging assignments and projects
                that would advance my skills even further.
              </Typography>
              <Typography variant='body1' component='p'>
                ➎ Hobbies include board games, reading detective books, and
                watching reality series.
              </Typography>
            </Box>
          </PortfolioItem>

          {/*  Contact*/}
          <PortfolioItem title='CONTACT 📧' expanded={true}>
            <Typography
              variant='body2'
              sx={{
                textAlign: 'center',
                mt: '20px',
              }}
            >
              You can also contact me through <a href='/contact'>this form</a>{' '}
              or through any of the links below.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <a
                href='https://github.com/v-limo'
                target='_blank'
                rel='noreferrer'
              >
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
          </PortfolioItem>
        </Box>
      </Box>
    </Container>
  )
}
export default Portfolio
