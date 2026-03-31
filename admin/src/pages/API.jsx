import React from 'react'
import AdminPanel from './Home';
import { useState } from 'react';
    
    function MovieForm({ movie, onSave, onCancel }) {
  const [form, setForm] = useState({
    title: movie?.title || "", year: movie?.year || new Date().getFullYear(),
    category: movie?.category || "Action", rating: movie?.rating || 7,
    releaseDate: movie?.releaseDate || "", ott: movie?.ott || "Netflix",
    duration: movie?.duration || "", director: movie?.director || "",
    cast: movie?.cast?.join(", ") || "", description: movie?.description || "",
    language: movie?.language || "English", country: movie?.country || "India",
    status: movie?.status || "Released", id: movie?.id || null,
  });
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const submit = () => {
    if (!form.title.trim()) { alert("Title is required."); return; }
    onSave({ ...form, year: parseInt(form.year), rating: parseFloat(form.rating),
      cast: form.cast.split(",").map(c => c.trim()).filter(Boolean),
      userRatings: movie?.userRatings || [parseFloat(form.rating)] });
  };

  return (
    <div className="form-card">
      <div className="form-title">{form.id ? "EDIT MOVIE" : "ADD NEW MOVIE"}</div>
      <div className="form-grid">
        <div className="form-group full">
          <label className="form-label">MOVIE TITLE *</label>
          <input className="form-input" value={form.title} onChange={e => set("title", e.target.value)} placeholder="e.g. Inception" />
        </div>
        <div className="form-group">
          <label className="form-label">YEAR</label>
          <input className="form-input" type="number" value={form.year} onChange={e => set("year", e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">RELEASE DATE</label>
          <input className="form-input" type="date" value={form.releaseDate} onChange={e => set("releaseDate", e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">CATEGORY</label>
          <select className="form-select" value={form.category} onChange={e => set("category", e.target.value)}>
            {CATEGORIES.filter(c => c !== "All").map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">OTT PLATFORM</label>
          <select className="form-select" value={form.ott} onChange={e => set("ott", e.target.value)}>
            {OTT_PLATFORMS.map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">BASE RATING (0–10)</label>
          <input className="form-input" type="number" min="0" max="10" step="0.1" value={form.rating} onChange={e => set("rating", e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">DURATION</label>
          <input className="form-input" value={form.duration} onChange={e => set("duration", e.target.value)} placeholder="e.g. 148 min" />
        </div>
        <div className="form-group">
          <label className="form-label">DIRECTOR</label>
          <input className="form-input" value={form.director} onChange={e => set("director", e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">LANGUAGE</label>
          <input className="form-input" value={form.language} onChange={e => set("language", e.target.value)} />
        </div>
        <div className="form-group full">
          <label className="form-label">CAST (comma separated)</label>
          <input className="form-input" value={form.cast} onChange={e => set("cast", e.target.value)} placeholder="Actor 1, Actor 2, Actor 3" />
        </div>
        <div className="form-group full">
          <label className="form-label">DESCRIPTION</label>
          <textarea className="form-textarea" value={form.description} onChange={e => set("description", e.target.value)} placeholder="Brief plot summary..." />
        </div>
      </div>
      <div className="form-actions">
        <button className="btn-primary" onClick={submit}>{form.id ? "Update Movie" : "Add Movie"}</button>
        <button className="btn-secondary" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

    
    
    
    
    
export default MovieForm