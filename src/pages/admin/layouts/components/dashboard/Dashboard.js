import React from "react";
import ReactPaginate from "react-paginate";
import FeatherIcon from "feather-icons-react";

const Dashboard = () => {
  return (
    <div className="mtpx9 prpx10 cust-scroll dashboard">
      <div className="grid-cols-4 mtpx5 gap-12">
        <div className="h-dash bg-light-primary rounded-10">
          <div className="p15">
            <div className="flex justify-between items-center ">
              <p className="fsize14 mtpx1 mbpx1 textgray">Porfolio</p>
              <FeatherIcon icon="info" size="15" className="textgray" />
            </div>
            <div className="mtpx12">
              <h2 className="fsize29 mtpx1 mbpx1 textprimary">1000 +</h2>
              <p className="fsize14 mtpx1 mbpx1 textprimary">
                Collection of Porfolio
              </p>
            </div>
          </div>
        </div>
        <div className="h-dash bg-light-secondary rounded-10">
          <div className="p15">
            <div className="flex justify-between items-center ">
              <p className="fsize14 mtpx1 mbpx1 textgray">Enquiry</p>
              <FeatherIcon icon="info" size="15" className="textgray" />
            </div>
            <div className="mtpx12">
              <h2 className="fsize29 mtpx1 mbpx1 textsecondary">10 +</h2>
              <p className="fsize14 mtpx1 mbpx1 textsecondary">
                Connect with us
              </p>
            </div>
          </div>
        </div>
        <div className="h-dash bg-light-warning rounded-10">
          <div className="p15">
            <div className="flex justify-between items-center ">
              <p className="fsize14 mtpx1 mbpx1 textgray">Testimonials</p>
              <FeatherIcon icon="info" size="15" className="textgray" />
            </div>
            <div className="mtpx12">
              <h2 className="fsize29 mtpx1 mbpx1 textwarning">100 +</h2>
              <p className="fsize14 mtpx1 mbpx1 textwarning">
                Reviews of clients
              </p>
            </div>
          </div>
        </div>
        <div className="h-dash bg-light-success rounded-10">
          <div className="p15">
            <div className="flex justify-between items-center ">
              <p className="fsize14 mtpx1 mbpx1 textgray">Services</p>
              <FeatherIcon icon="info" size="15" className="textgray" />
            </div>
            <div className="mtpx12">
              <h2 className="fsize29 mtpx1 mbpx1 textsuccess">6</h2>
              <p className="fsize14 mtpx1 mbpx1 textsuccess">Services</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bgwhite d-shadow mtpx20 rounded-10 ptpx20 plpx15 prpx15 pbpx15">
        <div className=" mbpx15 flex gap-12 items-center">
          <div className="w-60">
            <div className="relative">
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Search"
              />
              <div className="absolute top-0 right-0 mtpx9 mrpx2">
                <FeatherIcon
                  icon="search"
                  className="textgray cursor-pointer"
                  size={20}
                />
              </div>
            </div>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th className="fsize13 textforth w-20 font-300">
                <p>First Name</p>
              </th>
              <th className="fsize13 textforth w-20 font-300">
                <p>Last Name</p>
              </th>
              <th className="fsize13 textforth w-20 font-300">
                <p>Email</p>
              </th>
              <th className="fsize13 textforth w-20 font-300">
                <p>Phone</p>
              </th>
              <th className="fsize13 textforth w-20 font-300">
                <p>Message</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fsize13 textgray w-20 font-300">
                <p>name</p>
              </td>
              <td className="fsize13 textgray w-20 font-300">
                <p>name</p>
              </td>
              <td className="fsize13 textgray w-20 font-300">
                <p>Email</p>
              </td>
              <td className="fsize13 textgray w-20 font-300">
                <p>mobile</p>
              </td>
              <td className="fsize13 textgray w-20 font-300">
                <p>message</p>
              </td>
            </tr>
            <tr>
              <td className="fsize13 textgray w-20 font-300">
                <p>name</p>
              </td>
              <td className="fsize13 textgray w-20 font-300">
                <p>name</p>
              </td>
              <td className="fsize13 textgray w-20 font-300">
                <p>Email</p>
              </td>
              <td className="fsize13 textgray w-20 font-300">
                <p>mobile</p>
              </td>
              <td className="fsize13 textgray w-20 font-300">
                <p>message</p>
              </td>
            </tr>
            <tr>
              <td className="fsize13 textgray w-20 font-300">
                <p>name</p>
              </td>
              <td className="fsize13 textgray w-20 font-300">
                <p>name</p>
              </td>
              <td className="fsize13 textgray w-20 font-300">
                <p>Email</p>
              </td>
              <td className="fsize13 textgray w-20 font-300">
                <p>mobile</p>
              </td>
              <td className="fsize13 textgray w-20 font-300">
                <p>message</p>
              </td>
            </tr>
            <tr>
              <td className="fsize13 textgray w-20 font-300">
                <p>name</p>
              </td>
              <td className="fsize13 textgray w-20 font-300">
                <p>name</p>
              </td>
              <td className="fsize13 textgray w-20 font-300">
                <p>Email</p>
              </td>
              <td className="fsize13 textgray w-20 font-300">
                <p>mobile</p>
              </td>
              <td className="fsize13 textgray w-20 font-300">
                <p>message</p>
              </td>
            </tr>
            <tr>
              <td className="fsize13 textgray w-20 font-300">
                <p>name</p>
              </td>
              <td className="fsize13 textgray w-20 font-300">
                <p>name</p>
              </td>
              <td className="fsize13 textgray w-20 font-300">
                <p>Email</p>
              </td>
              <td className="fsize13 textgray w-20 font-300">
                <p>mobile</p>
              </td>
              <td className="fsize13 textgray w-20 font-300">
                <p>message</p>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex w-full justify-end">
          <ReactPaginate
            className="pagination"
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            pageCount={4}
            pageRangeDisplayed={4}
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
