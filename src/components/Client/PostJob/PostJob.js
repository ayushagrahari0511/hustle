import React, { useState, forwardRef } from 'react'
import styles from './PostJob.module.css'
import { countries, category, experience } from '../../../details'
import TextField from '@mui/material/TextField'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Autocomplete from '@mui/material/Autocomplete'
import Snackbar from '@mui/material/Snackbar'
import { useDispatch, useSelector } from 'react-redux'
import { addDetail } from '../../../store/jobDetailSlice'
import { useNavigate, Link } from 'react-router-dom'
import MuiAlert from '@mui/material/Alert'

const theme = createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    outline: "none",
                    border: "none",
                    width: "8rem"
                }
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                endAdornment: {
                    display: "none",
                },
                root: {
                    width: "15rem !important",
                },
                inputRoot: {
                    padding: 0,
                    color: "var(--primary_blue)",
                    fontSize: "1.8rem",
                    fontWeight: "600",
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    outline: "none",
                    border: "none",
                }
            }
        }
    }
})


const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const PostJob = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [skillList, setSkillList] = useState([])
    const [skill, setSkill] = useState('')
    const [open, setOpen] = useState(false)
    const [jobDetail, setJobDetail] = useState({
        title: "Web Developer",
        category: "Development & IT",
        description: "",
        experience: "Entry Level",
        duration: "Less than a day",
        budget: 0,
        enlish_level: 'Basic',
        job_type: "Remote",
        location: '',
    })

    // Displaying form Error &&
    // Submiting form
    const handleError = (e) => {
        e.preventDefault()
        const {
            title,
            description,
            location,
            budget
        } = jobDetail

        if (!title || !description || !location || !budget) {
            setOpen(true);
        }
        else {
            dispatch(addDetail({ ...jobDetail, skills: skillList }))
            navigate('/post-job/review')
            setOpen(false)
        }
    }

    // Closing Error message
    const handleErrorClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    // Adding details to state
    const addJobDetail = (e) => {
        setJobDetail((previous) => {
            return { ...previous, [e.target.name]: e.target.value };
        })
    }


    // Add skill to array
    const handleSkill = (e) => {
        if (e.key === 'Enter') {
            const skill_list = e.target.value.toUpperCase().split(',');
            if (skill_list) {
                let skills = []
                skills = [...new Set([...skills, ...skill_list])]
                setSkillList((prev) => {
                    return [...new Set([...prev, ...skill_list])]
                })
                setSkill('')
            }
        }
    }
    return (
        <ThemeProvider theme={theme}>
            <div className='container'>
                <div className={`wrapper ${styles.wrapper}`}>
                    <div className={styles.top_navigation}>
                        <Link to={`/`}>
                            Home
                            <img src="../../rightArrow.svg" alt="" />
                        </Link>
                        <Link to={`/post-job`}>
                            Post a job
                            <img src="../../rightArrow.svg" alt="" />
                        </Link>
                        Job Details
                    </div>
                    <h2>
                        Enter Your Job Details
                    </h2>
                    <div className={styles.title_wrapper}>
                        <div className={styles.title_list}>
                            <h3>
                                Job Title
                            </h3>
                            <input type="text"
                                name='title'
                                required
                                onChange={(e) => addJobDetail(e)}
                                placeholder='Web Developer' />
                        </div>
                        <div className={styles.list}>
                            <h3>
                                Category
                            </h3>
                            <div className={styles.category}>
                                <select name="category" onChange={(e) => addJobDetail(e)}>
                                    {
                                        category.map((category) => (
                                            <option value={category.title} key={category.id}>{category.title}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Information</h3>
                        <textarea name="description"
                            required
                            placeholder='Description...'
                            onChange={(e) => addJobDetail(e)}></textarea>
                    </div>
                    <div className={styles.experience}>
                        <div className={styles.list}>
                            <h3>
                                Experience
                            </h3>
                            <div className={styles.box}>
                                <select name="experience" onChange={(e) => addJobDetail(e)}>
                                    {
                                        experience.map((experience) => (
                                            <option value={experience.title} key={experience.id}>{experience.title}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className={styles.list}>
                            <h3>
                                Duration
                            </h3>
                            <div className={styles.box}>
                                <select name="duration" onChange={addJobDetail}>
                                    <option value="Less than a day">Less than a day</option>
                                    <option value="Less than 1 month">Less than 1 month</option>
                                    <option value="Less than 6 month">Less than 6 month</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.list}>
                            <h3>
                                Budget
                            </h3>
                            <div className={styles.budget}>
                                $<input
                                    type="number"
                                    name="budget"
                                    required
                                    onChange={addJobDetail}
                                /> USD
                            </div>
                        </div>
                        <div className={styles.list}>
                            <h3>
                                English Level
                            </h3>
                            <div className={styles.box}>
                                <select name="enlish_level" onChange={addJobDetail}>
                                    <option value="Basic">Basic</option>
                                    <option value="Conversational">Conversational</option>
                                    <option value="Fluent">Fluent</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.list}>
                            <h3>
                                Type
                            </h3>
                            <div className={styles.box}>
                                <select name="job_type" onChange={addJobDetail}>
                                    <option value="Remote">Remote</option>
                                    <option value="Local">Local</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.list}>
                            <h3>
                                Location
                            </h3>
                            <div className={styles.location}>
                                <img src="../../location.svg" alt="" />
                                <Autocomplete id='country'
                                    sx={{ width: 300 }}
                                    options={countries}
                                    autoHighlight
                                    onInputChange={(event, newInputValue) => {
                                        setJobDetail((previous) => {
                                            return { ...previous, ["location"]: newInputValue };
                                        })
                                    }}
                                    getOptionLabel={(option) => option.label}
                                    renderInput={
                                        (params) => (
                                            <TextField
                                                {...params}
                                                required
                                                inputProps={{
                                                    ...params.inputProps,
                                                    autoComplete: 'new-password',
                                                }}
                                            />
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skill_input}>
                            <h3>Skills</h3>
                            <input
                                type="text"
                                onKeyDown={handleSkill}
                                value={skill}
                                onChange={(e) => setSkill(e.target.value)}
                                placeholder='UI/UX' />
                        </div>
                        {
                            skillList && skillList.map((skill, index) => (
                                <div className={styles.skillList}
                                    onClick={() => {
                                        setSkillList([
                                            ...skillList.slice(0, index),
                                            ...skillList.slice(index + 1, skillList.length)
                                        ])
                                    }}
                                    key={index}>
                                    <h4>{skill}</h4>
                                    <img src="../../icon_cancel.svg" alt="" />
                                </div>
                            ))
                        }
                    </div>
                    <div className={styles.submit}>
                        <button className='button_dark' onClick={handleError}>
                            Submit your work
                        </button>
                        <Snackbar
                            anchorOrigin={{
                                horizontal: 'center',
                                vertical: 'bottom',
                            }
                            }
                            open={open}
                            autoHideDuration={3000}
                            onClose={handleErrorClose}
                        >
                            <Alert
                                onClose={handleErrorClose}
                                sx={{
                                    fontSize: "1.6rem",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                                severity="error">
                                All the fields are mandatory!
                            </Alert>
                        </Snackbar>
                    </div>
                </div>
            </div >
        </ThemeProvider>
    )
}

export default PostJob