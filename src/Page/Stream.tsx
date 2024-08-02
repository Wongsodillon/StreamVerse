import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Users from "./scenes/user";
import Staff from "./scenes/staff";
import Company from "./scenes/company";
import Jobs from "./scenes/job";
import JobApplication from "./scenes/application";
import Bar from "./scenes/bar";
import CreateUser from "./scenes/createuser";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Layout from "./Layout";
import EditUser from "../Page/scenes/edituser";
import EditJob from "../Page/scenes/editjob";
import EditCompany from "../Page/scenes/editcompany";
import EditApplication from "../Page/scenes/editapplication";

function Stream() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <Layout isSidebar={isSidebar}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Topbar setIsSidebar={setIsSidebar} />
            <main className="content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="user" element={<Users />} />
                <Route path="staff" element={<Staff />} />
                <Route path="job" element={<Jobs />} />
                <Route path="jobapplication" element={<JobApplication />} />
                <Route path="company" element={<Company />} />
                <Route path="createuser" element={<CreateUser />} />
                <Route path="bar" element={<Bar />} />
                <Route path="pie" element={<Pie />} />
                <Route path="line" element={<Line />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="geography" element={<Geography />} />
                <Route path="edituser/:id" element={<EditUser />} />
                <Route path="editjob/:id" element={<EditJob />} />
                <Route path="editcompany/:id" element={<EditCompany />} />
                <Route path="editapplication/:id" element={<EditApplication />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Layout>
  );
}

export default Stream;
