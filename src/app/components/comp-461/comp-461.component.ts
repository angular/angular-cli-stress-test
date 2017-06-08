/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service461Service } from '../../services/service-461.service';

@Component({
  selector: 'app-comp-461',
  templateUrl: './comp-461.component.html',
  styleUrls: ['./comp-461.component.css']
})
export class Comp461Component implements OnInit {

  constructor(private _service: Service461Service) { }

  ngOnInit() {
  }

}
