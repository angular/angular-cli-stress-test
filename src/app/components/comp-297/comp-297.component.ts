/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service297Service } from '../../services/service-297.service';

@Component({
  selector: 'app-comp-297',
  templateUrl: './comp-297.component.html',
  styleUrls: ['./comp-297.component.css']
})
export class Comp297Component implements OnInit {

  constructor(private _service: Service297Service) { }

  ngOnInit() {
  }

}
