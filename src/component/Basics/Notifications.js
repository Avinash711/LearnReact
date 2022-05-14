import React, { useState } from 'react';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';

export const Notifications = () => {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <div className="card-body">
                        <h3>Mr. XYZ has Request to share your cart.</h3>
                        <h4>XYZ's cart value: $30.60</h4>
                        <ButtonGroup disableElevation variant="contained">
                            <Button>Confirm</Button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Button>Decline</Button>
                        </ButtonGroup>
                    </div>

                </div>

            </div>

        </>
    )
}
