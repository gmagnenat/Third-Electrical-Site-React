import React from "react"
import { HiBolt, HiWrench } from "react-icons/hi2"
import { CgGitFork } from "react-icons/cg"

export const navOptions = [
    {
        href: '/',
        title: 'Home',
    },
    {
        href: 'about',
        title: 'About Us',
    },
    {
        href: 'residential',
        title: 'Residential',
    },
    {
        href: 'commercial',
        title: 'Commercial',
    },
    {
        href: 'industrial',
        title: 'Industrial',
    },
    {
        href: 'other',
        title: 'Other Services',
    },
    {
        href: 'contact',
        title: 'Contact Us',
    },
]


export const subPages = {
    one: {
        a: 'a',
        b: 'b',
    },
    two: {
        a: 'c',
        b: 'd',
    },
    three: {
        a: 'e',
        b: 'f',
    },
}

export const whatWeDo = [
    {
        title: "Residential",
        path: "residential",
        icon: (<HiWrench className="text-white w-full h-full z-40 select-none pointer-events-none" />),
        list: [
            "Renovations", "Panel Upgrades", "New Construction", "Landscape Lighting", "Knob-and-Tube Replacement",
        ]
    },
    {
        title: "Commercial",
        path: "commercial",
        icon: (<HiBolt className="text-white w-full h-full z-40 select-none pointer-events-none" />),
        list: [
            "Data Wiring", "Security Systems", "Backup Generators", "Fire Alarm Systems", "Warehouse and Office Lighting",
        ]
    },
    {
        title: "Industrial",
        path: "industrial",
        icon: (<CgGitFork className="text-white w-full h-full z-40 select-none pointer-events-none" />),
        list: [
            "Switchboards", "600v Systems", "Motor Controls", "3-Phase Circuits", "Outdoor Lighting",
        ]
    },
]


export const aboutUs = [
    {
        icon: (<CgGitFork className="m-auto relative top-2 w-12 h-12" />),
        number: 212,
        text: "Panel Replacements"
    },
    {
        icon: (<CgGitFork className="m-auto relative top-2 w-12 h-12"  />),
        number: 212,
        text: "Panel Replacements"
    },
    {
        icon: (<CgGitFork className="m-auto relative top-2 w-12 h-12"  />),
        number: 212,
        text: "Panel Replacements"
    },
    {
        icon: (<CgGitFork className="m-auto relative top-2 w-12 h-12"  />),
        number: 212,
        text: "Panel Replacements"
    },
]