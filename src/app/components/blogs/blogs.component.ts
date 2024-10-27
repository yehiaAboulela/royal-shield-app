import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../shared/services/blog.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  constructor(private blogService: BlogService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  blogForm: FormGroup = this.fb.group({
    label_en: ['', Validators.required],
    heading_en: ['', Validators.required],
    subHeading_en: ['', Validators.required],
    label_ar: ['', Validators.required],
    heading_ar: ['', Validators.required],
    subHeading_ar: ['', Validators.required],
    date: ['', Validators.required],
    img: ['https://tools.royalnanoceramic.com/blogs/', Validators.required],
    points: this.fb.array([this.createPoint()]),
  });

  // Getter for points FormArray
  get points(): FormArray {
    return this.blogForm.get('points') as FormArray;
  }

  // Method to create a new point form group (both English and Arabic)
  createPoint(): FormGroup {
    return this.fb.group({
      head_en: ['', Validators.required],
      body_en: ['', Validators.required],
      head_ar: ['', Validators.required],
      body_ar: ['', Validators.required],
    });
  }

  // Method to add a new point form group to the points array
  addPoint(): void {
    this.points.push(this.createPoint());
  }

  // Method to remove a point
  removePoint(index: number): void {
    this.points.removeAt(index);
  }

  // Method to handle form submission
  onSubmit(): void {
    if (this.blogForm.valid) {
      console.log(this.blogForm.value);
      this.blogService.postBlog(this.blogForm.value).subscribe({
        next: (res) => {
          console.log('Blog added successfully:', res);
        },
        error: (err) => {
          console.error('Error adding blog:', err);
        },
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
/* 

*/
