import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaBars,
  FaUserCircle,
  FaRocket,
  FaUsers,
  FaClipboardList,
  FaHandshake,
  FaProjectDiagram,
  FaBalanceScale,
  FaSignOutAlt,
} from "react-icons/fa";

export default function StartupDashboard({ startupData, onLogout }) {
  return (
    <div className="d-flex" style={{ minHeight: "100vh", background: "#f3faf3" }}>
      {/* ================= SIDEBAR ================= */}
      <div
        style={{
          width: "250px",
          background: "#1f4d3a",
          color: "#fff",
        }}
        className="p-3 d-flex flex-column"
      >
        <h4 className="fw-bold mb-4">Startup</h4>

        <ul className="nav flex-column gap-3">
          <li className="fw-semibold">
            <FaRocket className="me-2" /> Dashboard
          </li>
          <li>
            <FaUsers className="me-2" /> Team
          </li>
          <li>
            <FaHandshake className="me-2" /> Investors
          </li>
          <li>
            <FaClipboardList className="me-2" /> Milestones
          </li>
          <li>
            <FaBalanceScale className="me-2" /> Compliance
          </li>
        </ul>

        {/* ✅ LOGOUT */}
        <div
          className="mt-auto text-danger"
          style={{ cursor: "pointer" }}
          onClick={onLogout}
        >
          <FaSignOutAlt className="me-2" /> Logout
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="flex-grow-1">
        {/* ---------- TOP BAR ---------- */}
        <div
          className="d-flex justify-content-between align-items-center px-4"
          style={{
            height: "60px",
            background: "#1f4d3a",
            color: "#fff",
          }}
        >
          <div className="d-flex align-items-center gap-3">
            <FaBars />
            <h6 className="m-0">
              {startupData?.startupName || "Startup Dashboard"} 
            </h6>
          </div>
          <FaUserCircle size={28} />
        </div>

        {/* ---------- FILTER TABS ---------- */}
        <div className="px-4 mt-4">
          <div className="bg-white rounded-pill shadow-sm d-flex justify-content-around py-2 fw-semibold text-success">
            <span className="border-bottom border-3 border-success px-3">
              TOTAL
            </span>
            <span>TODAY</span>
            <span>THIS WEEK</span>
            <span>THIS MONTH</span>
            <span>6 MONTHS</span>
          </div>
        </div>

        {/* ---------- STATS ---------- */}
        <div className="container-fluid mt-4 px-4">
          <div className="row g-4">
            {[
              {
                title: "Startup Name",
                value: startupData?.startupName || "—",
                sub: startupData?.sector || "Sector",
              },
              {
                title: "Team Members",
                value: startupData?.teamSize || "—",
                sub: startupData?.stage || "Stage",
              },
              {
                title: "Location",
                value: startupData?.city || "—",
                sub: startupData?.state || "State",
              },
            ].map((card, i) => (
              <div className="col-md-4" key={i}>
                <div className="card border-0 shadow-sm rounded-4">
                  <div className="card-body">
                    <h6 className="text-success fw-semibold">{card.title}</h6>
                    <h2 className="fw-bold">{card.value}</h2>
                    <small className="text-muted">{card.sub}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ---------- MAIN CONTENT ---------- */}
          <div className="row g-4 mt-2">
            {/* LEFT PANEL */}
            <div className="col-md-8">
              <div className="card shadow-sm border-0 rounded-4 h-100">
                <div className="card-body">
                  <h6 className="fw-semibold text-success mb-3">
                    Startup Management Overview
                  </h6>

                  <div className="row g-3">
                    {[
                      {
                        icon: <FaRocket />,
                        title: "Fundraising",
                        desc:
                          startupData?.funding === "Yes"
                            ? "Funding required"
                            : "No funding required",
                      },
                      {
                        icon: <FaUsers />,
                        title: "Team Management",
                        desc: `Team size: ${startupData?.teamSize || "—"}`,
                      },
                      {
                        icon: <FaClipboardList />,
                        title: "Milestone Tracking",
                        desc: `Stage: ${startupData?.stage || "—"}`,
                      },
                      {
                        icon: <FaHandshake />,
                        title: "Investor Relations",
                        desc:
                          startupData?.mentorship === "Yes"
                            ? "Mentorship required"
                            : "No mentorship",
                      },
                      {
                        icon: <FaProjectDiagram />,
                        title: "Product Roadmap",
                        desc: `Sector: ${startupData?.sector || "—"}`,
                      },
                      {
                        icon: <FaBalanceScale />,
                        title: "Legal Compliance",
                        desc: `GST / CIN: ${startupData?.gstNumber || "—"}`,
                      },
                    ].map((item, i) => (
                      <div className="col-md-6" key={i}>
                        <div className="border rounded-3 p-3 h-100">
                          <h6 className="fw-semibold text-success">
                            {item.icon} {item.title}
                          </h6>
                          <small className="text-muted">{item.desc}</small>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* ---------- COMPANY DETAILS ---------- */}
                  <div className="mt-4 border rounded-3 p-3">
                    <h6 className="fw-semibold text-success mb-2">
                      Company Details
                    </h6>
                    <p><strong>Founder:</strong> {startupData?.founderDetails}</p>
                    <p><strong>Legal Status:</strong> {startupData?.legalStatus}</p>
                    <p><strong>Year Established:</strong> {startupData?.yearEstablished}</p>
                    <p><strong>Office Address:</strong> {startupData?.officeAddress}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="col-md-4">
              <div className="card shadow-sm border-0 rounded-4 h-100">
                <div className="card-body">
                  <h6 className="fw-semibold text-success mb-3">
                    Startup Requirements
                  </h6>

                  <ul className="list-unstyled">
                    <li>✔ Funding: {startupData?.funding}</li>
                    <li>✔ Mentorship: {startupData?.mentorship}</li>
                    <li>✔ Tech Support: {startupData?.techSupport}</li>
                    <li>✔ Incubation: {startupData?.incubation}</li>
                    <li>✔ Internship: {startupData?.internship}</li>
                    <li>✔ Govt Scheme Check: {startupData?.govtCheck}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
