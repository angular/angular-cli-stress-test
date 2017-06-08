/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp390Component } from './comp-390.component';

describe('Comp390Component', () => {
  let component: Comp390Component;
  let fixture: ComponentFixture<Comp390Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp390Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
