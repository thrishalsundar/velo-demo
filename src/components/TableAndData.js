//code starts at 355
import Physician from './Physician';
import './TableAndData.css'
import WBar from './WBar';
import viewIcon from '../assets/showIconEye.png'
import editIcon from '../assets/editPencil.png'
import ProgBar from './ProgBar';

const datas=[
    {
        name:"Vinoth Kumar",
        hr:"tbf",
        id:43521,
        physician:"tbf",
        location:"6,Viveka St,Dubai Kuruku Santhu",
        eventId:"ET7979",
        kitId:"TI8345",
        device:"AI Patch",
        deviceid:"TI8345",
        servicetype:"MCT",
        startDate:"01/11/2020 00:05:02:32:08",
        endData:"01/11/2020 00:05:02:32:08",
        dos:"tbf",
        servStat:"Patient Enrollment",
        reportType:"Normal",
        action:"tbf"

    },
    {
        name:"Vinoth Kumar",
        hr:"tbf",
        id:43521,
        physician:"tbf",
        location:"6,Viveka St,Dubai",
        eventId:"ET7979",
        kitId:"TI8345",
        device:"AI Patch",
        deviceid:"TI8345",
        servicetype:"MCT",
        startDate:"01/11/2020 00:05:02:32:08",
        endData:"01/11/2020 00:05:02:32:08",
        dos:"tbf",
        servStat:"Patient Enrollment",
        reportType:"Normal",
        action:"tbf"

    },
    {
        name:"Vinoth Kumar",
        hr:"tbf",
        id:43521,
        physician:"tbf",
        location:"6,Viveka St,Dubai",
        eventId:"ET7979",
        kitId:"TI8345",
        device:"AI Patch",
        deviceid:"TI8345",
        servicetype:"MCT",
        startDate:"01/11/2020 00:05:02:32:08",
        endData:"01/11/2020 00:05:02:32:08",
        dos:"tbf",
        servStat:"Patient Enrollment",
        reportType:"Normal",
        action:"tbf"
},
    {
        name:"Vinoth Kumar",
        hr:"tbf",
        id:43521,
        physician:"tbf",
        location:"6,Viveka St,Dubai Kuruku Santhu",
        eventId:"ET7979",
        kitId:"TI8345",
        device:"AI Patch",
        deviceid:"TI8345",
        servicetype:"MCT",
        startDate:"01/11/2020 00:05:02:32:08",
        endData:"01/11/2020 00:05:02:32:08",
        dos:"tbf",
        servStat:"Patient Enrollment",
        reportType:"Normal",
        action:"tbf"

    },
    {
        name:"Vinoth Kumar",
        hr:"tbf",
        id:43521,
        physician:"tbf",
        location:"6,Viveka St,Dubai",
        eventId:"ET7979",
        kitId:"TI8345",
        device:"AI Patch",
        deviceid:"TI8345",
        servicetype:"MCT",
        startDate:"01/11/2020 00:05:02:32:08",
        endData:"01/11/2020 00:05:02:32:08",
        dos:"tbf",
        servStat:"Patient Enrollment",
        reportType:"Normal",
        action:"tbf"

    },
    {
        name:"Vinoth Kumar",
        hr:"tbf",
        id:43521,
        physician:"tbf",
        location:"6,Viveka St,Dubai",
        eventId:"ET7979",
        kitId:"TI8345",
        device:"AI Patch",
        deviceid:"TI8345",
        servicetype:"MCT",
        startDate:"01/11/2020 00:05:02:32:08",
        endData:"01/11/2020 00:05:02:32:08",
        dos:"tbf",
        servStat:"Patient Enrollment",
        reportType:"Normal",
        action:"tbf"

    },
    {
        name:"Vinoth Kumar",
        hr:"tbf",
        id:43521,
        physician:"tbf",
        location:"6,Viveka St,Dubai Kuruku Santhu",
        eventId:"ET7979",
        kitId:"TI8345",
        device:"AI Patch",
        deviceid:"TI8345",
        servicetype:"MCT",
        startDate:"01/11/2020 00:05:02:32:08",
        endData:"01/11/2020 00:05:02:32:08",
        dos:"tbf",
        servStat:"Patient Enrollment",
        reportType:"Normal",
        action:"tbf"

    },
    {
        name:"Vinoth Kumar",
        hr:"tbf",
        id:43521,
        physician:"tbf",
        location:"6,Viveka St,Dubai",
        eventId:"ET7979",
        kitId:"TI8345",
        device:"AI Patch",
        deviceid:"TI8345",
        servicetype:"MCT",
        startDate:"01/11/2020 00:05:02:32:08",
        endData:"01/11/2020 00:05:02:32:08",
        dos:"tbf",
        servStat:"Patient Enrollment",
        reportType:"Normal",
        action:"tbf"

    },
    {
        name:"Vinoth Kumar",
        hr:"tbf",
        id:43521,
        physician:"tbf",
        location:"6,Viveka St,Dubai",
        eventId:"ET7979",
        kitId:"TI8345",
        device:"AI Patch",
        deviceid:"TI8345",
        servicetype:"MCT",
        startDate:"01/11/2020 00:05:02:32:08",
        endData:"01/11/2020 00:05:02:32:08",
        dos:"tbf",
        servStat:"Patient Enrollment",
        reportType:"Normal",
        action:"tbf"

    },
    {
        name:"Vinoth Kumar",
        hr:"tbf",
        id:43521,
        physician:"tbf",
        location:"6,Viveka St,Dubai Kuruku Santhu",
        eventId:"ET7979",
        kitId:"TI8345",
        device:"AI Patch",
        deviceid:"TI8345",
        servicetype:"MCT",
        startDate:"01/11/2020 00:05:02:32:08",
        endData:"01/11/2020 00:05:02:32:08",
        dos:"tbf",
        servStat:"Patient Enrollment",
        reportType:"Normal",
        action:"tbf"

    },
    {
        name:"Vinoth Kumar",
        hr:"tbf",
        id:43521,
        physician:"tbf",
        location:"6,Viveka St,Dubai",
        eventId:"ET7979",
        kitId:"TI8345",
        device:"AI Patch",
        deviceid:"TI8345",
        servicetype:"MCT",
        startDate:"01/11/2020 00:05:02:32:08",
        endData:"01/11/2020 00:05:02:32:08",
        dos:"tbf",
        servStat:"Patient Enrollment",
        reportType:"Normal",
        action:"tbf"

    },
    {
        name:"Vinoth Kumar",
        hr:"tbf",
        id:43521,
        physician:"tbf",
        location:"6,Viveka St,Dubai",
        eventId:"ET7979",
        kitId:"TI8345",
        device:"AI Patch",
        deviceid:"TI8345",
        servicetype:"MCT",
        startDate:"01/11/2020 00:05:02:32:08",
        endData:"01/11/2020 00:05:02:32:08",
        dos:"tbf",
        servStat:"Patient Enrollment",
        reportType:"Normal",
        action:"tbf"

    },
    {
        name:"Vinoth Kumar",
        hr:"tbf",
        id:43521,
        physician:"tbf",
        location:"6,Viveka St,Dubai Kuruku Santhu",
        eventId:"ET7979",
        kitId:"TI8345",
        device:"AI Patch",
        deviceid:"TI8345",
        servicetype:"MCT",
        startDate:"01/11/2020 00:05:02:32:08",
        endData:"01/11/2020 00:05:02:32:08",
        dos:"tbf",
        servStat:"Patient Enrollment",
        reportType:"Normal",
        action:"tbf"

    },
    {
        name:"Vinoth Kumar",
        hr:"tbf",
        id:43521,
        physician:"tbf",
        location:"6,Viveka St,Dubai",
        eventId:"ET7979",
        kitId:"TI8345",
        device:"AI Patch",
        deviceid:"TI8345",
        servicetype:"MCT",
        startDate:"01/11/2020 00:05:02:32:08",
        endData:"01/11/2020 00:05:02:32:08",
        dos:"tbf",
        servStat:"Patient Enrollment",
        reportType:"Normal",
        action:"tbf"

    },
    {
        name:"Vinoth Kumar",
        hr:"tbf",
        id:43521,
        physician:"tbf",
        location:"6,Viveka St,Dubai",
        eventId:"ET7979",
        kitId:"TI8345",
        device:"AI Patch",
        deviceid:"TI8345",
        servicetype:"MCT",
        startDate:"01/11/2020 00:05:02:32:08",
        endData:"01/11/2020 00:05:02:32:08",
        dos:"tbf",
        servStat:"Patient Enrollment",
        reportType:"Normal",
        action:"tbf"

    },
    {
        name:"Vinoth Kumar",
        hr:"tbf",
        id:43521,
        physician:"tbf",
        location:"6,Viveka St,Dubai Kuruku Santhu",
        eventId:"ET7979",
        kitId:"TI8345",
        device:"AI Patch",
        deviceid:"TI8345",
        servicetype:"MCT",
        startDate:"01/11/2020 00:05:02:32:08",
        endData:"01/11/2020 00:05:02:32:08",
        dos:"tbf",
        servStat:"Patient Enrollment",
        reportType:"Normal",
        action:"tbf"

    },
    {
        name:"Vinoth Kumar",
        hr:"tbf",
        id:43521,
        physician:"tbf",
        location:"6,Viveka St,Dubai",
        eventId:"ET7979",
        kitId:"TI8345",
        device:"AI Patch",
        deviceid:"TI8345",
        servicetype:"MCT",
        startDate:"01/11/2020 00:05:02:32:08",
        endData:"01/11/2020 00:05:02:32:08",
        dos:"tbf",
        servStat:"Patient Enrollment",
        reportType:"Normal",
        action:"tbf"

    },
    {
        name:"Vinoth Kumar",
        hr:"tbf",
        id:43521,
        physician:"tbf",
        location:"6,Viveka St,Dubai",
        eventId:"ET7979",
        kitId:"TI8345",
        device:"AI Patch",
        deviceid:"TI8345",
        servicetype:"MCT",
        startDate:"01/11/2020 00:05:02:32:08",
        endData:"01/11/2020 00:05:02:32:08",
        dos:"tbf",
        servStat:"Patient Enrollment",
        reportType:"Normal",
        action:"tbf"

    },
    {
        name:"Vinoth Kumar",
        hr:"tbf",
        id:43521,
        physician:"tbf",
        location:"6,Viveka St,Dubai Kuruku Santhu",
        eventId:"ET7979",
        kitId:"TI8345",
        device:"AI Patch",
        deviceid:"TI8345",
        servicetype:"MCT",
        startDate:"01/11/2020 00:05:02:32:08",
        endData:"01/11/2020 00:05:02:32:08",
        dos:"tbf",
        servStat:"Patient Enrollment",
        reportType:"Normal",
        action:"tbf"

    },
    {
        name:"Vinoth Kumar",
        hr:"tbf",
        id:43521,
        physician:"tbf",
        location:"6,Viveka St,Dubai",
        eventId:"ET7979",
        kitId:"TI8345",
        device:"AI Patch",
        deviceid:"TI8345",
        servicetype:"MCT",
        startDate:"01/11/2020 00:05:02:32:08",
        endData:"01/11/2020 00:05:02:32:08",
        dos:"tbf",
        servStat:"Patient Enrollment",
        reportType:"Normal",
        action:"tbf"

    },
    {
        name:"Vinoth Kumar",
        hr:"tbf",
        id:43521,
        physician:"tbf",
        location:"6,Viveka St,Dubai",
        eventId:"ET7979",
        kitId:"TI8345",
        device:"AI Patch",
        deviceid:"TI8345",
        servicetype:"MCT",
        startDate:"01/11/2020 00:05:02:32:08",
        endData:"01/11/2020 00:05:02:32:08",
        dos:"tbf",
        servStat:"Patient Enrollment",
        reportType:"Normal",
        action:"tbf"

    },
    {
        name:"Vinoth Kumar",
        hr:"tbf",
        id:43521,
        physician:"tbf",
        location:"6,Viveka St,Dubai Kuruku Santhu",
        eventId:"ET7979",
        kitId:"TI8345",
        device:"AI Patch",
        deviceid:"TI8345",
        servicetype:"MCT",
        startDate:"01/11/2020 00:05:02:32:08",
        endData:"01/11/2020 00:05:02:32:08",
        dos:"tbf",
        servStat:"Patient Enrollment",
        reportType:"Normal",
        action:"tbf"

    },
    {
        name:"Vinoth Kumar",
        hr:"tbf",
        id:43521,
        physician:"tbf",
        location:"6,Viveka St,Dubai",
        eventId:"ET7979",
        kitId:"TI8345",
        device:"AI Patch",
        deviceid:"TI8345",
        servicetype:"MCT",
        startDate:"01/11/2020 00:05:02:32:08",
        endData:"01/11/2020 00:05:02:32:08",
        dos:"tbf",
        servStat:"Patient Enrollment",
        reportType:"Normal",
        action:"tbf"

    },
    {
        name:"Vinoth Kumar",
        hr:"tbf",
        id:43521,
        physician:"tbf",
        location:"6,Viveka St,Dubai",
        eventId:"ET7979",
        kitId:"TI8345",
        device:"AI Patch",
        deviceid:"TI8345",
        servicetype:"MCT",
        startDate:"01/11/2020 00:05:02:32:08",
        endData:"01/11/2020 00:05:02:32:08",
        dos:"tbf",
        servStat:"Patient Enrollment",
        reportType:"Normal",
        action:"tbf"

    },
]


