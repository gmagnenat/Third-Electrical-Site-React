import React from "react"
import { HiBolt, HiWrench } from "react-icons/hi2"
import { CgGitFork } from "react-icons/cg"

export const navOptions = [
    {
        href: '/',
        title: 'Home',
    },
    {
        href: '../subPage/about',
        title: 'About Us',
    },
    {
        href: '../subPage/residential',
        title: 'Residential',
    },
    {
        href: '../subPage/commercial',
        title: 'Commercial',
    },
    {
        href: '../subPage/industrial',
        title: 'Industrial',
    },
    {
        href: '../subPage/other',
        title: 'Other Services',
    },
    {
        href: '../contact',
        title: 'Contact Us',
    },
]


export const subPages = {
    about: {
        title: "About Us",
        text: "Since it began in 1980 Fake Electric has been known for its swift, attentive service, high-quality work, and competitive prices. Master Electrician Mark Smith has years of experience with electrical jobs from big to small — everything from replacing a single light to wiring an entire warehouse with a team. He is an expert in complex installations, electrical safety, and system upgrades. Fake Electric promises quality work and superb customer service for its residential and commercial clients — many who have been using us for years!",
    },
    residential: {
        title: "Residential Electrician in Victoria",
        text: "First and foremost, at Fake Electric we value our clients. We always take the time to explain our services in detail, and what the job will entail. We will treat your home like it is ours, and leave it in a better state than we found it. Fake Electric proudly offers electrical consultations for every new prospective renovation or construction. During these consultations, Fake Electric's professional electricians will identify any and all hazards in your home, and make recommendations on how to remedy them. Fake Electric also provides a competitive quote for affordable electrical upgrades and repairs.",
    },
    commercial: {
        title: "Commercial Electrician in Victoria",
        text: "Commercial buildings and establishments are subject to their own set of design requirements. Such buildings include medical offices, restaurants, hotels, warehouses, and retail stores. With its over 40 years of experience, Fake Electric is uniquely positioned to serve our clients with any and all of their repair or installation needs.",
    },
    industrial: {
        title: "Industrial Electrician in Victoria",
        text: "Industrial electrical upgrades providing energy improvements will significantly decrease utility costs, and save a large part of your operating budget. Factories use a massive amount of energy. Research shows that manufacturing plants consume more than 1,000 times as much power as other industries. This level of consumption provides quick payback periods for electrical improvement costs. Electrical upgrades also add to the value of a facility with an average increased asset value of three dollars for every dollar spent.",
    },
    other: {
        title: "Our Other Electrical Services",
        text: "Our team at Fake Electric has many years of experience in many different types of projects, so if you need something done that doesn't fit into any simple categories, give us a call! We have experience with EV chargers, vault maintenance, preventative maintanence programs, and much much more!",
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
    text: "Fake Electrical team were superb, and I would highly recommend this company to anyone needing electrical upgrades in Victoria! They were clean, attentive, respectful, and finished the job on time. 10/10.",
    name: "Sean Peters",
    },
]