/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service53Service } from '../../services/service-53.service';

@Component({
  selector: 'app-comp-53',
  templateUrl: './comp-53.component.html',
  styleUrls: ['./comp-53.component.css']
})
export class Comp53Component implements OnInit {

  constructor(private _service: Service53Service) { }

  ngOnInit() {
  }

}
