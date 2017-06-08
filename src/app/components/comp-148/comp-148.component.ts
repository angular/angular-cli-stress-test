/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service148Service } from '../../services/service-148.service';

@Component({
  selector: 'app-comp-148',
  templateUrl: './comp-148.component.html',
  styleUrls: ['./comp-148.component.css']
})
export class Comp148Component implements OnInit {

  constructor(private _service: Service148Service) { }

  ngOnInit() {
  }

}
