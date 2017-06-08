/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service613Service } from '../../services/service-613.service';

@Component({
  selector: 'app-comp-613',
  templateUrl: './comp-613.component.html',
  styleUrls: ['./comp-613.component.css']
})
export class Comp613Component implements OnInit {

  constructor(private _service: Service613Service) { }

  ngOnInit() {
  }

}
