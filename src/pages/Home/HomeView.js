// TODO - 9
import React from 'react'
import PropTypes from 'prop-types'
import { LanguageSelection } from './components/LanguageSelection'
import {Typography, Button} from '@material-ui/core'
import { DASHBOARD, ROOT } from 'navigation/CONSTANTS'
import {useNavigate} from 'react-router-dom'

const HomeView = props => {
    const history = useNavigate();
    const goTo = (path) => {
        history(path || ROOT);
    }
    return (
        <div>
            <Typography variant="h2">HomeView {props.title}</Typography>
            <LanguageSelection />
            <Button variant="contained" color="primary" onClick={()=>goTo(DASHBOARD)}>Dashboard</Button>
        </div>
    )
}

HomeView.propTypes = {
    title: PropTypes.string.isRequired
}

export default HomeView
