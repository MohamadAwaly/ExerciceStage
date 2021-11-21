import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public id ?: string | null;
  public name?: string | null;
  // public fragment?: string | null;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      console.log(this.id);
    });
    this.activatedRoute.queryParamMap.subscribe((paramMap: ParamMap) => {
      this.name = paramMap.get('name');
    });
    // @ts-ignore
    this.activatedRoute.fragment.subscribe((fragment: string) => {
      console.log(fragment);
    });
  }

}
