/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service410Service } from '../../services/service-410.service';

@Component({
  selector: 'app-comp-410',
  templateUrl: './comp-410.component.html',
  styleUrls: ['./comp-410.component.css']
})
export class Comp410Component implements OnInit {

  constructor(private _service: Service410Service) { }

  ngOnInit() {
  }

}
