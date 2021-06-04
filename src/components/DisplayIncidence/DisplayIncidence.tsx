import React, { CSSProperties, useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Select, { StylesConfig, ValueType } from 'react-select'
import { fetchDistricts } from '../../features/districts'
import { addDays, toggleDays } from '../../redux/daySlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { Day } from '../../redux/types/dayTypes'
import { District } from '../../redux/types/districtTypes'
import './DisplayIncidence.scss'

const customControlStyles: CSSProperties = {
  color: 'white',
  borderColor: 'pink',
  width: 250,
}

type IsMulti = false

const selectDayStyle: StylesConfig<Day, IsMulti> = {
  control: (provided, state) => {
    return {
      ...provided,
      ...customControlStyles,
    }
  },
}

const selectDistrictStyle: StylesConfig<District, IsMulti> = {
  control: (provided, state) => {
    return {
      ...provided,
      ...customControlStyles,
    }
  },
}

const DisplayIncidence: React.FC = () => {
  const dispatch = useAppDispatch()
  const daysList = useAppSelector((state) => state.days.dayOptions)
  useEffect(() => {
    dispatch(fetchDistricts(''))
  }, [])
  const districtsList = useAppSelector((state) => state.districts.districts)
  const districtListStatus = useAppSelector((state) => state.districts.status)
  const [selectedDays, setSelectedDays] = useState<ValueType<Day, false>>(daysList[0].options[0])
  const [selectedDistricts, setSelectedDistricts] = useState<ValueType<District, false>>(districtsList[0])
  const daysHandler = async (option: ValueType<Day, false>) => {
    setSelectedDays(option)
    if (option !== null) {
      dispatch(toggleDays(option))
    }
  }
  const districtHandler = async (option: ValueType<District, false>) => {
    setSelectedDistricts(option)
    if (option !== null) {
      console.log(option)
      // dispatch(toggleDistricts(option))
    }
  }

  const customDaysHandler = (event: React.FormEvent<HTMLFormElement>) => {
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
        {districtListStatus === 'loading' ? (
          'Loading Districts ...'
        ) : (
          <Select<District>
            styles={selectDistrictStyle}
            value={selectedDistricts}
            // getOptionLabel={(district: District) => district.name.toString()}
            // getOptionValue={(district: District) => district.ags.toString()}
            options={districtsList}
            isClearable={true}
            onChange={districtHandler}
          />
        )}
      </div>
      <div className="">
        <Select<Day>
          styles={selectDayStyle}
          value={selectedDays}
          // getOptionLabel={(day: Day) => day.label}
          // getOptionValue={(day: Day) => day.value.toString()}
          options={daysList}
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
function toggleDistricts(arg0: District): any {
  throw new Error('Function not implemented.')
}
