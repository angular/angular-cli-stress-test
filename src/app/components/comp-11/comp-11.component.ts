/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service11Service } from '../../services/service-11.service';

@Component({
  selector: 'app-comp-11',
  templateUrl: './comp-11.component.html',
  styleUrls: ['./comp-11.component.css']
})
export class Comp11Component implements OnInit {

  constructor(private _service: Service11Service) { }

  ngOnInit() {
  }

}
