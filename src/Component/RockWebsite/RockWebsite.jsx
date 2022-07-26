import './RockWebsite.css';

const RockWebsite=() => {

    return(
        <>
          <div className='w-100 Part-1'>
            <div className='w-100 py-4 d-flex justify-content-between Bootstrap-bar'>
                <div>
                    <p className='m-0 ps-5 text-white fw-bolder Start-BootStrap'>START BOOTSTRAP</p>
                </div>
                <div className='d-flex flex-row pe-5 gap-3 text-white fw-bold SignUp-LogIn'>
                    <p className='m-0 SignUp'>SIGN UP</p>
                    <p className='m-0 LogIn'>LOG IN</p>
                </div>
            </div>

            <div className='d-flex flex-column justify-content-center align-items-center CenterText'>
                <p className='m-0 text-white fw-bolder Text-1'>One Page Wonder</p>
                <p className='m-0 text-black fw-bolder Text-2'>Will Rock Your Socks Off</p>
                <button type="button" className='mt-5 p-3 text-black fw-bold btn btn-success'>LEARN MORE</button>
            </div>
          </div>

          <div>
            <div className='mt-5 d-flex flex-row justify-content-center gap-5'>
                <div className='p-5 d-flex flex-column aling-items-start TextPhoto'>
                    <h1 className='pe-3 H-TextPhoto'>For those about to rock...</h1>
                    <p className='pe-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                </div>
                <img className='p-3 ImgEffect' src='https://startbootstrap.github.io/startbootstrap-one-page-wonder/assets/img/01.jpg'></img>
            </div>

            <div className='mt-5 d-flex flex-row-reverse justify-content-center gap-5'>
                <div className='ms-5 py-5 ps-5 d-flex flex-column aling-items-start TextPhoto'>
                    <h1 className='H-TextPhoto'>We salute you!</h1>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                </div>
                <img className='ms-5 me-5 p-3 ImgEffect' src='https://startbootstrap.github.io/startbootstrap-one-page-wonder/assets/img/02.jpg'></img>
            </div>

            <div className='mt-5 d-flex flex-row justify-content-center gap-5'>
                <div className='p-5 d-flex flex-column aling-items-start TextPhoto'>
                    <h1 className='pe-3 H-TextPhoto'>Let there be rock!</h1>
                    <p className='pe-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                </div>
                <img className='p-3 ImgEffect' src='https://startbootstrap.github.io/startbootstrap-one-page-wonder/assets/img/03.jpg'></img>
            </div>

          </div>

          <div className='EndBar'>
            <p className='p-4 text-white fw-bold bg-dark d-flex flex-row justify-content-center'>Copyright © Your Website 2022</p>
          </div>

        </>
    )
}
export default RockWebsite