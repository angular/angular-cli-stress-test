/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service445Service } from '../../services/service-445.service';

@Component({
  selector: 'app-comp-445',
  templateUrl: './comp-445.component.html',
  styleUrls: ['./comp-445.component.css']
})
export class Comp445Component implements OnInit {

  constructor(private _service: Service445Service) { }

  ngOnInit() {
  }

}
