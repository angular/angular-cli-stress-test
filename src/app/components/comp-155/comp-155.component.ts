/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service155Service } from '../../services/service-155.service';

@Component({
  selector: 'app-comp-155',
  templateUrl: './comp-155.component.html',
  styleUrls: ['./comp-155.component.css']
})
export class Comp155Component implements OnInit {

  constructor(private _service: Service155Service) { }

  ngOnInit() {
  }

}
