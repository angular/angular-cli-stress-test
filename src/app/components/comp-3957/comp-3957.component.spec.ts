/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3957Component } from './comp-3957.component';

describe('Comp3957Component', () => {
  let component: Comp3957Component;
  let fixture: ComponentFixture<Comp3957Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3957Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3957Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
