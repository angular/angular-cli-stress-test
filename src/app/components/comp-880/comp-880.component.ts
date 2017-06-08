/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service880Service } from '../../services/service-880.service';

@Component({
  selector: 'app-comp-880',
  templateUrl: './comp-880.component.html',
  styleUrls: ['./comp-880.component.css']
})
export class Comp880Component implements OnInit {

  constructor(private _service: Service880Service) { }

  ngOnInit() {
  }

}
