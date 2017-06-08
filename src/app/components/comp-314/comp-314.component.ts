/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service314Service } from '../../services/service-314.service';

@Component({
  selector: 'app-comp-314',
  templateUrl: './comp-314.component.html',
  styleUrls: ['./comp-314.component.css']
})
export class Comp314Component implements OnInit {

  constructor(private _service: Service314Service) { }

  ngOnInit() {
  }

}
