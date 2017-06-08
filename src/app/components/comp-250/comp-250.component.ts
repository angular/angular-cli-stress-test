/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service250Service } from '../../services/service-250.service';

@Component({
  selector: 'app-comp-250',
  templateUrl: './comp-250.component.html',
  styleUrls: ['./comp-250.component.css']
})
export class Comp250Component implements OnInit {

  constructor(private _service: Service250Service) { }

  ngOnInit() {
  }

}
