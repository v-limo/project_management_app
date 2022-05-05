import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Box, Chip } from '@mui/material'

import { filterByLanguage } from '../features/repos/reposSlice'
import { repoType } from '../types/reposType'
import PortfolioItem from './PortfolioItem'
import Repo from './Repo'

type reposProps = {
  repos: repoType[]
}

export const Repos = ({ repos }: reposProps) => {
  const dispatch = useDispatch()
  const topics = ['All']

  const handleFilter = (lang: string) => {
    dispatch(filterByLanguage(lang))
  }

  useEffect(() => {
    dispatch(filterByLanguage('All'))
  }, [dispatch])

  repos.forEach((repo) => {
    repo.topics.forEach((topic) => {
      if (!topics.includes(topic)) {
        topics.push(topic)
      }
    })
  })

  return (
    <Box
      sx={{
        width: '100%',
        margin: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10px',
        '& > *': {
          margin: '10px',
        },
      }}
    >
      <Box
        sx={{
          width: {
            xs: '100%',
            lg: '50%',
          },
          margin: 'auto',
        }}
      >
        <PortfolioItem title={'Filter'} expanded={false}>
          {topics?.length > 0 &&
            topics.map((topic, index) => (
              <Chip
                clickable
                onClick={() => handleFilter(topic)}
                key={index}
                label={topic}
                size='medium'
                sx={{
                  margin: '0.5rem',
                  fontSize: '1rem',
                  fontFamily: 'body',
                  borderRadius: '10px',
                  fontWeight: 'bold',
                }}
                color='primary'
              />
            ))}
        </PortfolioItem>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          width: '100%',
          margin: '20px auto',
        }}
      >
        {repos &&
          repos?.length > 0 &&
          repos.map((repo) => (
            <Repo
              repo={repo}
              filterByLanguage={filterByLanguage}
              key={repo.clone_url}
            />
          ))}
      </Box>
    </Box>
  )
}
