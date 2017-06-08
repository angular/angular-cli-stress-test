/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service562Service } from '../../services/service-562.service';

@Component({
  selector: 'app-comp-562',
  templateUrl: './comp-562.component.html',
  styleUrls: ['./comp-562.component.css']
})
export class Comp562Component implements OnInit {

  constructor(private _service: Service562Service) { }

  ngOnInit() {
  }

}
