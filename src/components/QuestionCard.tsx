import {
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { Answer, Question } from './QuestionPage'

export const QuestionCard = (
  props: Question & {
    submit: boolean
    id: number
    map: Map<number, number>
  },
) => {
  const [answer, setAnswer] = useState(-1)
  const [sortedA, setSortedA] = useState<Answer[]>()

  const isCorrect = (i: number) => {
    if (props.answers[i]?.correct && i === answer) {
      return true
    }
  }

  useEffect(() => {
    setSortedA(props.answers.sort((a, b) => Math.random() - 0.5))
  }, [props.answers])

  useEffect(() => {
    props.map.set(props.id, answer)
  }, [answer, props.id, props.map])

  return (
    <Card sx={{ width: '50%', borderTop: '4px solid teal' }}>
      <CardHeader
        title={props.question}
        subheader={
          props.question.startsWith('*')
            ? 'Di questa domanda non è nota la risposta corretta'
            : ''
        }
      />
      <CardContent>
        <FormControl fullWidth>
          {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={(e) => setAnswer(+e.currentTarget.value)}
          >
            {sortedA?.map((a, i) => (
              <FormControlLabel
                sx={{
                  paddingRight: '16px',
                  backgroundColor:
                    (props.submit && isCorrect(i)) ||
                    (props.submit && a?.correct)
                      ? 'rgba(0,255,0,0.3)'
                      : props.submit && i === answer
                      ? 'rgba(255,0,0,0.3)'
                      : '',
                  borderRadius: '16px',
                }}
                key={i}
                value={i}
                control={
                  props.question.startsWith('*+') ? <Checkbox /> : <Radio />
                }
                disabled={props.submit}
                label={a.value}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  )
}
