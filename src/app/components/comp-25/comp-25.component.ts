/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service25Service } from '../../services/service-25.service';

@Component({
  selector: 'app-comp-25',
  templateUrl: './comp-25.component.html',
  styleUrls: ['./comp-25.component.css']
})
export class Comp25Component implements OnInit {

  constructor(private _service: Service25Service) { }

  ngOnInit() {
  }

}
