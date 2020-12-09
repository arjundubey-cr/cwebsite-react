import React from 'react'
import '../../commondesign.css'
import { ReactComponent as Youtube } from '../../../assets/logo/youtube.svg'
import BMAClab1 from '../../images/ce/BMAClab1.jpg'
import BMAClab2 from '../../images/ce/BMAClab2.jpg'
import CTlab1 from '../../images/ce/CTlab1.jpg'
import CTlab2 from '../../images/ce/CTlab2.jpg'
import CTlab3 from '../../images/ce/CTlab3.jpg'
import EElab1 from '../../images/ce/EElab1.jpg'
import EElab2 from '../../images/ce/EElab2.jpg'
import FMlab1 from '../../images/ce/FMlab1.jpg'
import FMlab2 from '../../images/ce/FMlab2.jpg'
import GIlab1 from '../../images/ce/GIlab1.jpg'
import GIlab2 from '../../images/ce/GIlab2.jpg'
import GTElab1 from '../../images/ce/GTElab1.jpg'
import GTElab2 from '../../images/ce/GTElab2.jpg'
import GTElab3 from '../../images/ce/GTElab3.jpg'
import GTElab4 from '../../images/ce/GTElab4.jpg'
import HAHMlab1 from '../../images/ce/HAHMlab1.jpg'
import HAHMlab2 from '../../images/ce/HAHMlab2.jpg'
import SAlab1 from '../../images/ce/SAlab1.jpg'
import SAlab2 from '../../images/ce/SAlab2.jpg'
import SLlab1 from '../../images/ce/SLlab1.jpg'
import SLlab2 from '../../images/ce/SLlab2.jpg'
import TElab1 from '../../images/ce/TElab1.jpg'
import TElab2 from '../../images/ce/TElab2.jpg'
import TElab3 from '../../images/ce/TElab3.jpg'
import TElab4 from '../../images/ce/TElab4.jpg'

