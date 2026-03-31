import React from 'react'
import { useState } from 'react';
import MovieForm from './API';
    
    
    function AdminPanel({ movies = [], onDelete, onSave, showToast }) {
    
    // function AdminPanel({ movies, onDelete, onSave, showToast }) {
  const [tab, setTab] = useState("list");
  const [editing, setEditing] = useState(null);
  const avgRating = (movies.reduce((a, m) => a + m.rating, 0) / movies.length).toFixed(1);

  return (
    <div className="admin-wrap">
      <div className="admin-header">
        <div className="admin-title">ADMIN <span>PANEL</span></div>
        <button className="btn-primary" onClick={() => { setEditing({}); setTab("form"); }}>+ Add Movie</button>
      </div>
      <div className="stats-row">
        <div className="stat-card"><div className="stat-num">{movies.length}</div><div className="stat-label">TOTAL MOVIES</div></div>
        <div className="stat-card"><div className="stat-num">{avgRating}</div><div className="stat-label">AVG RATING</div></div>
        <div className="stat-card"><div className="stat-num">{new Set(movies.map(m => m.category)).size}</div><div className="stat-label">GENRES</div></div>
        <div className="stat-card"><div className="stat-num">{new Set(movies.map(m => m.ott)).size}</div><div className="stat-label">OTT PLATFORMS</div></div>
      </div>
      <div className="admin-tabs">
        <button className={`admin-tab ${tab === "list" ? "active" : ""}`} onClick={() => setTab("list")}>📋 Movie List</button>
        <button className={`admin-tab ${tab === "form" ? "active" : ""}`} onClick={() => { setEditing({}); setTab("form"); }}>➕ Add / Edit</button>
      </div>
      {tab === "list" && (
        <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
          <table className="admin-table">
            <thead><tr>
              <th>TITLE</th><th>YEAR</th><th>CATEGORY</th><th>RATING</th><th>OTT</th><th>VOTES</th><th>ACTIONS</th>
            </tr></thead>
            <tbody>
              {movies.map(m => (
                <tr key={m.id}>
                  <td style={{ fontWeight: 600 }}>{m.title}</td>
                  <td style={{ fontFamily: "'Space Mono'", color: "var(--muted)", fontSize: "0.85rem" }}>{m.year}</td>
                  <td><span className="tbl-cat">{m.category}</span></td>
                  <td><span className="tbl-rating">⭐ {m.rating}</span></td>
                  <td><span className="tbl-ott">{m.ott}</span></td>
                  <td style={{ color: "var(--muted)", fontFamily: "'Space Mono'", fontSize: "0.8rem" }}>{m.userRatings.length}</td>
                  <td>
                    <button className="edit-btn" onClick={() => { setEditing(m); setTab("form"); }}>Edit</button>
                    <button className="del-btn" onClick={() => { if (confirm(`Delete "${m.title}"?`)) onDelete(m.id); }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {tab === "form" && (
        <MovieForm movie={editing} onSave={m => { onSave(m); setTab("list"); }} onCancel={() => setTab("list")} />
      )}
    </div>
  );
}


    
    


export default AdminPanel