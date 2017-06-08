/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service618Service } from '../../services/service-618.service';

@Component({
  selector: 'app-comp-618',
  templateUrl: './comp-618.component.html',
  styleUrls: ['./comp-618.component.css']
})
export class Comp618Component implements OnInit {

  constructor(private _service: Service618Service) { }

  ngOnInit() {
  }

}
