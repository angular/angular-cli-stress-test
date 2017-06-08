/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service548Service } from '../../services/service-548.service';

@Component({
  selector: 'app-comp-548',
  templateUrl: './comp-548.component.html',
  styleUrls: ['./comp-548.component.css']
})
export class Comp548Component implements OnInit {

  constructor(private _service: Service548Service) { }

  ngOnInit() {
  }

}
