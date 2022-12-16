import React from "react"

import { default as logo } from "../images/card-logo.svg"
import { default as iconcomplete } from "../images/icon-complete.svg"

import bgcardback from "../images/bg-card-back.png"
import bgcardfront from "../images/bg-card-front.png"
import bgmaindesktop from "../images/bg-main-desktop.png"
import bgmainmobile from "../images/bg-main-mobile.png"


class Interactivecard extends React.Component {
    constructor() {
        super()
        this.state = {
            cardname: false,
            cardnum: false,
            month: false,
            year: false
        }
        this.values = {
            cardname: "JANE APPLESED",
            cardnum: "0000 0000 0000 0000",
            month: "00",
            year: "00",
            blankcheck: false,
            inputcode: "0000",
            monthcheck: false,
            yearcheck: false,
            codecheck: false
        }
    }

    componentDidMount() {
        const inputs = document.querySelectorAll("input")
        const form = document.querySelector("#form")
        const formcon = document.querySelector("#formcon")
        const thankscon = document.querySelector("#thankscon")
        const errorcardnum = document.querySelector("#errorcardnum")
        const errordate = document.querySelector("#errordate")
        const errornum = document.querySelector("#errornum")
        const month = document.querySelector("#month")
        const year = document.querySelector("#year")
        const inputcode = document.querySelector("#inputcode")

        inputs.forEach(input => {
            input.addEventListener("keyup", (e) => {
                e.preventDefault()
                switch (input.id) {
                    case "cardname":
                        if (e.target.value.match(/^[a-zA-ZÀ-ÿ\s]{1,40}$/gim)) {
                            this.setState({ cardname: true })
                            this.values.cardname = e.target.value
                        } else {
                            this.setState({ cardname: false })
                            this.values.cardname = "JANE APPLESED"
                        }
                        break;
                    case "cardnum":

                        if (e.target.value == "" || e.target.value.match(/[a-zA-Z]+/gim)) {
                            e.target.value == "0000 0000 0000 0000"
                            this.setState({ cardnum: false })
                            errorcardnum.classList.remove("hidden")
                        } else {
                            errorcardnum.classList.add("hidden")
                            e.target.value = e.target.value.toString().match(/\d{1,4}/gim).join(' ')
                        }

                        if (e.target.value.toString().match(/^\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}$/gim)) {
                            this.setState({ cardnum: true })
                            this.values.cardnum = e.target.value

                        } else {

                            this.setState({ cardnum: false })
                            this.values.cardnum = "0000 0000 0000 0000"
                        }
                        break;
                    case "month":
                        if (e.target.value == "") {
                            this.setState({ monthcheck: false })
                        } else {
                            this.setState({ monthcheck: true })
                        }

                        if (e.target.value <= 12 && e.target.value > 0) {
                            this.setState({ month: true })
                            this.values.month = e.target.value
                        } else {
                            this.setState({ month: false })
                            this.values.month = "00"
                        }
                        break;
                    case "year":
                        if (e.target.value == "") {
                            this.setState({ yearcheck: false })
                        } else {
                            this.setState({ yearcheck: true })
                        }
                        if (e.target.value.match(/[0-9]{2}/gim)) {
                            this.setState({ year: true })
                            this.values.year = e.target.value
                        } else {
                            this.setState({ year: false })
                            this.values.year = "00"
                        }
                        break;
                    case "inputcode":
                        if (e.target.value == "") {
                            this.setState({ codecheck: false })
                        } else {
                            this.setState({ codecheck: true })
                        }
                        if (e.target.value.match(/[0-9]{4}/gim)) {
                            this.setState({ inputcode: true })
                            this.values.inputcode = e.target.value
                        } else {
                            this.setState({ inputcode: false })
                            this.values.inputcode = "0000"
                        }
                        break;
                }

            })
            form.addEventListener("submit", (e) => {
                e.preventDefault()
                if (this.state.cardname == true && this.state.cardnum == true && this.state.month == true && this.state.year) {
                    thankscon.classList.remove("hidden")
                    formcon.classList.add("hidden")
                }

                if (this.state.monthcheck == true && this.state.yearcheck == true) {
                    errordate.classList.add("hidden")
                    month.classList.remove("border-red-400")
                    year.classList.remove("border-red-400")
                    
                } else {
                    errordate.classList.remove("hidden")
                    month.classList.add("border-red-400")
                    year.classList.add("border-red-400")
                }
                if (this.state.codecheck == true) {
                    inputcode.classList.remove("border-red-400")
                    errornum.classList.add("hidden")
                }else{
                    inputcode.classList.add("border-red-400")
                    errornum.classList.remove("hidden")
                }

            })



        })
    }

    render() {
        const label__tailwind = "mt-4 block uppercase tracking-wide text-sm"
        const input__tailwind = "border rounded-sm block w-full py-2 pl-4 mt-2"
        const btn = "bg-custom-very-dark-violet hover:opacity-70 text-white text-center w-full mt-4 py-2 rounded-md"
        const errors = "text-custom-red-input-errors text-[10px] mt-2 hidden"


        return (
            <>
                <header>
                    <picture>
                        <source srcSet={bgmaindesktop} media="(min-width: 768px)" />
                        <img src={bgmainmobile} alt="" className="block w-full md:h-full md:w-auto md:absolute md:-z-10" />
                    </picture>
                </header>

                <section className="md:grid md:grid-cols-2 md:items-center md:justify-center h-screen px-8">

                    <article className="flex justify-center items-center">
                        <div className="top-8 absolute md:static w-fit h-fit flex flex-col gap-4">


                            <div className="top-[56%] absolute md:static">
                                <div className="relative md:w-80 w-3/4 md:mr-16">
                                    <img src={bgcardfront} alt="" className="block w-full" />
                                    <div className="absolute top-0 w-full h-full p-4 text-white">
                                        <img className="w-12 md:w-16" src={logo} alt="" />
                                        <h4 className="absolute bottom-[25%] sm:bottom-12 left-[50%] -translate-x-2/4 md:text-2xl text-center text-md sm:text-xl w-full">{this.values.cardnum}</h4>
                                        <span className="text-sm md:text-base left-4 absolute bottom-2 uppercase">{this.values.cardname}</span>
                                        <span className="text-sm md:text-base right-4 bottom-2 absolute">{this.values.month}/{this.values.year}</span>
                                    </div>
                                </div>
                            </div>

                            <img src={bgcardback} alt="" className="md:w-80 w-3/4 top-20 md:ml-16 ml-auto" />
                        </div>

                    </article>

                    <article id="formcon" className="px-4 mt-16 md:mt-0 flex justify-center items-center flex-col">
                        <form id="form" className="md:w-80">
                            <label className={label__tailwind} >Cardholder name</label>
                            <input maxLength={24} id="cardname" type="text" className={input__tailwind} placeholder="e.g. Jane Appleseed" />

                            <label className={label__tailwind} >Card Number</label>
                            <input maxLength={19} id="cardnum" type="text" className={input__tailwind} placeholder="e.g. 1234 5678 9123 0000" />
                            <label id="errorcardnum" className={`${errors}`}>Wrong format, numbers only</label>

                            <label className={label__tailwind} >Exp. Date (mm/yy) CVC</label>
                            <div className="flex gap-4">
                                <input maxLength={2} id="month" type="text" className={`${input__tailwind}`} placeholder="MM" />
                                <input maxLength={2} id="year" type="text" className={`${input__tailwind}`} placeholder="YY" />
                                <input id="inputcode" maxLength={4} type="text" className={`${input__tailwind}`} placeholder="e.g. 123" />
                            </div>
                            <div className="grid grid-cols-3">
                                <label id="errordate" className={`${errors} col-span-2 order-1 text-center`}>Can´t be blank</label>
                                <label id="errornum" className={`${errors} order-2 text-center`}>Can´t be blank</label>
                            </div>
                            <button className={`${btn}`}>Confirm</button>
                        </form>
                    </article>

                    <article id="thankscon" className="hidden px-4 mt-16 md:mt-0 flex justify-center items-center flex-col">
                        <img src={iconcomplete} alt="" />
                        <h3 className="mt-4 text-2xl uppercase">Thank You!</h3>
                        <p className="mt-4 text-custom-dark-grayish-violet text-sm">We´ve added your card details</p>
                        <button className={`${btn} mt-8 md:w-[320px]`}>Continue</button>
                    </article>
                </section>
            </>
        );
    }
}

export default Interactivecard