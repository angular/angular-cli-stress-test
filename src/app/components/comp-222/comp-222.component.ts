/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service222Service } from '../../services/service-222.service';

@Component({
  selector: 'app-comp-222',
  templateUrl: './comp-222.component.html',
  styleUrls: ['./comp-222.component.css']
})
export class Comp222Component implements OnInit {

  constructor(private _service: Service222Service) { }

  ngOnInit() {
  }

}
