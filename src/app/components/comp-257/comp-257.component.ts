/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service257Service } from '../../services/service-257.service';

@Component({
  selector: 'app-comp-257',
  templateUrl: './comp-257.component.html',
  styleUrls: ['./comp-257.component.css']
})
export class Comp257Component implements OnInit {

  constructor(private _service: Service257Service) { }

  ngOnInit() {
  }

}
