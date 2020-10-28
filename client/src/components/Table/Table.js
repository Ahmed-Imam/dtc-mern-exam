import React from 'react';
import { StyledTable, Wrapper } from './style'
import { Waypoint } from 'react-waypoint';

/************************************ READ TABLE SETTINGS PROPS BELOW FOR BETTER CONFIGURATIONS ************************/
const Table = (props) => {

    const { headerContent, tableData, handleWaypointEnter, totalContent, tableSettings } = props
    const tableHeight = tableSettings && tableSettings.tableMaxHeight ? tableSettings.tableMaxHeight : '300px'
    return (
        <Wrapper tableHeight={tableHeight}>
            <StyledTable tableSettings={tableSettings}>

                <thead>
                    <tr>
                        {headerContent && headerContent.map((header, i) => {
                            if (!header.hide) {
                                return (



                                    <th align={header.align} key={i}>{header.name}</th>
                                )
                            }

                        })}
                    </tr>
                </thead>

                {tableData}
                <Waypoint onEnter={handleWaypointEnter} />


                {totalContent &&
                    <tfoot>
                        {totalContent}
                    </tfoot>
                }
            </StyledTable>
        </Wrapper>
    )
}

export default Table


/***

 ***** TableSettings props *****

headerBgColor: color (default: #580606)
headerColor: color (default: #fff)
headerFontSize:`14px`,
contentFontSize:`14px`
contentColor:black
contentBgColorOdd:white
contentBgColorEvens:#f2f2f2



***/