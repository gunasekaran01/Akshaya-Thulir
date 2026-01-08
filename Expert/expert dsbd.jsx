import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Chip,
  Radio,
  RadioGroup,
  FormControlLabel,
  Divider,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";

/* ================= FILTER SECTION ================= */

function FilterSection({ title, children }) {
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{ mb: 2 }}>
      <Box
        onClick={() => setOpen(!open)}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          cursor: "pointer",
          fontWeight: 600,
        }}
      >
        <Typography variant="subtitle1">{title}</Typography>
        <Typography>{open ? "⮙" : "⮛"}</Typography>
      </Box>

      {open && <Box sx={{ mt: 1 }}>{children}</Box>}
      <Divider sx={{ mt: 2 }} />
    </Box>
  );
}

/* ================= DATA ================= */

const experts = [
  {
    id: 1,
    name: "Dr. Karthikeyan S",
    expertise: "Academic Mentorship",
    category: "College",
    city: "Coimbatore",
    mode: "Offline",
    image: "https://i.pravatar.cc/150?img=12",
    about: "Guides students in academics and research",
    Experience: "5 years",
    session: "100+",
    gender: "Male",
    rate: "₹300 / hr",
    certifications: "PhD, UGC",
    languages: "English, Tamil",
  },
  {
    id: 2,
    name: "Anitha",
    expertise: "Placement Training",
    category: "College",
    city: "Chennai",
    mode: "Online",
    image: "https://i.pravatar.cc/150?img=47",
    about: "Interview and placement preparation expert",
    Experience: "4 years",
    session: "200+",
    gender: "Female",
    rate: "₹400 / hr",
    certifications: "HR Certified",
    languages: "English, Tamil",
  },
  {
    id: 3,
    name: "Priya Sharma",
    expertise: "LivestockTech",
    category: "Startup",
    city: "Bengaluru",
    mode: "Offline",
    image: "https://i.pravatar.cc/150?img=45",
    about: "Livestock startup advisor",
    Experience: "6 years",
    session: "250+",
    gender: "Female",
    rate: "₹500 / hr",
    certifications: "ISO",
    languages: "English, Hindi",
  },
  {
    id: 4,
    name: "Arun Prakash",
    expertise: "AgriTech",
    category: "Startup",
    city: "Coimbatore",
    mode: "Online",
    image: "https://i.pravatar.cc/150?img=56",
    about: "Agri startup product consultant",
    Experience: "2 years",
    session: "50+",
    gender: "Male",
    rate: "₹350 / hr",
    certifications: "Startup Mentor",
    languages: "English, Tamil",
  },
  {
    id: 5,
    name: "Prof. Ramesh Kumar",
    expertise: "Project Guidance",
    category: "College",
    city: "Bengaluru",
    mode: "Online",
    image: "https://i.pravatar.cc/150?img=59",
    about: "Final year project and innovation mentor",
    Experience: "2 years",
    session: "150+",
    gender: "Male",
    rate: "₹250 / hr",
    certifications: "M.Tech",
    languages: "Tamil, English",
  },
  {
    id: 6,
    name: "Meena Devi",
    expertise: "Startup Marketing",
    category: "Startup",
    city: "Madurai",
    mode: "Online, Offline",
    image: "https://i.pravatar.cc/150?img=5",
    about: "Growth & digital marketing mentor",
    Experience: "1 year",
    session: "25+",
    gender: "Female",
    rate: "₹200 / hr",
    certifications: "Digital Marketing",
    languages: "Tamil, English",
  },
  {
    id: 7,
    name: "Suresh Iyer",
    expertise: "Product Strategy",
    category: "Startup",
    city: "Coimbatore",
    mode: "Offline",
    image: "https://i.pravatar.cc/150?img=65",
    about: "Product roadmap & scaling expert",
    Experience: "6 years",
    session: "250+",
    gender: "Male",
    rate: "₹600 / hr",
    certifications: "Product Owner",
    languages: "English",
  },
];

/* ================= MAIN ================= */

