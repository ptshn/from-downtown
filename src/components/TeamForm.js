import React, { Component } from 'react'
import { FormGroup, FormControl } from 'react-bootstrap'
import * as teamService from '../services/teamService'

class TeamForm extends Component {
    constructor() {
        super()
        this.state = {
            userId: 1
            , player1: ''
            , player2: ''
            , player3: ''
            , player4: ''
            , player5: '' 
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick() {
        const team = this.state
        console.log(team)
        teamService.create(team)
         .then(response => {
            console.log(response)
         })
         .catch(console.log)
    }

    render() {
        return (
            <div>
                <section className="page-section bg-primary" id="about">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="text-white mt-0">Who got next?</h2>
                                <hr className="divider light my-4" />
                                <form>
                                    <FormGroup>
                                        <FormControl name='player1' type='text' placeholder='Enter Point Guard' onChange={this.handleChange} value={this.state.player1} />
                                        <FormControl name='player2' type='text' placeholder='Enter Shooting Guard' onChange={this.handleChange} value={this.state.player2} />
                                        <FormControl name='player3' type='text' placeholder='Enter Small Forward' onChange={this.handleChange} value={this.state.player3} />
                                        <FormControl name='player4' type='text' placeholder='Enter Power Forward' onChange={this.handleChange} value={this.state.player4} />
                                        <FormControl name='player5' type='text' placeholder='Enter Center' onChange={this.handleChange} value={this.state.player5} />
                                    </FormGroup>
                                </form>
                                <a className="btn btn-light btn-xl js-scroll-trigger" href="#services" onClick={this.handleClick}>Submit My Team</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default TeamForm