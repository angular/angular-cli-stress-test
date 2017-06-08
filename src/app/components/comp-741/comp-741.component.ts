/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service741Service } from '../../services/service-741.service';

@Component({
  selector: 'app-comp-741',
  templateUrl: './comp-741.component.html',
  styleUrls: ['./comp-741.component.css']
})
export class Comp741Component implements OnInit {

  constructor(private _service: Service741Service) { }

  ngOnInit() {
  }

}
