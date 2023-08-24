import { useState, useCallback } from 'react'
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'
import { MdMenu } from 'react-icons/md'
import { RiExchangeFill } from 'react-icons/ri'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import {
  SubMenuItems,
  SectionsBtn,
  IconBtn,
  LinkBtn,
  SubMenuTitle,
} from '../../pages/dashboard/styles'
import { StyledMenu } from './styles'
import StatusButton from '../status-button'

const Menu = () => {
  const location = useLocation()
  const page = location.pathname.split('/')[2]

  const [togglePreparation, setTogglePreparation] = useState(false)
  const [toggleFieldwork, setToggleFieldwork] = useState(false)
  const [toggleFinalization, setToggleFinalization] = useState(false)
  const [selectedButton, setSelectedButton] = useState(page)

  const params = useParams()
  const navigate = useNavigate()

  const togglePreparationBtn = useCallback(() => {
    togglePreparation ? setTogglePreparation(false) : setTogglePreparation(true)
  }, [togglePreparation])

  const toggleFieldworkBtn = useCallback(() => {
    toggleFieldwork ? setToggleFieldwork(false) : setToggleFieldwork(true)
  }, [toggleFieldwork])

  const toggleFinalizationBtn = useCallback(() => {
    toggleFinalization
      ? setToggleFinalization(false)
      : setToggleFinalization(true)
  }, [toggleFinalization])

  const deselectOtherButtons = useCallback(
    (currentButton: string) => {
      if (selectedButton !== currentButton) {
        setSelectedButton(currentButton)
      }
    },
    [selectedButton],
  )

  const handleClick = useCallback(
    (button: string) => {
      deselectOtherButtons(button)
      navigate(`/dashboard/${button}/${params.id}`)
    },
    [selectedButton],
  )

  return (
    <>
      <StyledMenu>
        <h2>
          <MdMenu /> Menu
        </h2>
        <section>
          <SubMenuItems>
            <SectionsBtn isSelected={selectedButton === 'summary'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <LinkBtn onClick={() => handleClick('summary')}>Summary</LinkBtn>
            </SectionsBtn>
          </SubMenuItems>
        </section>
        <section>
          <SubMenuTitle
            onClick={togglePreparationBtn}
            toggle={togglePreparation}
          >
            Preparation
            <IoMdArrowDropup />
            <IoMdArrowDropdown />
          </SubMenuTitle>
          <SubMenuItems toggle={togglePreparation}>
            <SectionsBtn
              isSelected={selectedButton === 'team'}
              style={{ gap: '22px' }}
            >
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <LinkBtn onClick={() => handleClick('team')}>Team</LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'secondary-data'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="secondary-data" />
              <LinkBtn onClick={() => handleClick('secondary-data')}>
                Secondary Data
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'themesframework'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="themesframework" />
              <LinkBtn onClick={() => handleClick('themesframework')}>
                Themes Framework
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'otherpreparation'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="otherpreparation" />
              <LinkBtn onClick={() => handleClick('otherpreparation')}>
                Other Preparation
              </LinkBtn>
            </SectionsBtn>
          </SubMenuItems>
        </section>
        <section>
          <SubMenuTitle onClick={toggleFieldworkBtn} toggle={toggleFieldwork}>
            Fieldwork
            <IoMdArrowDropup />
            <IoMdArrowDropdown />
          </SubMenuTitle>
          <SubMenuItems toggle={toggleFieldwork}>
            <SectionsBtn isSelected={selectedButton === 'interviews'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="interviews" />
              <LinkBtn onClick={() => handleClick('interviews')}>
                Interviews
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'presentation'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="presentation" />
              <LinkBtn onClick={() => handleClick('presentation')}>
                Presentation
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'historical-mapping'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="historical-mapping" />
              <LinkBtn onClick={() => handleClick('historical-mapping')}>
                Historical Mapping
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'transect-walk'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="transect-walk" />
              <LinkBtn onClick={() => handleClick('transect-walk')}>
                Transect Walk
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'venndiagram'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="venndiagram" />
              <LinkBtn onClick={() => handleClick('venndiagram')}>
                Venn Diagram
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'seasonalcalendar'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="seasonalcalendar" />
              <LinkBtn onClick={() => handleClick('seasonalcalendar')}>
                Seasonal Calendar
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'dailyroutine'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="dailyroutine" />
              <LinkBtn onClick={() => handleClick('dailyroutine')}>
                Daily Routine
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'inputandoutput'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="inputandoutput" />
              <LinkBtn onClick={() => handleClick('inputandoutput')}>
                Input and Output
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'construction'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="construction" />
              <LinkBtn onClick={() => handleClick('construction')}>
                Construction
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'focusgroup'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="focusgroup" />
              <LinkBtn onClick={() => handleClick('focusgroup')}>
                Focus Group
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'realityandobjmatrix'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="realityandobjmatrix" />
              <LinkBtn onClick={() => handleClick('realityandobjmatrix')}>
                Reality and Obj. Matrix
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'prioritieselection'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="prioritieselection" />
              <LinkBtn onClick={() => handleClick('prioritieselection')}>
                Priorities Election
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'otherfieldwork'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="otherfieldwork" />
              <LinkBtn onClick={() => handleClick('otherfieldwork')}>
                Other Fieldwork
              </LinkBtn>
            </SectionsBtn>
          </SubMenuItems>
        </section>
        <section>
          <SubMenuTitle
            onClick={toggleFinalizationBtn}
            toggle={toggleFinalization}
          >
            Finalization
            <IoMdArrowDropup />
            <IoMdArrowDropdown />
          </SubMenuTitle>
          <SubMenuItems toggle={toggleFinalization}>
            <SectionsBtn isSelected={selectedButton === 'extrainformation'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="extrainformation" />
              <LinkBtn onClick={() => handleClick('extrainformation')}>
                Extra Information
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'finalconsideration'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="finalconsideration" />
              <LinkBtn onClick={() => handleClick('finalconsideration')}>
                Final Considerations
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'acknowledgment'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="acknowledgment" />
              <LinkBtn onClick={() => handleClick('acknowledgment')}>
                Acknowledgment
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn
              isSelected={selectedButton === 'generate-final-report'}
            >
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="generate-final-report" />
              <LinkBtn onClick={() => handleClick('generate-final-report')}>
                Generate Final Report
              </LinkBtn>
            </SectionsBtn>
          </SubMenuItems>
        </section>
      </StyledMenu>
    </>
  )
}

export default Menu
