/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3378Component } from './comp-3378.component';

describe('Comp3378Component', () => {
  let component: Comp3378Component;
  let fixture: ComponentFixture<Comp3378Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3378Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
