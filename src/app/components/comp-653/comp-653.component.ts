/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service653Service } from '../../services/service-653.service';

@Component({
  selector: 'app-comp-653',
  templateUrl: './comp-653.component.html',
  styleUrls: ['./comp-653.component.css']
})
export class Comp653Component implements OnInit {

  constructor(private _service: Service653Service) { }

  ngOnInit() {
  }

}
