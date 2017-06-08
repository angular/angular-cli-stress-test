/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service560Service } from '../../services/service-560.service';

@Component({
  selector: 'app-comp-560',
  templateUrl: './comp-560.component.html',
  styleUrls: ['./comp-560.component.css']
})
export class Comp560Component implements OnInit {

  constructor(private _service: Service560Service) { }

  ngOnInit() {
  }

}
