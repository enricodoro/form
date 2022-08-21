import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Button, IconButton, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { QuestionCard } from './QuestionCard'

export type Answer = {
  value: string
  correct?: boolean
}

export type Question = {
  question: string
  answers: Answer[]
}

export default function QuestionPage(props: {
  questions: Question[]
  title: string
}) {
  const [submit, setSubmit] = useState(false)
  const [sortedQ, setSortedQ] = useState<Question[]>([])
  const [correct, setCorrect] = useState(0)
  const map = new Map<number, number>()
  const navigate = useNavigate()

  const handleSubmit = () => {
    setSubmit(true)
    sortedQ.forEach((q, i) => {
      if (q.answers[map.get(i) as number]?.correct) {
        setCorrect((old) => old + 1)
      }
    })
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    setSortedQ(props.questions.sort((a, b) => Math.random() - 0.5))
  }, [props.questions])
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
        <Typography fontWeight="bold" variant="h4">
          {props.title}
        </Typography>
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
      <IconButton
        size="large"
        color="success"
        sx={{ position: 'fixed', left: '32px', top: '32px' }}
        onClick={() => navigate('/')}
      >
        <ArrowBackIcon />
      </IconButton>
    </>
  )
}
