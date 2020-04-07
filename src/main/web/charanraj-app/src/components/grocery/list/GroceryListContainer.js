import { Paper } from '@material-ui/core'
import React from 'react'
import { GroceryHeaderTypography } from '../grocery.styles'
import { GroceryList } from './GroceryList'

export default function GroceryListContainer(props) {
    return (
        <Paper>
          <GroceryHeaderTypography paragraph>
            Grocery List
          </GroceryHeaderTypography>
          <GroceryList {...props} />
        </Paper>
    )
}
