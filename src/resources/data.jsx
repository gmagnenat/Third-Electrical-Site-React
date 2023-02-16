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


export const reviews = [
    {
    text: "I have an older condo, and needed some breakers and wires replaced, but two other electricians said the walls and floor aren't concrete so it couldn't be done.  But Mike is great, and he did the job well.  Professional, reliable, great value, and not afraid to do a more difficult task.",
    name: "Sean Dayton",
    },
    {
    text: "Sean and team completely re-did the electrical in our apartment complex before upgrading us to a 400 amp service. The care, time, and expertise that Fake Electric brought to the jobsite was something that I have never seen before. Thanks to the Fake Electric for being true electrical professionals.",
    name: "Mike Smith",
    },
    {
    text: "The people at Fake Electric are capable of commercial and residential projects with a sharp focus on quality. Clean work and careful attention, along with a respectful and knowledgeable crew is what keeps us calling them back.",
    name: "Pedro Gonzales",
    },
    {
    text: "Fake Electrical team were superb, and I would highly recommend this company!",
    name: "Sean Peters",
    },
]