/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service36Service } from '../../services/service-36.service';

@Component({
  selector: 'app-comp-36',
  templateUrl: './comp-36.component.html',
  styleUrls: ['./comp-36.component.css']
})
export class Comp36Component implements OnInit {

  constructor(private _service: Service36Service) { }

  ngOnInit() {
  }

}