export default function CropSmileExpertProfile() {
  const [expertise, setExpertise] = useState("");
  const [language, setLanguage] = useState("");
  const [mode, setMode] = useState("");
  const [selectedExpert, setSelectedExpert] = useState(null);
  const expertiseOptions = [...new Set(experts.map(e => e.expertise))];
  const languageOptions = ["English", "Tamil", "Hindi"];
  const modeOptions = ["Online", "Offline"];

  /* ================= FILTER LOGIC ================= */
  const filteredExperts = experts.filter((e) => {
    const langs = e.languages.toLowerCase().split(",").map(l => l.trim());
    const modes = e.mode.toLowerCase().split(",").map(m => m.trim());

    return (
      (expertise === "" || e.expertise === expertise) &&
      (language === "" || langs.includes(language.toLowerCase())) &&
      (mode === "" || modes.includes(mode.toLowerCase()))
    );
  });
  /* ================= DASHBOARD ================= */
  if (selectedExpert) {
    return (
      <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: "#f4fbf3", minHeight: "100vh" }}>
        <Button variant="contained" onClick={() => setSelectedExpert(null)}>
          ← Back to Experts
        </Button>

        {/* ================= PROFILE HEADER ================= */}
        <Paper sx={{ p: 4, mt: 3 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <img
              src={selectedExpert.image}
              alt="expert"
              width={140}
              height={140}
              style={{ borderRadius: "50%" }}
            />

            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h4"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                {selectedExpert.name}
                <VerifiedIcon color="success" fontSize="small" />
              </Typography>

              <Typography color="success.main">
                {selectedExpert.expertise} • {selectedExpert.category}
              </Typography>

              <Typography><b>City:</b> {selectedExpert.city}</Typography>
              <Typography><b>Mode:</b> {selectedExpert.mode}</Typography>
              <Typography><b>Consultation Fee:</b> {selectedExpert.rate}</Typography>

              <Box sx={{ mt: 1, display: "flex", gap: 1, flexWrap: "wrap" }}>
                {selectedExpert.languages.split(",").map(l => (
                  <Chip key={l} label={l.trim()} />
                ))}
              </Box>
            </Box>
          </Box>
        </Paper>

        {/* ================= DASHBOARD SECTIONS ================= */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
            mt: 4,
          }}
        >
          {/* 🅰️ MY MENTEES */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">🎓 My Mentees</Typography>

            {[
              { name: "AgroGrow Startup", progress: 70, next: "12 Aug" },
              { name: "FarmTech AI", progress: 45, next: "18 Aug" },
            ].map((m) => (
              <Box key={m.name} sx={{ mt: 2 }}>
                <Typography fontWeight={600}>{m.name}</Typography>
                <Typography variant="body2">
                  Next Session: {m.next}
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <Typography variant="caption">Progress</Typography>
                  <Box
                    sx={{
                      height: 8,
                      bgcolor: "#e0e0e0",
                      borderRadius: 4,
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        width: `${m.progress}%`,
                        height: "100%",
                        bgcolor: "#2e7d32",
                      }}
                    />
                  </Box>
                </Box>
                <Button size="small" sx={{ mt: 1 }} variant="outlined">
                  View Action Items
                </Button>
              </Box>
            ))}
          </Paper>

          {/* 🅱️ AVAILABILITY */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">📅 Availability Calendar</Typography>

            <Typography sx={{ mt: 2 }}>
              Office Hours: Mon–Fri (6 PM – 9 PM)
            </Typography>
            <Typography>Pending Requests: 3</Typography>
            <Typography>Completed Sessions: {selectedExpert.session}</Typography>

            <Button sx={{ mt: 2 }} variant="contained">
              Manage Schedule
            </Button>
          </Paper>

          {/* 🅲 RESOURCE SHARING */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">📚 Resource Sharing</Typography>

            <Button sx={{ mt: 2 }} variant="contained">
              Upload Guide / Template
            </Button>
            <Button sx={{ mt: 2, ml: 2 }} variant="outlined">
              Post Opportunity
            </Button>

            <Box sx={{ mt: 2 }}>
              <Typography>📄 Startup Pitch Deck</Typography>
              <Typography>📘 Market Research Report</Typography>
            </Box>
          </Paper>

          {/* 🅳 EXPERT FEATURES */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">💼 Expert Features</Typography>

            <Typography sx={{ mt: 2 }}>
              Monthly Revenue: ₹42,000
            </Typography>
            <Typography>
              Certifications: {selectedExpert.certifications}
            </Typography>

            <Box sx={{ mt: 1, display: "flex", gap: 1, flexWrap: "wrap" }}>
              <Chip label={selectedExpert.expertise} />
              <Chip label="Startup Strategy" />
              <Chip label="Mentorship" />
            </Box>

            <Button sx={{ mt: 2 }} variant="outlined">
              Update Fee & Profile
            </Button>
          </Paper>
        </Box>
      </Box>
    );
  }

  /* ================= LIST VIEW ================= */

  return (
    <Box sx={{ bgcolor: "#f4fbf3", minHeight: "100vh", p: { xs: 2, md: 4 } }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "280px auto" },
          gap: 4,
          alignItems: "flex-start",
        }}
      >
        {/* FIXED FILTER PANEL */}
        <Paper
          sx={{
            p: 3,
            width: 280,
            minWidth: 280,
            maxWidth: 280,
            height: "fit-content",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Filters
          </Typography>

          {/* EXPERTISE FILTER */}
          <FilterSection title="Expertise">
            <RadioGroup
              value={expertise}
              onChange={(e) => setExpertise(e.target.value)}
            >
              <FormControlLabel value="" control={<Radio />} label="All" />
              {expertiseOptions.map((item) => (
                <FormControlLabel
                  key={item}
                  value={item}
                  control={<Radio />}
                  label={item}
                />
              ))}
            </RadioGroup>
          </FilterSection>

          {/* LANGUAGE FILTER */}
          <FilterSection title="Languages">
            <RadioGroup
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <FormControlLabel value="" control={<Radio />} label="All" />
              {languageOptions.map((lang) => (
                <FormControlLabel
                  key={lang}
                  value={lang}
                  control={<Radio />}
                  label={lang}
                />
              ))}
            </RadioGroup>
          </FilterSection>

          {/* MODE FILTER */}
          <FilterSection title="Mode">
            <RadioGroup
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            >
              <FormControlLabel value="" control={<Radio />} label="All" />
              {modeOptions.map((m) => (
                <FormControlLabel
                  key={m}
                  value={m}
                  control={<Radio />}
                  label={m}
                />
              ))}
            </RadioGroup>
          </FilterSection>
        </Paper>

        {/* STABLE GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, 260px)",
            gap: 3,
            justifyContent: "flex-start",
          }}
        >
          {filteredExperts.map((e) => (
            <Paper
              key={e.id}
              sx={{
                p: 2,
                width: 260,
                minHeight: 280,
                display: "flex",
                flexDirection: "column",
                rowGap: 3,
                textAlign: "center",
              }}
            >
              <img
                src={e.image}
                alt="expert"
                width={110}
                height={110}
                style={{ borderRadius: "50%", margin: "0 auto" }}
              />

              <Box>
                <Typography variant="h6">{e.name}</Typography>
                <Typography color="success.main">{e.expertise}</Typography>
                <Typography variant="body2">
                  {e.city} • {e.mode}
                </Typography>
              </Box>

              <Button variant="contained" onClick={() => setSelectedExpert(e)}>
                Book Now
              </Button>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
