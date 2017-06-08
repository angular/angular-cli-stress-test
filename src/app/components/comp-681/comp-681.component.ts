/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service681Service } from '../../services/service-681.service';

@Component({
  selector: 'app-comp-681',
  templateUrl: './comp-681.component.html',
  styleUrls: ['./comp-681.component.css']
})
export class Comp681Component implements OnInit {

  constructor(private _service: Service681Service) { }

  ngOnInit() {
  }

}
