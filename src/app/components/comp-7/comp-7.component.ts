/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service7Service } from '../../services/service-7.service';

@Component({
  selector: 'app-comp-7',
  templateUrl: './comp-7.component.html',
  styleUrls: ['./comp-7.component.css']
})
export class Comp7Component implements OnInit {

  constructor(private _service: Service7Service) { }

  ngOnInit() {
  }

}
