import { Button, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import './App.css'
import { QuestionCard } from './components/QuestionCard'
import { questions } from './components/questions'

export type Answer = {
  value: string
  correct?: boolean
}

export type Question = {
  question: string
  answers: Answer[]
}

const list: Question[] = questions

function App() {
  const [submit, setSubmit] = useState(false)
  const [sortedQ, setSortedQ] = useState<Question[]>([])
  const [correct, setCorrect] = useState(0)
  const map = new Map<number, number>()

  const handleSubmit = () => {
    setSubmit(true)
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    setSortedQ(list.sort((a, b) => Math.random() - 0.5))
  }, [])

  useEffect(() => {
    if (submit) {
      sortedQ.forEach((q, i) => {
        if (q.answers[map.get(i) as number]?.correct) {
          setCorrect((old) => old + 1)
        }
      })
    }
  }, [submit])

  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={2}
        width="100%"
        marginY="8px"
      >
        <Typography fontWeight="bold">23 Giugno</Typography>
        {sortedQ.map((q, i) => (
          <QuestionCard
            key={i}
            id={i}
            question={q.question}
            answers={q.answers}
            submit={submit}
            map={map}
          />
        ))}
        <Button
          size="large"
          variant="contained"
          color="success"
          sx={{ marginY: '8px' }}
          onClick={handleSubmit}
          disabled={submit}
        >
          Submit
        </Button>
      </Stack>
      {submit && (
        <Typography sx={{ position: 'fixed', right: '32px', bottom: '32px' }}>
          {correct}/{sortedQ.length}
        </Typography>
      )}
    </>
  )
}

export default App
