package com.example.springbootbackend.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.sql.Blob;
import java.util.Date;

@Entity
@Table(name="note")
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="nid")
    private int nid;

    @Column(name="title")
    private String title;

    @Column(name="note")
    private String note;

    @Lob
    @Column(name="image", columnDefinition="BLOB")
    private byte[] image;

    @Column(name="createdAt")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date createdAt;

    public Note() {
    }

    public Note(int nid, String title, String note, byte[] image,Date createdAt) {
        this.nid = nid;
        this.title = title;
        this.note = note;
        this.image = image;
        this.createdAt = createdAt;


    }



    public int getNid() {
        return nid;
    }

    public void setNid(int nid) {
        this.nid = nid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "Note{" +
                "nid=" + nid +
                ", title='" + title + '\'' +
                ", note='" + note + '\'' +
                ", image=" + image +
                ", createdAt=" + createdAt +
                '}';
    }
}
