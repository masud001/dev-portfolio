import React from 'react'
import Button from '../Button/Button'

const AboutText = () => {
    return (
        <React.Fragment>
            <div className="about__contents_text">
                <p>Hello, i’m Masud!
                    <br />
                    <br />
                    I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.

                    <br />
                    <br />

                    Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                </p>

                <br />
                <br />

                <div className="read__more_btn">
                    <Button title="Read More" isIcon={true} url="https://example.com" icon="~~>" />
                </div>

            </div>
        </React.Fragment>
    )
}

export default AboutText