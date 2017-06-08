/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service851Service } from '../../services/service-851.service';

@Component({
  selector: 'app-comp-851',
  templateUrl: './comp-851.component.html',
  styleUrls: ['./comp-851.component.css']
})
export class Comp851Component implements OnInit {

  constructor(private _service: Service851Service) { }

  ngOnInit() {
  }

}
