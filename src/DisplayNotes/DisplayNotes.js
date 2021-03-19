import React from 'react';
import {Card} from 'react-bootstrap';
import {PencilIcon, TrashIcon} from '@primer/octicons-react'
import AddNote from '../AddNote/AddNote';

const DisplayNotes = ({handleNoteEdit, notes}) => {
        // console.log(notes)
        const colorMap = new Map();
        colorMap.set('home', 'primary');
        colorMap.set('work', 'success');
        colorMap.set('personal', 'warning');

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
                                    <label><input type='checkbox'/> {note.title}</label>
                                    <span onClick={() => handleNoteEdit(note)}>
                                        <PencilIcon size={24}/>
                                    </span>
                                    <span onClick={() => alert('delete clicked')}><TrashIcon size={24}/></span>

                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>{note.title} </Card.Title>
                                    <Card.Text>
                                        {note.date}
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
