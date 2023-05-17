// // Example usage:
// //
// // import { MyShape } from ./myShape.js;
// //
// // class MyComponent extends React.Component {
// //   //
// // }
// //
// // MyComponent.propTypes = {
// //   input: MyShape
// // };

// import PropTypes from "prop-types";

// let _User;
// const _Education = PropTypes.oneOfType(['bachelor', 'doctor', 'master']);
// const _Gender = PropTypes.oneOfType(['female', 'male']);
// _User = PropTypes.shape({
//     "address": PropTypes.string,
//     "age": PropTypes.number,
//     "birthDate": PropTypes.string,
//     "bloodType": PropTypes.string,
//     "censusRegister": PropTypes.string,
//     "createdProId": PropTypes.arrayOf(PropTypes.number),
//     "department": PropTypes.string,
//     "education": _Education,
//     "email": PropTypes.string,
//     "entryTime": PropTypes.string,
//     "gender": _Gender,
//     "jobTitle": PropTypes.string,
//     "joinedProId": PropTypes.arrayOf(PropTypes.number),
//     "limitation": PropTypes.string,
//     "major": PropTypes.string,
//     "managedProId": PropTypes.arrayOf(PropTypes.number),
//     "marriage": PropTypes.string,
//     "name": PropTypes.string,
//     "nationality": PropTypes.string,
//     "phoneNumber": PropTypes.string,
//     "photoUrl": PropTypes.string,
//     "politicalStatus": PropTypes.string,
//     "post": PropTypes.string,
//     "previousCompany": PropTypes.string,
//     "priv": PropTypes.number,
//     "projectTeam": PropTypes.string,
//     "qqNumber": PropTypes.string,
//     "school": PropTypes.string,
//     "seniority ": PropTypes.number,
//     "userId": PropTypes.string,
//     "wechatNumber": PropTypes.string,
// });

// export const User = _User;

// let _TableItem;
// _TableItem = PropTypes.shape({
//     "beginTime": PropTypes.string,
//     "description": PropTypes.string,
//     "endTime": PropTypes.string,
//     "finishTime": PropTypes.string,
//     "isFinish": PropTypes.bool,
//     "ownerId": PropTypes.string,
//     "ownerName": PropTypes.string,
//     "tableItemId": PropTypes.number,
// });

// export const TableItem = _TableItem;

// let _Project;
// let _Member;
// _Member = PropTypes.shape({
//     "name": PropTypes.string,
//     "photoUrl": PropTypes.string,
//     "userId": PropTypes.string,
// });
// _Project = PropTypes.shape({
//     "budget": PropTypes.number,
//     "department": PropTypes.string,
//     "introduction": PropTypes.string,
//     "leaderId": PropTypes.string,
//     "leaderName": PropTypes.string,
//     "members": PropTypes.arrayOf(_Member),
//     "process": PropTypes.number,
//     "projectId": PropTypes.number,
//     "projectName": PropTypes.string,
//     "projectUrl": PropTypes.string,
//     "table": PropTypes.arrayOf(_TableItem),
// });

// export const Project = _Project;

// let _BaseResponse;
// _BaseResponse = PropTypes.shape({
//     "code": PropTypes.number,
//     "data": PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
//     "message": PropTypes.string,
// });

// export const BaseResponse = _BaseResponse;