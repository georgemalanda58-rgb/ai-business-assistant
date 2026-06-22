"use client";

import { useEffect, useState } from "react";

export default function Home() {
const [businesses, setBusinesses] = useState<any[]>([]);
const [favorites, setFavorites] = useState<number[]>([]);

const [name, setName] = useState("");
const [service, setService] = useState("");
const [location, setLocation] = useState("");
const [category, setCategory] = useState("");
const [description, setDescription] = useState("");
const [phone, setPhone] = useState("");
const [logo, setLogo] = useState("");

const [search, setSearch] = useState("");
const [filter, setFilter] = useState("");

useEffect(() => {
const saved = localStorage.getItem("malanda-businesses");
const savedFavorites = localStorage.getItem("malanda-favorites");


if (saved) {
  setBusinesses(JSON.parse(saved));
}

if (savedFavorites) {
  setFavorites(JSON.parse(savedFavorites));
}


}, []);

useEffect(() => {
localStorage.setItem(
"malanda-businesses",
JSON.stringify(businesses)
);
}, [businesses]);

useEffect(() => {
localStorage.setItem(
"malanda-favorites",
JSON.stringify(favorites)
);
}, [favorites]);

function saveBusiness() {
if (!name || !service) return;


setBusinesses([
  {
    id: Date.now(),
    name,
    service,
    location,
    category,
    description,
    phone,
    logo,
    rating: 5,
    featured: true,
  },
  ...businesses,
]);

setName("");
setService("");
setLocation("");
setCategory("");
setDescription("");
setPhone("");
setLogo("");


}

function toggleFavorite(id: number) {
if (favorites.includes(id)) {
setFavorites(
favorites.filter((f) => f !== id)
);
} else {
setFavorites([...favorites, id]);
}
}

function deleteBusiness(id: number) {
setBusinesses(
businesses.filter((b) => b.id !== id)
);


setFavorites(
  favorites.filter((f) => f !== id)
);


}

const results = businesses.filter((b) => {
const matchesSearch =
b.name?.toLowerCase().includes(search.toLowerCase()) ||
b.service?.toLowerCase().includes(search.toLowerCase()) ||
b.location?.toLowerCase().includes(search.toLowerCase()) ||
b.category?.toLowerCase().includes(search.toLowerCase()) ||
b.description?.toLowerCase().includes(search.toLowerCase());


const matchesFilter =
  filter === "" ||
  b.category?.toLowerCase().includes(filter.toLowerCase());

return matchesSearch && matchesFilter;


});

return (
<main
style={{
minHeight: "100vh",
background:
"radial-gradient(circle at top,#2563eb,#0f172a 40%,#020617 100%)",
color: "white",
padding: 30,
fontFamily: "Arial",
}}
>
<div
style={{
maxWidth: 1200,
margin: "auto",
}}
>
<h1
style={{
textAlign: "center",
fontSize: 90,
marginBottom: 0,
fontWeight: "bold",
letterSpacing: 3,
textShadow: "0 0 25px #60a5fa",
}}
>
🚀 Malanda </h1>


    <p
      style={{
        textAlign: "center",
        fontSize: 24,
        color: "#e2e8f0",
      }}
    >
      Find The Perfect Business Instantly
    </p>

    <div
      style={{
        marginTop: 25,
        padding: 30,
        borderRadius: 25,
        background:
          "linear-gradient(135deg,#2563eb,#7c3aed)",
        textAlign: "center",
        boxShadow:
          "0 15px 40px rgba(0,0,0,0.4)",
      }}
    >
      <h2
        style={{
          fontSize: 42,
          marginBottom: 10,
        }}
      >
        Kenya's Future Business Marketplace
      </h2>

      <p
        style={{
          fontSize: 20,
        }}
      >
        Discover • Connect • Grow
      </p>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(220px,1fr))",
        gap: 15,
        marginTop: 25,
      }}
    >
      <div
        style={{
          background:
            "rgba(30,41,59,0.75)",
          backdropFilter: "blur(12px)",
          padding: 20,
          borderRadius: 20,
        }}
      >
        <h2>{businesses.length}</h2>
        <p>Total Businesses</p>
      </div>

      <div
        style={{
          background:
            "rgba(30,41,59,0.75)",
          backdropFilter: "blur(12px)",
          padding: 20,
          borderRadius: 20,
        }}
      >
        <h2>{results.length}</h2>
        <p>Search Results</p>
      </div>

      <div
        style={{
          background:
            "rgba(30,41,59,0.75)",
          backdropFilter: "blur(12px)",
          padding: 20,
          borderRadius: 20,
        }}
      >
        <h2>{favorites.length}</h2>
        <p>Favorites</p>
      </div>
    </div>

    <div
      style={{
        background:
          "rgba(30,41,59,0.75)",
        backdropFilter: "blur(12px)",
        padding: 25,
        borderRadius: 25,
        marginTop: 25,
      }}
    >
      <h2>🏢 Register Business</h2>

      <input
        placeholder="Business Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        style={{
          width: "100%",
          padding: 14,
          marginBottom: 10,
        }}
      />

      <input
        placeholder="Service"
        value={service}
        onChange={(e) =>
          setService(e.target.value)
        }
        style={{
          width: "100%",
          padding: 14,
          marginBottom: 10,
        }}
      />

      <input
        placeholder="Location"
        value={location}
        onChange={(e) =>
          setLocation(e.target.value)
        }
        style={{
          width: "100%",
          padding: 14,
          marginBottom: 10,
        }}
      />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
        style={{
          width: "100%",
          padding: 14,
          marginBottom: 10,
        }}
      />

      <input
        placeholder="Phone Number"
        value={phone}
        onChange={(e) =>
          setPhone(e.target.value)
        }
        style={{
          width: "100%",
          padding: 14,
          marginBottom: 10,
        }}
      />

      <input
        placeholder="Logo Image URL"
        value={logo}
        onChange={(e) =>
          setLogo(e.target.value)
        }
        style={{
          width: "100%",
          padding: 14,
          marginBottom: 10,
        }}
      />

      <textarea
        placeholder="Business Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
        style={{
          width: "100%",
          padding: 14,
          minHeight: 120,
          marginBottom: 10,
        }}
      />

      <button
        onClick={saveBusiness}
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "15px 30px",
          borderRadius: 15,
          fontSize: 18,
          cursor: "pointer",
        }}
      >
        Save Business
      </button>
    </div>

    <div
      style={{
        background:
          "rgba(30,41,59,0.75)",
        backdropFilter: "blur(12px)",
        padding: 25,
        borderRadius: 25,
        marginTop: 25,
      }}
    >
      <input
        placeholder="Search businesses..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={{
          width: "100%",
          padding: 14,
          marginBottom: 10,
        }}
      />

      <input
        placeholder="Filter category..."
        value={filter}
        onChange={(e) =>
          setFilter(e.target.value)
        }
        style={{
          width: "100%",
          padding: 14,
        }}
      />
    </div>

    <div
      style={{
        marginTop: 25,
      }}
    >
      {results.map((b) => (
        <div
          key={b.id}
          style={{
            background:
              "rgba(30,41,59,0.75)",
            backdropFilter:
              "blur(12px)",
            padding: 20,
            borderRadius: 20,
            marginBottom: 20,
            border:
              "1px solid rgba(255,255,255,0.15)",
            boxShadow:
              "0 15px 40px rgba(0,0,0,0.4)",
          }}
        >
          {b.logo && (
            <img
              src={b.logo}
              alt={b.name}
              style={{
                width: "100%",
                maxHeight: 250,
                objectFit: "cover",
                borderRadius: 15,
                marginBottom: 15,
              }}
            />
          )}

          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
            }}
          >
            <h2>{b.name}</h2>

            <span
              style={{
                background:
                  "#f59e0b",
                color: "black",
                padding:
                  "6px 12px",
                borderRadius: 30,
                fontWeight: "bold",
              }}
            >
              Featured
            </span>
          </div>

          <p>🛠 {b.service}</p>
          <p>📍 {b.location}</p>
          <p>📂 {b.category}</p>
          <p>📞 {b.phone}</p>
          <p>⭐ {b.rating}/5</p>
          <p>🎯 Match Score: 98%</p>
          <p>{b.description}</p>

          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              marginTop: 15,
            }}
          >
            <button
              onClick={() =>
                toggleFavorite(
                  b.id
                )
              }
            >
              {favorites.includes(
                b.id
              )
                ? "❤️ Saved"
                : "🤍 Save"}
            </button>

            <button
              onClick={() =>
                deleteBusiness(
                  b.id
                )
              }
            >
              🗑 Delete
            </button>

            {b.phone && (
              <a
                href={`https://wa.me/${b.phone}`}
                target="_blank"
                rel="noreferrer"
              >
                <button
                  style={{
                    background:
                      "#22c55e",
                    color: "white",
                    border:
                      "none",
                    padding:
                      "10px 15px",
                    borderRadius:
                      10,
                    cursor:
                      "pointer",
                  }}
                >
                  WhatsApp
                </button>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>

    <footer
      style={{
        textAlign: "center",
        marginTop: 50,
        color: "#94a3b8",
      }}
    >
      © 2026 Malanda • Connecting Businesses & Customers
    </footer>
  </div>
</main>


);
}
