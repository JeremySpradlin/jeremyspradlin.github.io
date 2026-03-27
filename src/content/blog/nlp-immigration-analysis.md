---
title: "Designing an NLP Pipeline for Immigration Case Analysis"
date: "2021-2-4"
summary: "A look at building a document-processing pipeline for asylum case analysis, and the technical and ethical challenges of using data science in immigration policy work."
featured: false
---

![img](https://miro.medium.com/v2/resize:fit:1400/0*KxCmbKWLpXu09jDV)

[Human Rights First](https://www.humanrightsfirst.org/) is an NGO member of the [Open Society Foundation,](https://www.opensocietyfoundations.org/) an international network of social activists and community organizers who work to influence policy around the world in accordance with the goals of its founders and world leaders in order to move forward the mission of Human Rights. One of the ways in which they aim to achieve this is through a data-driven approach, most notably their Asylum program which works to place those who seek political Asylum in the US with pro-bono lawyers in certain key cities. A major challenge of such a program is that there are often many who are seeking Asylum and very few pro-bono immigration lawyers. Data-driven approaches can provide solutions for this through analyzing previous cases and their outcomes, and looking for emergent patterns to better predict which types of cases will be most likely to succeed in court. This will allow HRF to determine how best to focus their limited resources in helping those who seek asylum status.

### Crafting Data-Driven Solutions

For the last several weeks, myself and others have been working collaboratively on a web application that will assist in this process, as well as allow for the analysis of previous case and judge data for, as our Stakeholder put it, “determining patterns in decisions that allow for determining which judges and policies are problematic” and helping them determine where to focus their resources for better success in the courtroom.

The technical challenges with such an endeavor are high, as the only means of extracting information comes from PDF court documents of previous cases, and our team only received PDF files containing less than all the relevant information that our stakeholder was hoping to use. Our team was given some appellate cases with which to begin our work; constructing a pipeline that will read in a PDF file, convert it to text, and then send it on to be processed for extracting relevant named entities from the document and storing them in a database on the cloud. In addition to this, the DS API also needed to facilitate API calls for accessing and retrieving information from previously scanned cases, whether individually, or in batches for pattern analysis.

![img](https://miro.medium.com/v2/resize:fit:1400/1*vAIKWNjMdV-X5A52x7ySRw@2x.png)

Building upon the [FastAPI](https://fastapi.tiangolo.com/) framework, the greatest challenge our team met was with extracting out the relevant named entities from uploaded PDFs. While we never received any case docs from the Immigration Court system to test on, important because appellate court case docs do not contain most of the needed information, we did receive numerous documents from the appellate courts to test entity extraction on. What’s difficult about this situation in attempting to build a database is that any heuristics created on an appellate court case will most likely fail with a case doc from the Immigration Court due to the documents containing different information and in different places within the documents.

Using SpaCy’s Named Entity Extraction, we were able to extract sets of entities from a PDF with the following function:

![img](https://miro.medium.com/v2/resize:fit:1400/1*NZIptF5mb1do5TqCwitMig.png)

However, we quickly ran into an issue where entity extraction would give us plenty of entities, but even with using a `set()` object for storing them we still got back duplicate entities with multiple variations, and no easy way to discern precisely which name or place goes to which category.

![img](https://miro.medium.com/v2/resize:fit:1400/1*lMSxFGAHN034mvFNcXNxRA.png)

Without having the Immigration Court documents to build reliable heuristics on, development on this feature in the pipeline has not progressed much further than this.

### Data-Driven Policy

While difficulties in obtaining data and creating a database to match stakeholder specifications existed in this specific phase of the project, it has been enlightening getting a look at just how data-driven solutions can be utilized for analyzing current or previous policy and using these insights in working to influence future policy decisions. As data scientists, we often find ourselves working with data that is personal or proprietary in nature, and so this typically involves a need for ethical exploration in the research that we conduct as well as facilitate. On the one hand, using machine learning technologies for analyzing large datasets and extracting insights for where best to focus efforts can be an extremely useful and powerful tool used to better the lives of many.

On the other, however, using datasets that have special flags for whether or not a judge is appointed by a particular political party or entity in order to “work to roll back harmful policy” should raise flags when they come from a global organization that claims to be non-partisan.

Going forward, presuming that our stakeholder can deliver example PDFs of court cases that contain the information they are seeking to gather, I expect the project will have little in the way of technical issues and challenges. Once a pipeline has been created for populating the database with the relevant issue, work can be done to populate that database, and models can be built and trained for facilitating the decision-making process for determining which refugee cases have the greatest chance of succeeding, and therefore assisting the organization with determining which cases to focus their resources on in their mission.

By recognizing discrete patterns within our larger bureaucratic institutions, Data scientists can provide extremely powerful insights to policy makers for determining the best strategies for making the most impact on policy decisions with the least amount of ground work. The benefits on cost and efficiency between policy makers and the bureaucracy are as obvious as they are enormous, but so are the risks, as such tools and their use can, and likely will, be exploited for less than honest aims just as much as they are used to assist in helping those who seek refuge from dangerous environments here in these great United States.