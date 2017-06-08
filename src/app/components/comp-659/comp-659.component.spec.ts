/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp659Component } from './comp-659.component';

describe('Comp659Component', () => {
  let component: Comp659Component;
  let fixture: ComponentFixture<Comp659Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp659Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp659Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
