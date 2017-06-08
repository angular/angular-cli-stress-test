/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp232Component } from './comp-232.component';

describe('Comp232Component', () => {
  let component: Comp232Component;
  let fixture: ComponentFixture<Comp232Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp232Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
