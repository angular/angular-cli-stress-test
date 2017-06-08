/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service217Service } from '../../services/service-217.service';

@Component({
  selector: 'app-comp-217',
  templateUrl: './comp-217.component.html',
  styleUrls: ['./comp-217.component.css']
})
export class Comp217Component implements OnInit {

  constructor(private _service: Service217Service) { }

  ngOnInit() {
  }

}
