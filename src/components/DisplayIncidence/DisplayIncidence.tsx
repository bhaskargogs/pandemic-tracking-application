import React, { CSSProperties, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Select, { StylesConfig, ValueType } from 'react-select'
import { addDays, toggleDays } from '../../redux/daySlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { Day } from '../../redux/types/dayTypes'
import './DisplayIncidence.scss'

const customControlStyles: CSSProperties = {
  color: 'white',
  borderColor: 'pink',
  width: 250,
}

type IsMulti = false

const selectStyle: StylesConfig<Day, IsMulti> = {
  control: (provided, state) => {
    return {
      ...provided,
      ...customControlStyles,
    }
  },
}

const DisplayIncidence: React.FC = () => {
  const daysListCopy = useAppSelector((state) => state.days.dayOptions)
  const daysList = useAppSelector((state) => state.days.days)
  const dispatch = useAppDispatch()
  const [selectedDays, setSelectedDays] = useState<ValueType<Day, false>>(daysList[0])
  const daysHandler = async (option: ValueType<Day, false>) => {
    setSelectedDays(option)
    if (option !== null) {
      dispatch(toggleDays(option as Day))
    }
  }

  const customDaysHandler = (event: React.FormEvent<HTMLFormElement>) => {
    // setSelectedDays(input.)
    // console.log(typeof event.target.valueAsNumber)
    // console.log(event.target.value)
    event.preventDefault()
    const form = event.currentTarget
    const formElements = form.elements as typeof form.elements & {
      customDays: HTMLInputElement
    }
    const { value } = formElements.customDays
    dispatch(
      addDays({
        label: `${value} days`,
        value,
      })
    )
  }

  return (
    <div className="d-flex justify-content-evenly">
      <div>
        <Select<Day>
          styles={selectStyle}
          value={selectedDays}
          getOptionLabel={(day: Day) => day.label}
          getOptionValue={(day: Day) => day.value.toString()}
          options={daysListCopy}
          isClearable={true}
          onChange={daysHandler}
        />
      </div>
      <div className="">
        <Select<Day>
          styles={selectStyle}
          value={selectedDays}
          // getOptionLabel={(day: Day) => day.label}
          // getOptionValue={(day: Day) => day.value.toString()}
          options={daysListCopy}
          isClearable={true}
          onChange={daysHandler}
        />
      </div>
      <div className="">
        {selectedDays?.label === 'Custom' ? (
          <Form onSubmit={customDaysHandler} inline>
            <Row>
              <Col>
                <Form.Control className="mb-2 mr-sm-2 input-box" id="customDays" placeholder="Enter Days" />
              </Col>
              <Col>
                <Button type="submit" className="mb-2">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        ) : null}
      </div>
    </div>
  )
}

export default DisplayIncidence
