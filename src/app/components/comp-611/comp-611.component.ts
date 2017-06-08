/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service611Service } from '../../services/service-611.service';

@Component({
  selector: 'app-comp-611',
  templateUrl: './comp-611.component.html',
  styleUrls: ['./comp-611.component.css']
})
export class Comp611Component implements OnInit {

  constructor(private _service: Service611Service) { }

  ngOnInit() {
  }

}
