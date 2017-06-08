/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service781Service } from '../../services/service-781.service';

@Component({
  selector: 'app-comp-781',
  templateUrl: './comp-781.component.html',
  styleUrls: ['./comp-781.component.css']
})
export class Comp781Component implements OnInit {

  constructor(private _service: Service781Service) { }

  ngOnInit() {
  }

}
