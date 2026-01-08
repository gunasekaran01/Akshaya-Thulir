import { useState } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";

import {
  Tabs,
  Tab,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Chip,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

/* ===================== DATA ===================== */

const packagesData = {
 student: {
        label: "Student",
        plans: [
            {
                title: "Basic",
                monthly: "599",
                yearly: "5,999",
                features: [
                    "Shared workspace access", "High-speed Wi-Fi", "Student community access", "Learning environment", "Basic support"
                ],
            },
            {
                title: "Standard",
                monthly: "999",
                yearly: "9,999",
                badge: "Most Popular",

                features: [
                    "Flexible desk access", "Wi-Fi + power backup", "Workshops & events", "Mentor interaction", "Community networking"
                ],
            },
            {
                title: "Premium",
                monthly: "1,999",
                yearly: "19,999",
                badge: "Best Value",
                features: [
                    "Dedicated desk", "24/7 workspace access", "Project mentorship", "Certification support", "Priority assistance",
                ],
            },
        ],
    },
    individual: {
        label: "Individual",
        plans: [
            {
            title: "Basic",
            monthly: "999",
            yearly: "9,999",
            features: [
                "Shared workspace", "High-speed internet", "Professional environment", "Community networking", "Basic support",
            ],
        },
        {
            title: "Standard",
            monthly: "1,999",
            yearly: "19,999",
            badge: "Most Popular",
            features: [
                "Flexible desk usage", "Meeting room access", "Business address usage", "Event participation", "Email support",
            ],
        },
        {
            title: "Premium",
            monthly: "3,999",
            yearly: "39,999",
            badge: "Best Value",
            features: [
                "Dedicated workspace", "Get 24/7 access", "Priority meeting rooms", "Mentorship access", "Premium support",
            ],
        },
        ],
    },

    investor: {
        label:"Investor",
        plans: [
           {
            title: "Basic",
            monthly: "1,999",
            yearly: "19,999",
            features: [
                "Startup profile access", "Community networking", "Event invitations", "Basic startup insights", "Support assistance",
            ],
        },
        {
            title: "Standard",
            monthly: "5,999",
            yearly: "59,999",
            badge: "Most Popular",
            features: [
                "Pitch deck access", "Demo day participation", "Founder introductions", "Investor networking", "Priority updates",
            ],
        },
        {
            title: "Premium",
            monthly: "7,999",
            yearly: "79,999",
            badge: "Best Value",
            features: [
                "Private founder meetings", "Exclusive demo sessions", "Direct startup access", "Brand visibility", "Priority coordination",
            ],
        },
        ],
    },
    
    advisor: {
        label: "Advisor",
        plans: [
            {
                title: "Basic",
                monthly: "1,999",
                yearly: "19,999",
                features: [
                    "Community access",
                    "Startup overview access",
                    "Networking opportunities",
                    "Knowledge sharing",
                    "Basic support",
                ],
            },
            {
                title: "Standard",
                monthly: "3,999",
                yearly: "39,999",
                badge: "Most Popular",
                features: [
                    "Startup mentoring access",
                    "Panel discussions",
                    "Collaboration opportunities",
                    "Event participation",
                    "Recognition support",
                ],
            },
            {
                title: "Premium",
                monthly: "5,999",
                yearly: "59,999",
                badge: "Best Value",
                features: [
                    "Dedicated mentoring slots",
                    "Professional recognition",
                    "Priority collaboration",
                    "Leadership roles",
                    "Premium support",
                ],
            },
        ],
    },
    startup: {
        label: "Startup",
        plans: [
              {
            title: "Basic",
            monthly: "1,999",
            yearly: "19,999",
            features: [
                "Shared workspace access","High-speed internet","Startup community access","Basic mentoring","Support assistance",
            ],   
        },
        {
            title: "Standard",
            monthly: "3,999",
            yearly: "39,999",
            badge: "Most Popular",
         features: [
                "Dedicated desk","Legal & compliance guidance","Pitch support","Mentor sessions","Networking opportunities",
            ],
        },
        {
            title: "Premium",
            monthly: "7,999",
            yearly: "79,999",
            badge: "Best Value",
            features: [
                "Private cabin access","Investor demo days","Branding support","Incubation services","Priority assistance",
            ],
        },
        ],
    },
    incubation: {
        label: "Incubation",
        plans: [
            {
            title: "Basic",
            monthly: "2,999",
            yearly: "29,999",
            features: [
                "Shared incubation space","Startup community access","Basic mentoring","Event participation","Support assistance",
            ],
        },
        {
            title: "Standard",
            monthly: "4,999",
            yearly: "49,999",
            badge: "Most Popular",
           features: [
                "Program hosting facilities","Mentor network access","Startup collaboration","Resource sharing","Operational support",
            ],
        },
        {
            title: "Premium",
            monthly: "6,999",
            yearly: "69,999",
            badge: "Best Value",
            features: [
                "Full incubation support","Investor network access","Dedicated infrastructure","Analytics & reporting","Priority coordination",
            ],
        },
        ],
    },
    educational: {
        label: "Education",
        plans: [
            {
            title: "Basic",
            monthly: "2,999",
            yearly: "29,999",
            features: [
                "Student innovation access","Community programs","Learning environment","Basic support","Networking opportunities",
            ],            
        },
        {
            title: "Standard",
            monthly: "5,999",
            yearly: "59,999",
            badge: "Most Popular",
            features: [
                "Project incubation support","Industry collaboration","Faculty workshops","Event participation","Academic networking",
            ],
        },
        {
            title: "Premium",
            monthly: "7,999",
            yearly: "79,999",
            badge: "Best Value",
            features: [
                "Research collaboration","Innovation lab access","Certification programs","Industry partnerships","Priority support",
            ],
        },
        ],
    },
    labs: {
        label: "Labs",
        plans: [
           {
            title: "Basic",
            monthly: "2,999",
            yearly: "29,999",
            features: [
                "Shared lab access","High-speed internet","Research environment","Community access","Basic support",
            ],            
        },
        {
            title: "Standard",
            monthly: "5,999",
            yearly: "59,999",
            badge: "Most Popular",
         features: [
                "Dedicated lab space","Research collaboration","Technical resources","Industry interaction","Operational assistance",
            ],
        },
        {
            title: "Premium",
            monthly: "7,999",
            yearly: "79,999",
            badge: "Best Value",
            features: [
                "Advanced lab access","IP & patent guidance","Funding assistance","Industry exposure","Priority support",
            ],
        },
        ],
    },
    corporate: {
        label: "Corporate",
        plans: [
           {
            title: "Basic",
            monthly: "3,999",
            yearly: "39,999",
             features: [
                "Shared office space","Professional environment","Admin support","Community access","Basic facilities",
            ],
        },
        {
            title: "Standard",
            monthly: "7,999",
            yearly: "79,999",
            badge: "Most Popular",
            features: [
                "Dedicated office space","Training programs","Collaboration support","Meeting facilities","Business assistance",
            ],
        },
        {
            title: "Premium",
            monthly: "9,999",
            yearly: "99,999",
            badge: "Best Value",
            features: [
                "Private office space","Branding & signage","IT & HR support","Talent collaboration","Priority services",
            ],
        },
        ],
    },

    government: {
        label: "Government",
        plans: [
          {
            title: "Basic",
            monthly: "1,999",
            yearly: "19,999",
            features: [
                "Innovation ecosystem access","Community programs","Collaboration support","Basic facilities","Assistance services",
            ],            
        },
        {
            title: "Standard",
            monthly: "4,999",
            yearly: "49,999",
            badge: "Most Popular",
           features: [
                "Startup collaboration","Training & workshops","Program coordination","Data & reporting support","Operational assistance",
            ],
        },
        {
            title: "Premium",
            monthly: "6,999",
            yearly: "69,999",
            badge: "Best Value",
            features: [
                "Policy innovation support","Secure infrastructure","Long-term programs","Strategic collaboration","Dedicated support",
            ],
        },
        ],
    },
    training: {
        label: "Training",
        plans: [
            {
                title: "Basic",
                monthly: "2,999",
                yearly: "29,999",
                features: [
                    "Shared training space", "Community access", "Learning environment", "Basic facilities", "Support assistance",
                ],
            },
            {
                title: "Standard",
                monthly: "4,999",
                yearly: "49,999",
                badge: "Most Popular",
                features: [
                    "Workshop hosting", "Industry expert sessions", "Training infrastructure", "Event participation", "Operational support",
                ],
            },
            {
                title: "Premium",
                monthly: "6,999",
                yearly: "69,999",
                badge: "Best Value",
                features: [
                    "Dedicated training rooms", "Certification programs", "Placement assistance", "Industry partnerships", "Priority services",
                ],
            },
        ],
    },
    association: {
        label: "Association",
        plans: [
             {
            title: "Basic",
            monthly: "1,999",
            yearly: "19,999",
            features: [
                "Shared workspace access", "Community engagement", "Networking opportunities", "Basic facilities", "Support assistance",
            ],
        },
        {
            title: "Standard",
            monthly: "5,999",
            yearly: "59,999",
            badge: "Most Popular",
            features: [
                "Event hosting support", "Collaboration tools", "Member networking", "Program coordination", "Operational support",
            ],
        },
        {
            title: "Premium",
            monthly: "7,999",
            yearly: "79,999",
            badge: "Best Value",
            features: [
                "Branding & visibility", "Outreach programs", "Partnership opportunities", "Community leadership", "Priority assistance",
            ],
        },
        ],
    },
};

/* ===================== PAGE ===================== */

const PackagesPage = () => {
    const { type } = useParams(); // student, advisor, training.
    const data = packagesData[type];
    const [billing, setBilling] = useState(
        data.plans.map(() => "monthly"));
    const handleBillingChange = (index, value) => {
        if (!value) return;
        setBilling((prev) => {
            const updated = [...prev];
            updated[index] = value;
            return updated;
        });
    };
    return (
        <Box sx={{ maxWidth: 1200, mx: "auto", p: 6 }}>
            <Grid container spacing={4}>
                {data.plans.map((plan, index) => {
                    const price =
                        billing[index] === "monthly"
                            ? plan.monthly
                            : plan.yearly;

                    return (
                        <Grid item xs={12} md={4} key={index}>
                            <Card sx={{
                                height: "100%",
                                borderRadius: 4,
                                minWidth: 300,
                                borderTop: "6px solid #2e7d32",
                                boxShadow: "0px 12px 30px rgba(0,0,0,0.08)",
                                position: "relative",
                                transition: "0.3s",
                                "&:hover": {
                                    transform: "translateY(-6px)",
                                },
                            }}>
                                {/* Badge */}
                                {plan.badge && (
                                    <Chip
                                        label={plan.badge}
                                        sx={{
                                            position: "absolute",
                                            top: 5,
                                            right: "-13%",

                                            transform: "translateX(-50%)",
                                            backgroundColor: "#2e7d32",
                                            color: "#fff",
                                            fontWeight: 400,
                                        }}
                                    />
                                )}
                                <CardContent sx={{ p: 4, textAlign: "center" }}>
                                    <Typography sx={{ fontSize: 18, color: "text.secondary" }}>
                                        {data.label}
                                    </Typography>

                                    <Typography sx={{
                                        fontSize: 32,
                                        fontWeight: 400,
                                        color: "#2e7d32",
                                        mb: 2,
                                    }}>
                                        {plan.title}
                                    </Typography>

                                    <ToggleButtonGroup
                                        value={billing[index]}
                                        exclusive
                                        onChange={(e, val) =>
                                            handleBillingChange(index, val)
                                        }
                                        sx={{
                                            mb: 3,
                                            backgroundColor: "#f2f2f2",
                                            borderRadius: 2,
                                        }}
                                    >
                                        <ToggleButton value="monthly">
                                            MONTHLY
                                        </ToggleButton>
                                        <ToggleButton value="yearly">
                                            YEARLY
                                        </ToggleButton>
                                    </ToggleButtonGroup>

                                    <Typography
                                        sx={{
                                            fontSize: 28,
                                            fontWeight: 400,
                                            mb: 3,
                                        }}
                                    >
                                        ₹{price}
                                        <Typography component="span" sx={{ fontSize: 16 }}>
                                            {" "}
                                            / {billing[index] === "monthly" ? "month" : "year"}
                                        </Typography>
                                    </Typography>

                                    <Box sx={{ textAlign: "left", my: 3 }}>
                                        {plan.features.map((f, i) => (
                                            <Box key={i} sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                mb: 1.5,
                                            }}>
                                                <CheckCircleIcon sx={{ color: "#2e7d32", mr: 1 }} />
                                                <Typography sx={{ fontSize: 16 }}>{f}</Typography>
                                            </Box>
                                        ))}
                                    </Box>

                                    <Button
                                        fullWidth
                                        sx={{
                                            mt: 1,
                                            backgroundColor: "#2e7d32",
                                            color: "#fff",
                                            fontWeight: 450,
                                            py: 1.3,
                                            borderRadius: 5,
                                            "&:hover": {
                                                backgroundColor: "#fff",
                                                color: "#2e7d32",
                                                border: "solid"
                                            },
                                        }}
                                    >
                                        GET STARTED
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

/* ===================== ROUTES ===================== */

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/individual/:type" element={<PackagesPage />} />
      <Route path="/organisation/:type" element={<PackagesPage />} />
    </Routes>
  );
};

/* ===================== LAYOUT ===================== */

export default function TabsLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const mainTab = location.pathname.startsWith("/organisation")
    ? "organisation"
    : "individual";

  const handleMainChange = (e, value) => {
    navigate(`/${value}`);
  };

  const handleSubChange = (e, value) => {
    navigate(value);
  };

  // ✅ FINAL SAFE + CENTER-FIRST STYLES
  const tabStyles = {
    "& .MuiTabs-indicator": {
      backgroundColor: "#2e7d32",
      height: 3,
      borderRadius: 2,
    },

    /* 🔑 REQUIRED FOR FULL LEFT SCROLL */
    "& .MuiTabs-flexContainer": {
      justifyContent: "flex-start",
    },

    "& .MuiTab-root": {
      textTransform: "none",
      fontSize: 18,
      minHeight: 48,
      whiteSpace: "nowrap",
      color: "#555",
      px: 2,
    },

    "& .MuiTab-root.Mui-selected": {
      color: "#2e7d32",
      fontWeight: 500,
      backgroundColor: "#fff",
      borderRadius: 1,
    },

    /* 🔥 MAGIC: CENTER ONLY INITIAL VIEW */
    "& .MuiTab-root:first-of-type": {
      marginLeft: "auto",
    },
    "& .MuiTab-root:last-of-type": {
      marginRight: "auto",
    },

    "& .MuiTabs-scrollButtons": {
      color: "#2e7d32",
    },

    "& .MuiTabs-scrollButtons.Mui-disabled": {
      opacity: 0.3,
    },
  };

  return (
    <Card
      elevation={1}
      sx={{
        backgroundColor: "#f5f7fa",
        borderRadius: 1,
      }}
    >
      {/* ================= MAIN TABS ================= */}
      <Tabs
        value={mainTab}
        onChange={handleMainChange}
        centered
        sx={tabStyles}
      >
        <Tab label="Individual" value="individual" />
        <Tab label="Organizations" value="organisation" />
      </Tabs>

      {/* ================= SUB TABS WRAPPER ================= */}
      <Box
        sx={{
          borderTop: "2px solid #2e7d32",
          borderBottom: "2px solid #2e7d32",
        }}
      >
        {/* ================= INDIVIDUAL TABS ================= */}
        {mainTab === "individual" && (
          <Tabs
            value={location.pathname}
            onChange={handleSubChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={tabStyles}
          >
            <Tab label="Student" value="/individual/student" />
            <Tab label="Individual" value="/individual/individual" />
            <Tab label="Investor" value="/individual/investor" />
            <Tab label="Advisor" value="/individual/advisor" />
          </Tabs>
        )}

        {/* ================= ORGANISATION TABS ================= */}
        {mainTab === "organisation" && (
          <Tabs
            value={location.pathname}
            onChange={handleSubChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={tabStyles}
          >
            <Tab label="Startup" value="/organisation/startup" />
            <Tab label="Incubation Center" value="/organisation/incubation" />
            <Tab
              label="Educational Institutes"
              value="/organisation/educational"
            />
            <Tab label="Labs" value="/organisation/labs" />
            <Tab label="Corporate" value="/organisation/corporate" />
            <Tab
              label="Government Agency"
              value="/organisation/government"
            />
            <Tab label="Training" value="/organisation/training" />
            <Tab label="Association" value="/organisation/association" />
          </Tabs>
        )}
      </Box>
      <AppRoutes/>
    </Card>
  );
}
