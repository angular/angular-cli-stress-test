/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service446Service } from '../../services/service-446.service';

@Component({
  selector: 'app-comp-446',
  templateUrl: './comp-446.component.html',
  styleUrls: ['./comp-446.component.css']
})
export class Comp446Component implements OnInit {

  constructor(private _service: Service446Service) { }

  ngOnInit() {
  }

}
