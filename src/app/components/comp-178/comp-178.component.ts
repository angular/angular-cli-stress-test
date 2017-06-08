/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service178Service } from '../../services/service-178.service';

@Component({
  selector: 'app-comp-178',
  templateUrl: './comp-178.component.html',
  styleUrls: ['./comp-178.component.css']
})
export class Comp178Component implements OnInit {

  constructor(private _service: Service178Service) { }

  ngOnInit() {
  }

}