function TableAndData(){

    return (
        <div className='table'>
            <table>
                <tr className='spl'>
                    <th><p id="hedms">Patient</p></th>
                    <th><p id="hedms">HR</p></th>
                    <th><p id="hedms">Patient ID</p></th>
                    <th><p id="hedms">Physician</p></th>
                    <th><p id="hedms">Location</p></th>
                    <th><p id="hedms">Event ID</p></th>
                    <th><p id="hedms">Kit ID</p></th>
                    <th><p id="hedms">Device</p></th>
                    <th><p id="hedms">Device ID</p></th>
                    <th><p id="hedms">Service Type</p></th>
                    <th><p id="hedms">Start Date</p></th>
                    <th><p id="hedms">End Date</p></th>
                    <th><p id="hedms">Duration of Service</p></th>
                    <th><p id="hedms">Service Type</p></th>
                    <th><p id="hedms">Report Type</p></th>
                    <th><p id="hedms">Action</p></th>
                </tr>
                {
                    datas.map((data)=>{
                        return (<tr>
                                    <td>{data.name}</td>
                                    <td><WBar /></td>
                                    <td>{data.id}</td>
                                    <td>  <Physician />  </td>
                                    <td>{data.location}</td>
                                    <td>{data.eventId}</td>
                                    <td>{data.kitId}</td>
                                    <td>{data.device}</td>
                                    <td>{data.deviceid}</td>
                                    <td>{data.servicetype}</td>
                                    <td>{data.startDate}</td>
                                    <td>{data.endData}</td>
                                    <td><ProgBar data={{days:8}}/></td>
                                    <td>{data.servStat}</td>
                                    <td>{data.reportType}</td>
                                    <td><div className='actionBar'>
                                            <img className='actIcons' src={viewIcon} alt="+"/>
                                            <img className='actIcons' src={editIcon} alt="+"/>
                                        </div></td>
                        </tr>)
                    })
                }
            </table>
        </div>
    );
}

export default TableAndData;