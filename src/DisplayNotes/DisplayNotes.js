import React, {useState} from 'react';
import {Card} from 'react-bootstrap';
import {PencilIcon, TrashIcon} from '@primer/octicons-react'

const DisplayNotes = ({handleDelete, handleModalPopulation, notes, handleCheckbox}) => {
        // console.log(notes)
        const colorMap = new Map();
        colorMap.set('home', 'primary');
        colorMap.set('work', 'success');
        colorMap.set('personal', 'warning');


        const checkbox = (e, noteId) => {
            handleCheckbox(e.target.value, noteId);
        }


        return (
            <div style={{margin: '0px', marginTop: '5px'}} className='container row'>
                {
                    notes.map((note) => {
                            return <Card
                                bg={colorMap.get(note.category)}
                                text={'light'}
                                style={{width: '48%', margin: '1%'}}
                                className="mb-2"
                            >
                                <Card.Header as='h3'>
                                    <label><input type='checkbox'
                                                  onChange={e => checkbox(e, note.id)}/> {note.strikethrough ?
                                        <del>{note.title}</del> : note.title}
                                    </label>
                                    <span style={{float: "right"}}>
                            <span onClick={() => handleModalPopulation(note)}>
                                <PencilIcon size={24}/>
                            </span>
                            <span onClick={() => handleDelete(note)}>
                                <TrashIcon size={24}/>
                             </span>
                                </span>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>{note.strikethrough ? <del>{note.description}</del> : note.description} </Card.Title>
                                    <Card.Text>
                                        {note.strikethrough ? <del>{note.date}</del> : note.date}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        }
                    )
                }
            </div>
        )
    }
;

export default DisplayNotes;
