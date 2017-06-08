/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service993Service } from '../../services/service-993.service';

@Component({
  selector: 'app-comp-993',
  templateUrl: './comp-993.component.html',
  styleUrls: ['./comp-993.component.css']
})
export class Comp993Component implements OnInit {

  constructor(private _service: Service993Service) { }

  ngOnInit() {
  }

}
