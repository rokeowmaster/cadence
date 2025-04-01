import { groq } from "next-sanity";
import client from "./client";

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]`
  );
}

export async function getBlogs() {
  return client.fetch(
    groq`*[_type == "blog"]`
  );
}

export async function getJobs() {
  return client.fetch(
    groq`*[_type == "job"]`
  );
}