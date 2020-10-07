import React from 'react'
import { JounalEntries } from './JounalEntries'

export const Sidebar = () => {
    return (
        <aside className="journal__sidebar">

            <div className="journal__sidebar-navbar">

                <h3>

                    <i className="far fa-moon"/>
                    <span> Xabi :)</span>
                    
                </h3>

                <button className="btn">
                    Logout
                </button>

            </div>

            <div className="journal__new-entry">

                <i className="far fa-calendar-plus fa-5x"/>
                <p className="mt-5">New Entry</p>

            </div>

            <JounalEntries />

        </aside>
    )
}
