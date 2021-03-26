import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Note from "./components/Note"
import Notes from "./components/Notes"


function App() {
    return (
    <div>
        <Header />
        <Footer />
        {Notes.map((Notes) => {
            return (
                <Note 
                    key = {Notes.key}
                    title = {Notes.title}
                    content = {Notes.content}
                /> )
        })}
    </div> 
    )
}

export default App;