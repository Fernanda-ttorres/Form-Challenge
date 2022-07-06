import React from 'react'
import { TagH2Styled, TagH5Styled } from './Title.styled'

export const Title = ({ tagName, text }) => {
    switch (tagName) {
        case "h2":
            return <TagH2Styled>{text}</TagH2Styled>
        case "h5":
            return <TagH5Styled>{text}</TagH5Styled>
    }
}