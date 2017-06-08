/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service601Service } from '../../services/service-601.service';

@Component({
  selector: 'app-comp-601',
  templateUrl: './comp-601.component.html',
  styleUrls: ['./comp-601.component.css']
})
export class Comp601Component implements OnInit {

  constructor(private _service: Service601Service) { }

  ngOnInit() {
  }

}
