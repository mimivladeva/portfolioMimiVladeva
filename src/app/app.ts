import { Component } from '@angular/core';
import { Hero } from './features/home/hero/hero';
import {FeaturedProjects } from './features/home/featured-projects/featured-projects';
import { ContactSection } from './features/home/contact-section/contact-section';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Hero, FeaturedProjects,ContactSection],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
