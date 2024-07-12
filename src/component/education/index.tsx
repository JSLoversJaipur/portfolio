import React from "react";
import './education.css';
import config from '../../config'
function Education() {
    return (
        <div className="education" id="education">
            <div className="row">
                <div className="col-lg-8 mx-auto my-auto">
                    <h2 className="text-center">Education</h2>


                    {config.education.map((value: any, index: any) => {

                        return (
                            <>
                                <p className="text-decoration-none"><a href={value.url}
                                >{value.name}</a></p>
                                <p>{value.discription}</p>
                            </>
                        )


                    })}





                    <h2 className="text-center">certificate</h2>
                    {config.certificate.map((value: any, index: any) => {

                        return (
                            <>
                                <p className="text-decoration-none"><a href={value.url}
                                >{value.name}</a></p>
                                <p>{value.discription}</p>
                            </>
                        )


                    })}




                    <h2 className="text-center m-5">Confrenses and meetups</h2>
                    {config.confrenses.map((value: any, index: any) => {

                        return (
                            <>
                                <p className="text-decoration-none"><a href={value.url}
                                >{value.name}</a></p>
                                <p>{value.discription}</p>
                            </>
                        )


                    })}

                    <h2 className="text-center m-5">Projects</h2>
                    {config.project.map((value: any, index: any) => {

                        return (
                            <>
                                <p className="text-decoration-none"><a href={value.url}
                                >{value.name}</a></p>
                                <p>{value.discription}</p>
                            </>
                        )


                    })}





                    <h2 className="text-center">Github Contribution</h2>
                    <div className="text-center">
                        <a href={"https://github.com/" + config.information.github}>
                            <img src={"https://ghchart.rshah.org/" + config.information.github} alt="2016rshah's Github chart" />
                        </a>

                    </div>

                </div>
            </div>
        </div>

    )


}
export default Education