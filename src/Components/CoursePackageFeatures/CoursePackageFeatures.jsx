import React from 'react'
import { OutlineButton } from '../OutlineButton/OutlineButton'
import './CoursePackageFeatures.css'

export const CoursePackageFeatures = () => {
    return (
        <div className="course-package-main-div">
            <div className="course-package-align-div">
                <h1>Package Features</h1>
                <table>
                    <tr>
                        <td className='zero-col'>FEATURE 01</td>
                        <td className='first-col'></td>
                        <td className='second-col'></td>
                        <td className='third-col'></td>
                    </tr>
                    <tr>
                        <td className='zero-col'>FEATURE 01</td>
                        <td className='first-col'>FEATURE 01</td>
                        <td className='second-col'>FEATURE 01</td>
                        <td className='third-col'>FEATURE 01</td>

                    </tr>
                    <tr>
                        <td className='zero-col'>FEATURE 01</td>
                        <td className='first-col'>FEATURE 01</td>
                        <td className='second-col'>FEATURE 01</td>
                        <td className='third-col'>FEATURE 01</td>

                    </tr>
                    <tr>
                        <td className='zero-col'>FEATURE 01</td>
                        <td className='first-col'>FEATURE 01</td>
                        <td className='second-col'>FEATURE 01</td>
                        <td className='third-col'>FEATURE 01</td>

                    </tr>
                    <tr>
                        <td className='zero-col'>FEATURE 01</td>
                        <td className='first-col'>-</td>
                        <td className='second-col'>FEATURE 01</td>
                        <td className='third-col'>FEATURE 01</td>

                    </tr>
                    <tr>
                        <td className='zero-col'>FEATURE 01</td>
                        <td className='first-col'>-</td>
                        <td className='second-col'>-</td>
                        <td className='third-col'>FEATURE 01</td>

                    </tr>
                    <tr>
                        <td className='zero-col'></td>
                        <td className='first-col'>
                            <div className="package-price">
                                <p>$499</p>
                                <p>$399</p>
                                <OutlineButton borderRadius={'8px'} isPrimary={true} text={'Shop Now'}></OutlineButton>
                            </div>
                        </td>
                        <td className='second-col'>
                            <div className="package-price">
                                <p>$599</p>
                                <p>$499</p>
                                <OutlineButton borderRadius={'8px'} isPrimary={true} text={'Shop Now'}></OutlineButton>
                            </div>
                        </td>
                        <td className='third-col'>
                            <div className="package-price">
                                <p>$899</p>
                                <p>$599</p>
                                <OutlineButton borderRadius={'8px'} isPrimary={true} text={'Shop Now'}></OutlineButton>
                            </div>
                        </td>


                    </tr>

                </table>
            </div>
        </div>
    )
}
