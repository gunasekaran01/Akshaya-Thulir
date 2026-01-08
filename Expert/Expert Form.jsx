import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Grid,
    Paper,
    TextField,
    Button,
    FormLabel,
    FormControl,
    RadioGroup,
    Radio,
    MenuItem,
    FormControlLabel,
    Autocomplete,
} from "@mui/material";

/*=====style======*/

const sectionHeaderStyle = {
    backgroundColor: "#046f0bff",
    color: "#fff",
    padding: "12px 24px",
    borderRadius: "4px 4px 0 0",
};

const cardStyle = {
    border: "2px solid #046f0bff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    marginBottom: "40px",
    overflow: "hidden"
};

const initialExpertState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    expertise: "",
    category: "",
    country: "",
    state: "",
    district: "",
    city: "",
    area: "",
    pinCode: "",
    mode: "",
    image: "",
    about: "",
    experience: "",
    session: "",
    gender: "",
    rate: "",
    certifications: "",
    languages: "",
    websiteUrl: "",
    linkedinUrl: "",
    profileUrl: "",
    otherUrl: "",
};

export default function StartupRegistrationForm() {
    /* ---------- Personal & Digital ---------- */
    const [expert, setExpert] = useState(initialExpertState);

    const handleReset = () => {
        setExpert(initialExpertState);

        setStates([]);
        setDistricts([]);

        setCountryInput("");
        setStateInput("");
        setDistrictInput("");
        setCityInput("");
    };
    /* ---------- Address ---------- */
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [countryInput, setCountryInput] = useState("");
    const [stateInput, setStateInput] = useState("");
    const [districtInput, setDistrictInput] = useState("");
    const [, setCityInput] = useState("");
    /* ---------- Input Handlers ---------- */
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExpert((prev) => ({ ...prev, [name]: value }));
    };
    const handleChange = (e) => {
        setExpert({ ...expert, [e.target.name]: e.target.value });
    };
    /* ---------- Fetch Countries ---------- */
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await fetch(
                    "https://countriesnow.space/api/v0.1/countries/iso"
                );
                const data = await res.json();
                setCountries(data.data?.map((c) => c.name) || []);
            } catch (err) {
                console.error("Error fetching countries:", err);
            }
        };
        fetchCountries();
    }, []);

    /* ---------- Address Logic (YOUR API FLOW) ---------- */
    const handleAddressChange = async (field, value, isSelection = false) => {
        let updated = { ...expert };

        if (field === "country") {
            if (!isSelection) return;
            updated = {
                country: value,
                state: "",
                district: "",
                city: "",
                area: "",
                pinCode: "",
            };
            setStates([]);
            setDistricts([]);

            try {
                const res = await fetch(
                    "https://countriesnow.space/api/v0.1/countries/states",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ country: value }),
                    }
                );
                const data = await res.json();
                setStates(data.data?.states?.map((s) => s.name) || []);
            } catch (e) {
                console.error(e);
            }
        }

        if (field === "state") {
            if (!isSelection) return;
            updated = {
                ...updated,
                state: value,
                district: "",
                city: "",
                area: "",
                pinCode: "",
            };
            setDistricts([]);

            try {
                const res = await fetch(
                    "https://countriesnow.space/api/v0.1/countries/state/cities",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            country: expert.country,
                            state: value,
                        }),
                    }
                );
                const data = await res.json();
                setDistricts(data.data || []);
            } catch (e) {
                console.error(e);
            }
        }

        if (field === "district") {
            updated = { ...updated, district: value, city: "", area: "", pinCode: "" };
        }

        if (["city", "area", "pinCode"].includes(field)) {
            updated = { ...updated, [field]: value };
        }

        setExpert(updated);
    };

    /* ---------- Submit ---------- */
   const handleSubmit = (e) => {
  e.preventDefault();
  const finalData = {
    id: Date.now(),
    ...expert,
  };
  console.log("Expert Data:", finalData);

  handleReset();
};

    /* ========== main =========== */
    return (
        <Box sx={{ p: 3, bgcolor: "#f4f6f4", minHeight: "100vh" }}>
            <Typography
                variant="h5"
                align="center"
                mb={4}
                sx={{ color: "#2e7d32", fontWeight: "bold" }}
            >
                Industry Expert Registration Form
            </Typography>

            <form onSubmit={handleSubmit}>
                {/* ================= PERSONAL INFO ================= */}
                <Paper sx={cardStyle}>
                    <Box sx={sectionHeaderStyle}>
                        <Typography variant="h6">Personal Information</Typography>
                    </Box>
                    <Box sx={{ p: 4 }}>
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField fullWidth label="First Name" required name="firstName" value={expert.firstName} onChange={handleInputChange} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField fullWidth label="Last Name" required name="lastName" value={expert.lastName} onChange={handleInputChange} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField fullWidth type="email" label="Email Address" required name="email" value={expert.email} onChange={handleInputChange} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField fullWidth label="Phone Number" required name="phone" value={expert.phone} onChange={handleInputChange} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth type="date" label="Date of Birth"
                                    InputLabelProps={{ shrink: true }} required name="dob"
                                    value={expert.dob} onChange={handleInputChange} 
                                    inputProps={{ max: new Date().toISOString().split("T")[0] }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Gender *</FormLabel>
                                    <RadioGroup row name="gender" value={expert.gender} onChange={handleInputChange}>
                                        <FormControlLabel value="male" control={<Radio color="success" />} label="Male" />
                                        <FormControlLabel value="female" control={<Radio color="success" />} label="Female" />
                                        <FormControlLabel value="others" control={<Radio color="success" />} label="Others" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
                {/* ================= LOCATION ================= */}
                <Paper sx={cardStyle}>
                    <Box sx={sectionHeaderStyle}>
                        <Typography variant="h6">Institution Address</Typography>
                    </Box>
                    <Box sx={{ p: 4 }}>
                        <Grid container spacing={3}>
                            {/* Country */}
                            <Grid size={{ xs: 12, md: 2 }}>
                                <Autocomplete
                                    options={countries}
                                    value={expert.country}
                                    inputValue={countryInput}
                                    onInputChange={(event, newInputValue) => setCountryInput(newInputValue)}
                                    onChange={(event, newValue) => {
                                        setCountryInput(newValue || "");
                                        setStateInput(""); setDistrictInput(""); setCityInput("");
                                        handleAddressChange("country", newValue, true);
                                    }}
                                    renderInput={(params) => <TextField {...params} label="Country" required />}
                                />
                            </Grid>

                            {/* State */}
                            <Grid size={{ xs: 12, md: 2 }}>
                                <Autocomplete
                                    disabled={!expert.country || expert.country.length === 0}
                                    options={states}
                                    value={expert.state}
                                    inputValue={stateInput}
                                    onInputChange={(event, newInputValue) => setStateInput(newInputValue)}
                                    onChange={(event, newValue) => {
                                        setStateInput(newValue || "");
                                        setDistrictInput(""); setCityInput("");
                                        handleAddressChange("state", newValue, true);
                                    }}
                                    renderInput={(params) => <TextField {...params} label="State" required />}
                                />
                            </Grid>

                            {/* District */}
                            <Grid size={{ xs: 12, md: 2 }}>
                                <Autocomplete
                                    freeSolo
                                    disabled={!expert.state || expert.state.length === 0}
                                    options={districts}
                                    value={expert.district}
                                    inputValue={districtInput}
                                    onInputChange={(event, newInputValue) => setDistrictInput(newInputValue)}
                                    onChange={(event, newValue) => {
                                        setDistrictInput(newValue || "");
                                        setCityInput("");
                                        handleAddressChange("district", newValue, true);
                                    }}
                                    renderInput={(params) => <TextField {...params} label="District" required />}
                                />
                            </Grid>

                            {/* City */}
                            <Grid size={{ xs: 12, md: 2 }}>
                                <TextField
                                    fullWidth
                                    label="City"
                                    required
                                    disabled={!expert.district || expert.district.length === 0}
                                    value={expert.city}
                                    onChange={(e) => handleAddressChange("city", e.target.value)}
                                />
                            </Grid>

                            {/* Area */}
                            <Grid size={{ xs: 12, md: 2 }}>
                                <TextField
                                    fullWidth
                                    label="Area"
                                    disabled={!expert.city || expert.city.length === 0}
                                    value={expert.area}
                                    onChange={(e) => handleAddressChange("area", e.target.value)}
                                    required
                                />
                            </Grid>

                            {/* Pincode */}
                            <Grid size={{ xs: 12, md: 2 }}>
                                <TextField
                                    fullWidth
                                    label="Pincode"
                                    disabled={!expert.area || expert.area.length === 0}
                                    value={expert.pinCode}
                                    inputProps={{ maxLength: 6 }}
                                    onChange={(e) => handleAddressChange("pinCode", e.target.value)}
                                    required
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
                {/* ================= EXPERT DETAILS ================= */}
                <Paper sx={cardStyle}>
                    <Box sx={sectionHeaderStyle}>
                        <Typography sx={{ color: "#fff", fontWeight: "bold" }}>
                            Expert Details
                        </Typography>
                    </Box>

                    <Box sx={{ p: 4 }}>
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField fullWidth label="Domain Expertise" name="expertise" value={expert.expertise} onChange={handleChange} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField select fullWidth label="Mode" name="mode" value={expert.mode} onChange={handleChange}>
                                    <MenuItem value="Online">Online</MenuItem>
                                    <MenuItem value="Offline">Offline</MenuItem>
                                    <MenuItem value="Online, Offline">Online & Offline</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField fullWidth label="Experience(in yrs)" name="Experience" value={expert.Experience} onChange={handleChange} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField type="number" fullWidth label="Sessions Completed" name="session" value={expert.session} onChange={handleChange} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField fullWidth label="Rate (₹ / hr)" name="rate" value={expert.rate} onChange={handleChange} />
                            </Grid>

                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField fullWidth label="Certifications" name="certifications" value={expert.certifications} onChange={handleChange} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField fullWidth label="Languages Known" name="languages" value={expert.languages} onChange={handleChange} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField multiline rows={2} fullWidth label="About Expert" name="about" value={expert.about} onChange={handleChange} />
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
                {/* ================= DIGITAL ================= */}
                <Paper sx={cardStyle}>
                    <Box sx={sectionHeaderStyle}>
                        <Typography variant="h6">Digital & Social Presence</Typography>
                    </Box>
                    <Box sx={{ p: 4 }}>
                        <Grid container spacing={3}>
                            {/* Official Website */}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    type="url"
                                    label="Official Website URL"
                                    name="websiteUrl"
                                    required
                                    value={expert.websiteUrl}
                                    onChange={handleInputChange}
                                    placeholder="https://example.com"
                                />
                            </Grid>

                            {/* LinkedIn */}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    type="url"
                                    label="LinkedIn Page URL"
                                    name="linkedinUrl"
                                    required
                                    value={expert.linkedinUrl}
                                    onChange={handleInputChange}
                                    placeholder="https://linkedin.com/company/example"
                                />
                            </Grid>

                            {/* Instagram */}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    required
                                    type="url"
                                    label="Profile Image URL"
                                    name="profileUrl"
                                    value={expert.profileUrl}
                                    onChange={handleInputChange}
                                />
                            </Grid>

                            {/* Facebook */}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    type="url"
                                    label="Other Page URL"
                                    name="otherUrl"
                                    value={expert.otherUrl || ""}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
                {/* ================= Button ================= */}
                <Box
                    textAlign="center"
                    mt={4}
                    sx={{ display: "flex", justifyContent: "center", gap: 2 }}
                >
                    <Button
                        type="button"
                        variant="outlined"
                        color="success"
                        onClick={handleReset}
                    >
                        Reset
                    </Button>

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ bgcolor: "#2e7d32" }}
                    >
                        Submit
                    </Button>
                </Box>
            </form>
        </Box>
    );
}
