/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3889Component } from './comp-3889.component';

describe('Comp3889Component', () => {
  let component: Comp3889Component;
  let fixture: ComponentFixture<Comp3889Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3889Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3889Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
