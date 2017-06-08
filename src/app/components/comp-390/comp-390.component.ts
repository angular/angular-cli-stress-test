/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service390Service } from '../../services/service-390.service';

@Component({
  selector: 'app-comp-390',
  templateUrl: './comp-390.component.html',
  styleUrls: ['./comp-390.component.css']
})
export class Comp390Component implements OnInit {

  constructor(private _service: Service390Service) { }

  ngOnInit() {
  }

}
