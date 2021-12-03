import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.page.html',
  styleUrls: ['./viewer.page.scss'],
})
export class ViewerPage implements OnInit {
  public view: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  toTitleCase(str: string): string {
    return str.replace(
      /\w\S*/g,
      (txt: string): string => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  }
  ngOnInit() {
    this.view = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
