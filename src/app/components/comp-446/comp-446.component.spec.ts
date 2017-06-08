/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp446Component } from './comp-446.component';

describe('Comp446Component', () => {
  let component: Comp446Component;
  let fixture: ComponentFixture<Comp446Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp446Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp446Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
