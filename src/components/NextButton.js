import React from 'react';
import { Link } from "gatsby"
import Button from './Button'

export default (props) => <Button as={Link} {...props}>Next →</Button>