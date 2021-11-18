import React from 'react'
import { DiJavascript1, DiReact, DiPython, DiHtml5, DiSass, DiBootstrap, DiGithubBadge, DiVisualstudio, DiJqueryLogo, DiNodejsSmall, DiPostgresql, DiFirebase } from "react-icons/di";
import { SiPostman, SiFigma, SiExpress } from "react-icons/si";
import { SkillsContainer, SkillsH1, SkillsWrapper, SkillsCol, SkillsH2, SkillsLists, SkillsList, SkillsP } from './SkillsElements'

const SkillsSection = () => {
    return (
        <div>
            <SkillsContainer id='skills'>
                <SkillsH1>Technologies I use:</SkillsH1>
                <SkillsWrapper>
                    <SkillsCol>
                        <SkillsH2>LANGUAGES:</SkillsH2>
                        <SkillsLists>
                            <SkillsList>
                                <DiJavascript1 />
                                <SkillsP>
                                    JavaScript
                                </SkillsP>
                        </SkillsList>
                        <SkillsList>
                            <DiHtml5 />
                            <SkillsP>
                                HTML
                            </SkillsP>
                        </SkillsList>
                        <SkillsList>
                            <DiSass />
                            <SkillsP>
                                CSS/SASS
                            </SkillsP>
                        </SkillsList>
                        <SkillsList>
                            <DiPython />
                            <SkillsP>
                                Python
                            </SkillsP>
                        </SkillsList>
                        <SkillsList>
                                <DiPostgresql />
                                <SkillsP>
                                    SQL
                                </SkillsP>
                            </SkillsList>
                    </SkillsLists>
                    </SkillsCol>
                    <SkillsCol>
                        <SkillsH2>FRAMEWORKS:</SkillsH2>
                        <SkillsLists>
                            <SkillsList>
                                <SiExpress />
                                <SkillsP>
                                    ExpressJS
                                </SkillsP>
                            </SkillsList>
                            <SkillsList>
                                <DiReact />
                                <SkillsP>
                                    React
                                </SkillsP>
                            </SkillsList>
                            <SkillsList>
                                <DiJqueryLogo />
                                <SkillsP>
                                    JQuery
                                </SkillsP>
                            </SkillsList>
                            <SkillsList>
                                <DiBootstrap />
                                <SkillsP>
                                    Bootstrap
                                </SkillsP>
                            </SkillsList>
                            <SkillsList>
                                <DiNodejsSmall />
                                <SkillsP>
                                    Node.JS
                            </SkillsP>
                        </SkillsList>
                        </SkillsLists>
                    </SkillsCol>
                    <SkillsCol>
                        <SkillsH2>TOOLS:</SkillsH2>
                        <SkillsLists>
                            <SkillsList>
                                <SiPostman />
                                <SkillsP>
                                    Postman
                                </SkillsP>
                        </SkillsList>
                        <SkillsList>
                            <DiGithubBadge />
                            <SkillsP>
                                Git & Github
                            </SkillsP>
                        </SkillsList>
                        <SkillsList>
                            <SiFigma />
                            <SkillsP>
                                Figma
                            </SkillsP>
                        </SkillsList>
                        <SkillsList>
                            <DiFirebase />
                            <SkillsP>
                                Firebase, PostgresQL, SQLite
                            </SkillsP>
                        </SkillsList>
                        <SkillsList>
                            <DiJqueryLogo />
                            <SkillsP>
                                Axios
                            </SkillsP>
                        </SkillsList>
                        <SkillsList>
                            <DiNodejsSmall />
                            <SkillsP>
                                Ajax
                            </SkillsP>
                        </SkillsList>
                        <SkillsList>
                            <DiVisualstudio />
                            <SkillsP>
                                VScode
                            </SkillsP>
                        </SkillsList>
                    </SkillsLists>
                    </SkillsCol>
                </SkillsWrapper>
            </SkillsContainer>
        </div>
    )
}

export default SkillsSection
