/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp41Component } from './comp-41.component';

describe('Comp41Component', () => {
  let component: Comp41Component;
  let fixture: ComponentFixture<Comp41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp41Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