const About = (props) => {
  const lab = [
    {
      id: '1',
      lab: 'Building Materials & Construction Lab',
      description:
        'Number of Equipments: 08 (Vicat’s Apparatus, Compression Testing Machine, Le-Chatelier’s Apparatus, Flexure Testing Machine, Sieve Shaker & I.S. Sieves (coarse &fine both), Silt Content & Bulking of  sand, Oven, Cube Vibrator)',
      images: [BMAClab1, BMAClab2],
      alt: ['image1', 'image2'],
    },
    {
      id: '2',
      lab: 'Surveying Lab',
      description:
        'Number of Equipments: 06 (Chains & Links, Prismatic Compass & Surveyor’s compass, Theodolite, Dumpy Level, Auto Level, Plane Table)',
      images: [SLlab1, SLlab2],
      alt: ['image1', 'image2'],
    },
    {
      id: '3',
      lab: 'Fluid Mechanics Lab',
      description:
        'Number of Equipments: 08 (Venturimeter, Orifice meter, Friction Factor Apparatus, Bend meter, Reynolds Apparatus, Orifice,Bernoulli’s Apparatus,Metacentric height Apparatus)',
      images: [FMlab1, FMlab2],
      alt: ['image1', 'image2'],
    },
    {
      id: '4',
      lab: 'Hydraulics & Hydraulic Machines Lab',
      description:
        'Number of Equipments: 04 (Francis Turbine, Kaplan Turbine, Pelton Turbine, Tilted Flume)',
      images: [HAHMlab1, HAHMlab2],
      alt: ['image1', 'image2'],
    },
    {
      id: '5',
      lab: 'Structural Analysis Lab',
      description:
        'Number of Equipments: 08 (Maxwell Theorem Apparatus, Flexural rigidity Apparatus, Column Buckling Apparatus, 3-pin jointed bar Apparatus, Curved Members Apparatus, Unsymmetrical Bending Apparatus, 2- Hinged Arch, 3- Hinged Arch)',
      images: [SAlab1, SAlab2],
      alt: ['image1', 'image2'],
    },
    {
      id: '6',
      lab: 'Geo-informatics Lab',
      description:
        'Number of Equipments: 05 (Total Station with reflector Prism, Mirror Stereoscope, Lens Stereoscope, Parallax bar, Hand-held GPS)',
      images: [GIlab1, GIlab2],
      alt: ['image1', 'image2'],
    },
    {
      id: '7',
      lab: 'Concrete Technology Lab',
      description:
        'Number of Equipments: 16 (Vicat’s Apparatus, Compression Testing Machine, Le-Chatelier’s Apparatus, Flexure Testing Machine, Sieve Shaker with I.S., Sieves (coarse &fine both), Slump Cone Apparatus, Vee-Bee Consistometer, Flow Table Test, Compaction Factor Test, Schmidt Rebound Hammer, Concrete Test Hammer, Concrete Drum Mixer, Vibrating Table, Water Bath, Oven, Cube Vibrator)',
      images: [CTlab1, CTlab2, CTlab3],
      alt: ['image1', 'image2', 'image3'],
    },
    {
      id: '8',
      lab: 'Transportation Engineering Lab',
      description:
        'Number of Equipments: 14 (Aggregate Crushing Value Apparatus, Aggregate Impact Value Apparatus, Los-Angeles Abrasion Machine, Dorry’s Attrition Machine, Length Gauge, Thickness Gauge, CBR Testing Apparatus, Marshall’s Apparatus, Penetrometer, Ring & Ball Apparatus, Ductility Testing Machine, Flash & Fire Point Apparatus, Sieve Shaker with I.S. Sieves, Oven)',
      images: [TElab1, TElab2, TElab3, TElab4],
      alt: ['image1', 'image2', 'image3', 'image4'],
    },
    {
      id: '9',
      lab: 'Geotechnical Engineering Lab',
      description:
        'Number of Equipments: 13 (Hydrometer, Cassagrande’s Apparatus, Proctor Compaction Apparatus, Relative Density Apparatus, Core Cutter, Permeability Apparatus, Direct Shear Apparatus, Standard Penetration Test, Static Cone Penetration Apparatus, Sand Replacement apparatus, Water Content Determination Apparatus, Shrinkage Limit Apparatus, Plastic Limit Apparatus)',
      images: [GTElab1, GTElab2, GTElab3, GTElab4],
      alt: ['image1', 'image2', 'image3', 'image4'],
    },
    {
      id: '10',
      lab: 'Environmental Engineering Lab',
      description:
        'Number of Equipments: 11 (pH meter, Turbidity meter, BOD Incubator apparatus, COD Digestion tank apparatus, Conductivity Meter Apparatus, Kjheldal Apparatus, Jar Test Apparatus, High Volume Sampler, Sound level meter, Distillation Tank, Multi-test Parameter)',
      images: [EElab1, EElab2],
      alt: ['image1', 'image2'],
    },
  ]

  return (
    <div className='about pl-2 pr-1 py-1'>
      <div className='social-handle mb-2 p-2 pl-1'>
        <div className='youtube'>
          <a
            className='a-text-none'
            href='https://www.youtube.com/channel/UCVhTAjgsL3e4spHSlD6xRsA'
            alt='Computer Science youtube Channel'
            target='_blank'
            rel='noopener noreferrer'>
            <Youtube />
            <span className='ml-2 text-danger' style={{ fontSize: '1rem' }}>
              Youtube Channel
            </span>
          </a>
        </div>
      </div>
      <div className='introduction'>
        <div className='tx-blue container-fluid text-center section-heading'>
          Department of Civil Engineering
        </div>
        <hr className='section-underline' />
        <p className='description'>
          The Department of Civil Engineering offers 4 years B.Tech in Civil
          Engineering and it has an intake of 66 students. The department has a
          well qualified faculty and technical supporting staff. All the
          laboratories of the department are well equipped with modern
          equipments.
        </p>
      </div>
      <div className='course-offered'>
        <h2 className='intro text-uppercase tx-blue'>Course offered</h2>
        <ul className='course-list description'>
          <li>
            <strong>
              Bachelor of Technology in Civil Engineering (Duration-4 years)
            </strong>
          </li>
          <li>
            <strong>
              Bachelor of Technology in Civil Engineering- Lateral (Duration-3
              years)
            </strong>
          </li>
        </ul>
      </div>
      <div className='deparment'>
        <h2 className='intro text-uppercase tx-blue'>
          CONSULTANCY AREAS OF Civil ENGINEERING
        </h2>
        <div>
          <ol className='description'>
            <li>
              <strong>Water Treatment</strong>
            </li>
            <li>
              <strong>Waste Water Treatment</strong>
            </li>
            <li>
              <strong>Solid Waste Management</strong>
            </li>
            <li>
              <strong>E-waste Management</strong>
            </li>
            <li>
              <strong>Rain Water Harvesting</strong>
            </li>
            <li>
              <strong>Aggregate Testing </strong>
            </li>
            <li>
              <strong>Concrete Testing </strong>
            </li>
            <li>
              <strong>Cement Testing </strong>
            </li>
            <li>
              <strong>Bitumen Testing </strong>
            </li>
            <li>
              <strong>Brick Testing</strong>
            </li>
            <li>
              <strong>Soil Testing</strong>
            </li>
          </ol>
        </div>
      </div>
      <div className='computer-center'>
        <h2 className='section-sub-heading text-uppercase tx-blue'>
          Laboratories in Department of Civil ENGINEERING
        </h2>
        <div dir='auto' className='mx-3'>
          {lab.map((lab, index) => (
            <div className='laboratory description'>
              <h4 className='laboratory font-weight-bold' dir='auto'>
                {`${lab.id}`}.{`${lab.lab}`}
              </h4>
              <p>
                <strong>{`${lab.description.substring(0, 24)}`}</strong>{' '}
                {`${lab.description.substring(24)}`}
              </p>
              <div className='civil-labs'>
                <div className='civil-lab-image'>
                  {lab.images.map((image, index) => (
                    <img src={image} alt={`${lab.alt[index]}`} />
                  ))}
                </div>
                <div className='civil-lab-label'>
                  <p>
                    <strong>{`${lab.lab}`}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
