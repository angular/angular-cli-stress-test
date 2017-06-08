/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3527Component } from './comp-3527.component';

describe('Comp3527Component', () => {
  let component: Comp3527Component;
  let fixture: ComponentFixture<Comp3527Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3527Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3527Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
