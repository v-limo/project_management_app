import React from 'react'
import SplitPane, { Pane } from 'react-split-pane'

import Stage from './Stage'

const Projects = () => {
  let stages = [
    'PLANNING',
    'DESIGNING',
    'DEVELOPMENT',
    'TESTING',
    'RELEASE',
    'CANCELLED',
  ]

  return (
    <SplitPane split='vertical'>
      {stages?.map((stage) => (
        <Pane key={stage}>
          <Stage stage={stage} />
        </Pane>
      ))}
    </SplitPane>
  )
}
export default Projects
