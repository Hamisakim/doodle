/* eslint-disable no-unused-vars */
import '../../styles/componentStyles/navbar.scss'
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { getPayloadFromToken, userIsAuthenticated } from '../../helpers/authHelp'

const NavBar = () => {
  
  const [userId, setUserId] = useState(null)

  const location = useLocation()
  useEffect(() => {

  }, [location.pathname])

  const history = useHistory()
  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  useEffect(() => {
    const payload = getPayloadFromToken()
    const userId = payload.sub
    setUserId(userId)
  }, [getPayloadFromToken()])


  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
        Home
          </a>

          <a className="navbar-item">
        Documentation
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
          More
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item">
            About
              </a>
              <a className="navbar-item">
            Jobs
              </a>
              <a className="navbar-item">
            Contact
              </a>
              <hr className="navbar-divider"/>
              <a className="navbar-item">
            Report an issue
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">
            Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>




















  )






























  // return (
  //   <nav className="navbar custom-nav">
  //     <div className="container">
  //       <div className="navbar-brand">
  //         <Link to="/">
  //           <svg  viewBox="0 0 601 547" version="1.1" className="second-logo">
  //             <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
  //               <g id="Artboard" transform="translate(-119.000000, -702.000000)" fill="#000000" fillRule="nonzero">
  //                 <g id="brand-logo-2" className="second-logo-color" transform="translate(119.000000, 702.000000)">
  //                   <path fill="#000" d="M534.531302,12.6222233 L12.6212632,12.6222233 L12.6212632,534.363906 L534.531302,534.363906 L534.531302,343.185769 C534.531302,342.298053 534.531302,341.396465 534.531302,340.508748 C534.445937,337.074059 537.157992,334.219047 540.592282,334.128284 C544.032931,334.081403 546.87405,336.805379 546.972261,340.245207 C546.972261,341.03583 546.972261,341.840324 546.972261,342.630946 L546.972261,538.206055 C546.972261,545.141343 545.141484,547 538.192855,547 L8.59910241,547 C1.77529856,547 0,545.224566 0,538.386373 L0,8.43330967 C0,1.81704534 1.83077664,0 8.47427673,0 L538.387028,0 C545.155354,0 547,1.85865706 547,8.65523887 L547,304.403641 C547,305.194264 547,305.984887 547,306.77551 C546.975225,309.005475 545.762749,311.05283 543.819301,312.146355 C541.875854,313.23988 539.496689,313.213443 537.578017,312.077002 C535.659345,310.940562 534.492656,308.86677 534.517432,306.636804 C534.517432,305.638123 534.517432,304.653312 534.517432,303.65463 L534.517432,12.6222233 L534.531302,12.6222233 Z" id="Path"></path>
  //                   <path d="M540.231115,329.482339 C502.281687,328.191651 464.42928,330.223798 426.687756,333.86244 C396.666404,336.773354 366.686633,340.164843 336.762302,343.817216 C288.902778,349.652775 241.888731,359.854704 194.943985,370.550939 C174.444641,375.233117 153.668091,378.69326 133.016284,382.730093 C129.620517,383.389168 126.252471,384.171819 122.856704,384.858355 C119.946046,385.448777 117.686822,384.158088 117.10469,381.645366 C116.578,379.366065 118.074909,377.333918 120.777663,376.42769 C148.775415,366.994681 177.798827,362.024159 206.780659,356.861406 C227.210702,353.209033 247.599164,349.309507 268.098508,346.055325 C289.581932,342.631797 311.116177,339.583576 332.701242,336.910661 C357.247786,333.889902 381.835911,331.294795 406.437897,328.850726 C421.989123,327.312884 437.595791,326.269349 453.202459,325.184622 C488.643178,322.69936 524.125478,320.598559 559.677079,321.065404 C572.151325,321.243904 584.625571,322.163862 597.030515,322.795476 C598.112514,322.766575 599.177227,323.068621 600.079776,323.660511 C600.803683,324.381132 601.129282,325.405118 600.952973,326.406656 C600.342233,327.453195 599.298284,328.181146 598.097757,328.397612 C589.102439,328.864456 580.079401,329.248917 571.111804,329.386224 C560.813621,329.605915 550.529298,329.482339 540.231115,329.482339 Z" id="Path"></path>
  //                   <path d="M27.7461875,258.570138 L27.7461875,240.425722 C27.7461875,240.216364 27.7461875,240.020962 27.7461875,239.825561 C27.4421852,232.94464 28.2712825,231.688488 34.8487874,230.055491 C40.4341337,228.806762 46.2063048,228.664561 51.8452812,229.636774 C60.2508372,230.682755 68.4454027,233.036842 76.1378308,236.615395 C82.2455139,239.518502 88.7677457,242.477437 93.6041464,247.027498 C108.486442,261.068485 113.599209,281.055256 100.416562,300.204594 C95.0299988,308.068729 88.6678234,315.203165 81.4855081,321.43356 C71.8127068,329.807906 60.8824413,334.637112 48.2248898,335 C44.3209071,334.905985 40.4556004,334.194851 36.7695294,332.892456 C33.53605,331.915449 32.237131,328.900685 31.9331287,325.63469 C31.2007594,317.818634 30.4545719,309.988621 29.8880221,302.14465 C28.8516505,287.643075 27.9534618,273.1415 27,258.625967 L27.7461875,258.570138 Z M40.500467,242.449523 C41.6750215,257.272115 42.7666662,271.257272 43.9135841,285.242429 C44.6597716,294.370466 45.2954128,303.51246 46.3317844,312.598625 C47.1056085,319.005 45.7237797,319.130615 53.1442002,317.88842 C55.7804657,317.595468 58.3418268,316.819806 60.7028035,315.599432 C66.7828501,311.942635 72.5727126,307.797334 78.5283946,303.945135 C83.8622536,300.497696 86.8193671,295.054371 89.3619321,289.666875 C94.1706962,279.561831 89.168476,264.655496 81.1676875,258.290993 C74.078906,252.708096 65.8708431,249.162956 57.6765985,245.841133 C52.3703761,243.663803 46.2765112,243.510273 40.500467,242.449523 Z" id="Shape"></path>
  //                   <path d="M482.878079,237.00567 C500.034936,242.838133 506.174131,256.159533 509.079286,271.624608 C510.449642,278.821227 511.052598,286.170965 511.929626,293.451103 C512.05986,294.843792 512.009179,296.247831 511.778887,297.627091 C511.217041,301.44116 508.832622,303.793633 505.502657,303.974592 C502.016844,304.274754 498.858715,301.885182 498.143845,298.406609 C496.992746,293.799102 496.225347,289.094156 495.170172,284.48665 C493.525745,277.234351 492.223907,269.870693 489.96282,262.827194 C487.38655,254.809297 482.206605,249.422273 473.06633,249.366594 C468.40712,249.366594 463.747909,248.851555 459.266845,248.587076 C460.17128,259.458564 461.17164,270.121252 461.925336,280.797861 C462.267925,285.642006 462.185704,290.541832 462.226814,295.385978 C462.178377,296.28359 462.021906,297.171798 461.760893,298.03077 C461.283998,300.793616 459.031548,302.881434 456.279469,303.111555 C453.551646,303.638567 450.839044,302.126578 449.811389,299.506286 C448.613856,296.807989 447.828296,293.940008 447.481784,291.001191 C446.632163,281.716578 446.248463,272.376286 445.481064,263.063833 C444.343669,249.505793 443.00072,235.975593 441.80851,222.417553 C441.273487,218.01648 441.003481,213.586332 441,209.151832 C441.205553,203.04097 445.261807,199.324341 450.400642,197.361627 C455.183869,195.647602 460.116418,194.398488 465.131969,193.631078 C468.584858,192.943761 472.123193,192.816906 475.615192,193.255239 C486.112119,194.897794 491.19614,200.215219 493.42982,211.351186 C495.320912,220.677558 492.059464,228.319616 485.76953,234.903756 C485.450183,235.279264 485.101927,235.628365 484.72806,235.947753 C484.128971,236.331199 483.511555,236.684271 482.878079,237.00567 Z M457.718343,233.386481 C458.828331,233.247281 460.267205,233.122001 461.678672,232.857522 C468.283788,231.576886 474.68335,230.07353 478.122944,223.113551 C479.794778,219.786681 479.986628,212.075024 477.698133,209.193592 C477.09808,208.427454 476.228305,207.928296 475.272603,207.801596 C469.654144,207.801596 464.021981,207.801596 458.417225,208.274875 C456.433969,208.62899 454.504064,209.241902 452.675433,210.098389 C454.456896,218.185886 456.060212,225.702663 457.718343,233.386481 L457.718343,233.386481 Z" id="Shape"></path>
  //                   <path d="M310.982858,258.961948 C311.313538,272.760629 306.849365,282.799831 298.499707,291.418785 C288.469096,301.806087 276.247732,307.821254 262.359193,310.731369 C261.299826,310.955845 260.215417,311.03546 259.135068,310.968077 C256.458464,310.658926 253.747538,310.910134 251.171203,311.706049 C247.533729,312.903513 243.813584,310.313649 242.628649,306.27569 C239.446077,295.517249 237.526889,284.417812 236.91065,273.206197 C235.992096,257.425667 235.032206,241.645137 234.030982,225.864606 C233.686525,220.657032 236.221734,217.732992 241.264597,215.853253 C254.092206,211.077322 266.974928,213.305161 279.733645,215.296293 C292.836821,217.34312 300.869577,226.519034 306.31201,238.020256 C309.477389,244.532322 311.077693,251.707264 310.982858,258.961948 Z M249.145791,225.94815 C250.05516,238.159496 251.060977,250.12021 251.777449,262.080923 C252.397473,272.384681 252.466365,282.730211 255.153136,292.811185 C256.131396,296.514968 256.393184,296.988384 260.127106,296.194716 C262.965439,295.554212 265.638432,293.966877 268.394094,293.256753 C276.838226,291.103513 284.491046,286.540609 290.439394,280.112499 C292.061337,278.45347 293.307166,276.458072 294.090647,274.264421 C297.549004,263.710031 296.184951,253.267033 291.610551,243.520235 C287.973076,235.694948 282.751096,228.73295 273.395622,227.68865 C265.211304,226.71397 256.971873,226.449414 249.145791,225.94815 Z" id="Shape"></path>
  //                   <path d="M232,263.121699 C231.04178,271.857064 230.514064,279.050069 229.416971,286.144925 C227.569967,298.147288 220.306935,306.854611 210.710844,313.094157 C206.091735,316.1595 200.310373,316.842988 195.114847,314.937959 C189.919322,313.032929 185.919601,308.763037 184.325068,303.419355 C181.915772,295.913762 180.022604,288.249171 178.659069,280.480258 C176.910099,271.7658 175.717965,262.946804 175.090046,254.077862 C174.548443,244.192737 176.395447,234.545978 182.116995,226.034956 C187.310827,218.379242 194.934927,216.556453 203.531136,217.20144 C204.395169,217.372403 205.278749,217.419605 206.155826,217.341655 C211.516305,216.177874 216.529602,217.97262 219.126518,222.950236 C222.849786,229.653576 226.008672,236.660905 228.569849,243.898287 C230.639049,250.572498 231.083441,257.681375 232,263.121699 Z M215.335299,266.655105 C216.099098,251.483893 211.474643,241.949305 207.530664,232.274502 C206.665321,230.899544 205.23128,229.992675 203.628346,229.806726 C197.629054,229.386083 194.823829,231.643537 192.990712,237.953191 C191.051602,244.305623 190.609342,251.027638 191.699198,257.583225 C193.448991,267.510414 195.573741,277.381516 197.642941,287.252619 C198.337304,290.575704 199.309411,293.842702 200.239857,297.067636 C200.892558,299.311069 202.586803,300.110292 204.26716,298.581953 C206.815357,296.438758 209.017415,293.907938 210.794168,291.080476 C215.779691,282.190875 214.668711,272.067386 215.321412,266.655105 L215.335299,266.655105 Z" id="Shape"></path>
  //                   <path d="M169.960263,264.481901 C170.164646,277.251862 169.660502,288.364116 166.553887,299.125161 C165.323412,303.913039 162.496471,308.101017 158.569339,310.953881 C155.396049,313.25173 152.067482,315.312727 148.609093,317.121112 C140.433789,321.237282 132.040477,318.455706 126.644776,310.096931 C123.471529,305.247428 121.591859,299.622371 121.194573,293.786783 C120.472421,282.000208 119.600388,270.143391 120.199911,258.39896 C120.622301,250.124475 123.034016,241.878087 125.186846,233.800279 C126.781031,227.899967 133.920797,223.488782 139.970522,223.50283 C141.080746,223.539508 142.177865,223.246965 143.13164,222.659929 C145.592758,220.722875 148.928441,220.458744 151.647582,221.985607 C152.548445,222.374261 153.374484,222.926184 154.086547,223.615217 C161.81221,232.044234 168.434207,241.063282 169.360741,253.187018 C169.687753,257.527962 169.851259,261.840809 169.960263,264.481901 Z M144.848453,235.120825 C140.18853,235.76705 137.613309,238.281707 137.381675,243.339117 C137.083167,246.331106 136.628322,249.304314 136.019125,252.245778 C134.097928,264.762868 134.969961,277.279958 136.577771,289.712758 C137.176787,293.225007 138.470829,296.572465 140.379287,299.546611 C142.681998,303.311572 145.270844,303.297524 147.559929,299.616853 C149.583854,296.675104 150.977279,293.322877 151.647582,289.783 C152.846626,280.075582 153.664157,270.283874 154.004794,260.492166 C154.284302,251.126557 150.997828,242.020054 144.848453,235.120825 Z" id="Shape"></path>
  //                   <path d="M384.072926,216.841019 C385.627717,228.396236 387.127471,239.5588 388.668503,251.057924 C392.300936,250.188478 396.043442,249.445242 399.675875,248.365446 C402.785457,247.45393 405.523541,247.636233 407.80757,250.090314 C409.614438,251.932983 410.127852,254.71633 409.100936,257.101975 C408.073441,260.034521 405.271415,261.925068 402.221329,261.743695 C398.313712,261.813811 394.392336,261.743695 390.636071,261.743695 C392.011992,271.700253 393.387914,281.376345 394.763835,291.557277 C396.621329,291.459114 398.891599,291.374974 401.051796,291.220717 L424.841477,289.551942 C425.81528,289.439733 426.798388,289.439733 427.77219,289.551942 C431.555974,290.140921 434.170225,293.043749 433.991355,296.353253 C433.812485,299.662757 430.868013,302.481445 426.90536,302.551561 C417.480298,302.747888 408.055236,303.070424 398.630174,302.986284 C394.021452,302.78424 389.427676,302.316045 384.87096,301.583952 C382.723805,301.435977 381.029061,299.666426 380.935825,297.475119 C378.596758,283.227424 375.982508,269.007776 373.781033,254.732034 C373.051795,250.020198 373.395775,245.140082 373.051795,240.358129 C372.43263,231.481367 371.510763,222.63265 371.02919,213.713818 C370.740247,208.413002 372.570222,206.491807 377.68865,205.678454 C383.783982,204.696822 389.893073,203.12621 396.015924,203 C402.863158,203.096214 409.695331,203.681957 416.462116,204.752915 C417.521564,204.817159 418.506748,205.328731 419.180522,206.164491 C419.854296,207.000251 420.155632,208.084497 420.011993,209.156238 C419.819364,211.694459 418.016907,212.423672 415.884229,212.690115 C405.977595,213.961563 396.066374,215.218988 386.150567,216.462389 L384.072926,216.841019 Z" id="Path"></path>
  //                   <path d="M340.800518,293.407536 L363.572906,293.407536 C364.460979,293.394053 365.348366,293.46356 366.22344,293.615146 C369.318043,294.168774 371.08044,296.078791 370.997177,298.722365 C370.812217,301.392725 368.738241,303.548658 366.070792,303.843425 C364.10071,304.02574 362.119074,304.048883 360.145252,303.912628 C351.555302,303.525089 342.951474,303.248275 334.389278,302.528558 C328.685773,302.071815 326.201765,299.843462 325.230365,294.154934 C322.676971,279.27618 320.414997,264.355904 318.042006,249.449468 C317.13689,245.000651 316.48363,240.504535 316.085329,235.982466 C315.821663,229.892557 316.237978,223.774967 316.404503,217.657377 C316.448612,217.066262 316.60397,216.488724 316.862449,215.954971 C317.930989,213.57437 319.055037,211 322.121885,211 C325.410768,211 326.285028,213.76814 326.812359,216.300989 C330.295522,233.726432 333.75093,251.151875 336.998181,268.604999 C338.483035,276.618765 339.468312,284.60485 340.800518,293.407536 Z" id="Path"></path>
  //                 </g>
  //               </g>
  //             </g>
  //           </svg>
  //         </Link>
  //         <a role="button" className="navbar-burger is-active" aria-label="menu" aria-expanded="false">
  //           <span aria-hidden="true"></span>
  //           <span aria-hidden="true"></span>
  //           <span aria-hidden="true"></span>
  //         </a>
  //       </div>
  //       <div className="navbar-start">
  //         { userIsAuthenticated() &&
  //       <>
  //         <Link to={`/profile/${userId}`} className="navbar-item">Profile</Link>
  //         <Link to="/doodle-new" className="navbar-item">Doodle</Link>
  //       </>
  //         }
  //         {/* <Link to="/doodle-new" className="navbar-item">Doodle</Link> */}
  //         <Link to="/gallery" className="navbar-item">Gallery</Link>
  //       </div>
  //       <div className="navbar-end">
  //         { !userIsAuthenticated() &&
  //       <>
  //         <Link to="/join" className="navbar-item">
  //           Sign Up
  //         </Link>

  //         <Link to="/login" className="navbar-item">
  //           Login
  //         </Link>
  //       </>
  //         }
  //         { userIsAuthenticated() &&
  //       <>
  //         <div className="navbar-item" onClick={handleLogout}>
  //           Logout
  //         </div>
  //       </>
  //         }
  //       </div>
  //     </div>
  //   </nav>
  // )
  

}

export default NavBar
